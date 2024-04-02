/// <reference lib="webworker" />
// Configs

import { CompilerMessageHandler, CompilerMessageType, CompilerRequest, CompilerResponse, CompilerState, PromiseResolver } from "../compiler-service/compiler-service.types";

import { FsNodeFolder } from "../fs-service/fs.service.types";

// Bootstrap pyodide

importScripts("assets/pyodide/pyodide.js");
declare var loadPyodide: any;

//let worker: PyodideFsWorker;
async function main() {
  let worker = new PyodideWorker();
}

class PyodideWorker{
  
  requestQueueNotify = new Map<string,CompilerRequest>();
  requestQueueState = new Map<string,CompilerRequest>();
  requestQueueStdout = new Map<string,CompilerRequest>();
  requestQueueStderr = new Map<string,CompilerRequest>();

  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  pyodide: any;
  fs: any;
  loadPyodide: any;
  micropip: any;
  mountPoint?:string;
  isReady = false;
  readyPromise: Promise<boolean>;
  readyResolver: PromiseResolver<boolean>;
  stdinPending=false;
  stdinResolver?: PromiseResolver<string>;
  isSync = false;
  needSync = false;
  stdinBuffer = new Array<string>();
  lastState = CompilerState.Unknown
  lastResult?:any
  interruptBuffer = new Uint8Array(1);
  interruptTimer:any
  
  constructor(){
    addEventListener("message", async ( payload:any ) => { this.onData(payload.data) })

    this.requestQueueStdout = new Map();
    this.requestQueueStderr = new Map();

    
    
    //onReady
    let readyResolver: PromiseResolver<boolean>;
    this.readyPromise =  new Promise<boolean>((resolve, reject) => {
      readyResolver = resolve;
    })
    this.readyResolver = (value)=>{ readyResolver(value) }

    
    
    
    //Send Init event, but outside the constructor
    setTimeout(()=>{this.sendState(CompilerState.Loading)})

  
    this.initPydiode().then(()=>{
      //this.load(this.mountPoint);
      this.interruptBuffer[0]=0
      this.pyodide.setInterruptBuffer(this.interruptBuffer)
      this.sendState(CompilerState.Init)
    }).catch( (error:any)=>{
      this.sendState(CompilerState.Error, error)
    });
    

  }

  async initPydiode(){
    
    console.log("loadPyodide: ...")
    
    let options = {
      stdin: ()=>{return this.onStdin()},
      stdout: (msg:string)=>{this.sendStdout(msg)},
      stderr: (msg:string)=>{this.sendStderr(msg)},
    }

    //console.log(loadPyodide)
    
    this.pyodide = await loadPyodide(options);
    this.fs = this.pyodide.FS;
    await this.pyodide.loadPackage(["micropip"]);
    this.micropip = this.pyodide.pyimport("micropip");
    
    console.log("loadPyodide: done")
    //console.log(pyodide)

    this.setCustomHooks()
  }

  async setCustomHooks(){
    let oldInput = this.pyodide.globals.input;
    console.log("setCustomHooks:oldInput:",oldInput)


    //Globals: Input
    let localThis = this;
    this.pyodide.globals.set('input', async function (prompt?:string) {
      if (prompt && prompt.trim().length>0){localThis.sendStdout(prompt)}

      localThis.sendState(CompilerState.Stdin)
      console.log("setCustomHooks:scrivo sulla consolle!!!!")
      let stdinResolver: PromiseResolver<string>;      
      let promise =  new Promise<string>((resolve, reject) => {
        stdinResolver = resolve;
      })
      localThis.stdinResolver = (message)=>{ stdinResolver(message) }

      if(localThis.stdinBuffer.length>0){
        let line = localThis.stdinBuffer.shift()
        localThis.stdinResolver(line!)
      }

      return promise;
    });

    /*
    let signal = this.pyodide.pyimport("signal");
    signal.signal(signal.SIGINT, (signal:any, frame:any)=>{  
      console.log('setCustomHooks:signal:signal:', signal);
      console.log('setCustomHooks:signal:frame:', frame);
    })
    */




  }
  /*
  async load(mountPoint:string)
  {
    this.mountPoint = mountPoint;
    console.log("PyodideFsWorker: load")
    this.fs.mkdir(this.mountPoint);
    this.fs.mount(this.fs.filesystems.IDBFS, { root: '/' }, this.mountPoint);
    console.log("PyodideFsWorker: load: done")

    console.log("PyodideFsWorker: load: fs",this.fs)
    console.log("PyodideFsWorker: load: mounts",this.fs.mounts)
    console.log("PyodideFsWorker: load: root",this.fs.root)
    console.log("PyodideFsWorker: load: root mount",this.fs.root.mount)
  }
  */

  toString(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return this.binDecoder.decode(data) }
    return data
  }

  toArrayBuffer(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return data }
    return this.binEncoder.encode(data)
  }
  
  
  responseFromRequest(request:CompilerRequest, success:boolean=true, errors:string[]=[]):CompilerResponse{
    let response:CompilerResponse = {
      uid: request.uid,
      timestamp: Date.now(),
      success: success,
      errors: errors,
      message: {
        uid: request.message.uid,
        type: request.message.type,
        args:[],
        contents:[]
      }
    };
    return response
  }

  responseError(response:CompilerResponse, error?:string):CompilerResponse{
    response.success = false;
    if (error){response.errors.push(error)};
    return response;
  }

  syncFS(){
    if (!this.isSync){
      this.isSync = true
      this.needSync = false;
      console.log('syncFS: do!');
      this.fs.syncfs((err?:any)=>{
        if(err){
          console.log('syncFS: error while syncing, retrying')
          this.needSync = true;
        }else{
          console.log('syncFS: success!');
        }
        this.isSync = false;
        if (this.needSync){
          this.needSync = false;
          console.log('syncFS: repeat!');
          this.syncFS()
        }
      })
    }
    else{
      console.log('syncFS: queued');
      this.needSync = true;
    }
  }

  onStdin(){
    //TOD: unused??
    // localThis.sendState(CompilerState.Stdin)
    console.log('PyodideWorker:onStdin:');   
    //if (this.stdinBuffer.length > 0){}    -> What does this do?
    //let item = this.stdinBuffer.shift()
    let item = this.stdinBuffer[0];
    console.log('PyodideWorker:onStdin:', item);
    return item
  }

  execCodeAsync(code:string){
    console.log("execCode:",code)
    this.interruptBuffer[0]=0
    this.pyodide.setInterruptBuffer(this.interruptBuffer)
    this.interruptTimer = setInterval(()=>{
      try{ this.pyodide.checkInterrupt() }
      catch( e ){ 
        this.sendStderr("Process terminated by user request.")
        this.sendState(CompilerState.Killed)
        throw e;
      }
    },10)


    /*
    async pyodide.loadPackagesFromImports(code, options)
        code (string) – The code to inspect.

        options.checkIntegrity (boolean) – If true, check the integrity of the downloaded packages (default: true)

        options.errorCallback ((message: string) => void) – A callback, called with error/warning messages (optional)

        options.messageCallback ((message: string) => void) – A callback, called with progress messages (optional)
    */
    let options = {
      checkIntegrity: true, //default: true
      errorCallback: (msg:string)=>{this.sendStderr(msg)},
      messageCallback: (msg:string)=>{this.sendStdout(msg)},
    }
    this.stdinBuffer = []
    this.pyodide.loadPackagesFromImports(code,options)


    



    this.pyodide.runPythonAsync(code).then( (result:any)=>{
      console.log("execCode: result:\n",result)
      this.sendState(CompilerState.Success, result)
    }).catch( (error:any)=>{
      this.handleExecError(error)
    }).finally(()=>{
      clearInterval(this.interruptTimer)
    })
  }

  
  handleExecError(error:any){
    let sys = this.pyodide.pyimport("sys");
    let errorType = error.type;
    if (errorType == "SystemExit"){
      let exitCode = sys.last_value.code.toString();
      if(exitCode == "0"){
        this.sendState(CompilerState.Success)
      }else{
        this.sendState(CompilerState.Error, "Execution terminated with exit code: " + exitCode)
      }
      return;
    }
    this.sendState(CompilerState.Error, error.message)
    //throw error
    /*
    let props = Object.getOwnPropertyNames(sys.last_value)
    let propArgs = Object.getOwnPropertyNames(sys.last_value.args)
    let propTB = Object.getOwnPropertyNames(sys.last_value.__traceback__)

    let exceptionType = sys.last_type.toJs();
    let errorValue = sys.last_value.toJs();
    let errorTraceback = sys.last_traceback.toJs();
    console.log("execCode: error.type:", errorType)
    console.log("execCode: error.type:", errorType)
    console.log("execCode: sys.last_type:", exceptionType)
    console.log("execCode: sys.last_value:", errorValue)
    console.log("execCode: sys.last_traceback:", errorTraceback)

    console.log("execCode: error.message:", error.message )
    */
    //console.log("execCode: sys:\n", sys)
    
    //throw error;
  }



  sendNotify(title: string, msg:string, kind:string=""){
    console.log("sendNotify: ",msg)
    this.requestQueueNotify.forEach(( request:CompilerRequest, uid:string )=>{
      let response = this.responseFromRequest(request); 
      response.message.contents = [title, msg, kind]
      console.log("sendNotify:uid:\n",response)//,res)
      postMessage(response)
    })
  }

  sendState(state?: CompilerState, content?:any){
    if(!state){ state = this.lastState } //Resend the same state, used onSubscribe
    else { this.lastState = state }
    
    console.log("PyodideWorker:sendState: ",state)
    this.requestQueueState.forEach(( request:CompilerRequest, uid:string )=>{
      let response = this.responseFromRequest(request); 
      response.message.contents = [state ?? CompilerState.Unknown]
      if(content){
        response.message.contents.push(content)
      }
      console.log("sendState:uid:\n",response)
      postMessage(response)
    })
  }

  sendStdout(msg:string){
    console.log("sendStdout: "+msg)
    this.requestQueueStdout.forEach(( request:CompilerRequest, uid:string )=>{
      let response = this.responseFromRequest(request); 
      response.message.contents = [msg]
      console.log("sendStdout:uid:\n",response)//,res)
      postMessage(response)
    })
  }

  sendStderr(msg:string){
    console.log("sendStderr: "+msg)
    this.requestQueueStderr.forEach(( request:CompilerRequest, uid:string )=>{
      let response = this.responseFromRequest(request); 
      response.message.contents = [msg]
      console.log("sendStderr:uid:\n",response)//,res)
      postMessage(response)
    })
  }

  onData(request:CompilerRequest) {
    console.log('PyodideFsWorker:onData:',request);
    let action: CompilerMessageHandler | null = null;

    switch (request.message.type) {
      case CompilerMessageType.Ready:
        this.ready(request);
        break;
      case CompilerMessageType.SubscribeNotify:
        action=(request)=>{return this.subscribeNotify(request)};
        break;
      case CompilerMessageType.SubscribeState:
        action=(request)=>{return this.subscribeState(request)};
        break;
      case CompilerMessageType.SubscribeStdout:
        action=(request)=>{return this.subscribeStdout(request)};
        break;
      case CompilerMessageType.SubscribeStderr:
        action=(request)=>{return this.subscribeStderr(request)};
        break;
      case CompilerMessageType.SendStdin:
        action=(request)=>{return this.sendStdin(request)};
        break;
      case CompilerMessageType.InstallPackages:
        action=(request)=>{return this.installPackages(request)};
        break;
      case CompilerMessageType.ExecuteCode:
        action=(request)=>{return this.executeCode(request)};
        break;
      case CompilerMessageType.ExecuteFile:
        action=(request)=>{return this.executeFile(request)};
        break;
      case CompilerMessageType.StopExecution:
        action=(request)=>{return this.stopExecution(request)};
        break;
      case CompilerMessageType.Mount:
        action=(request)=>{return this.mount(request)};
        break;
      case CompilerMessageType.Unmount:
        action=(request)=>{return this.unmount(request)};
        break;
      case CompilerMessageType.CreateDirectory:
        action=(request)=>{return this.createDirectory(request)};
        break;
      case CompilerMessageType.ReadDirectory:
        action=(request)=>{return this.readDirectory(request)};
        break;
      case CompilerMessageType.WriteFile:
        action=(request)=>{return this.writeFile(request)};
        break;
      case CompilerMessageType.ReadFile:
        action=(request)=>{return this.readFile(request)};
        break;
      case CompilerMessageType.ScanDirectory:
        action=(request)=>{return this.scanDirectory(request)};
        break;
      case CompilerMessageType.RenameItem:
        action=(request)=>{return this.renameItem(request)};
        break;
      case CompilerMessageType.Delete:
        action=(request)=>{return this.delete(request)};
        break;
      case CompilerMessageType.Exists:
        action=(request)=>{return this.exists(request)};
        break;
      default: break;
    }
    if(action){ 
      let response = action(request);
      if (response){ postMessage(response) }
    }
  }

  ready(request:CompilerRequest){
    let response = this.responseFromRequest(request);
    response.message.args = ['true'];
    if (this.isReady) {
      postMessage(response);
    }else{
      this.readyPromise.then((ready)=>{
        response.message.args = [ready?'true':'false'];
        postMessage(response);
      })
    }
  }

  installPackages(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let packages = request.message.args;
    console.log("installPackages:\n",packages)//,res)
    let res = this.micropip.install(packages)
    this.syncFS()
    console.log("installPackages: DONE!\n",res)
    response.message.contents.push("")//res+": "+res)
    
    return response;
  }

  executeCode(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let rawContent = request.message.contents[0];
    let code;
    if(rawContent instanceof ArrayBuffer){
      code = new TextDecoder().decode(rawContent);
    }else{
      code = rawContent
    }
    console.log("executeCode:\n",code)//,res)
    this.execCodeAsync(code)


    response.message.contents = ["true"]
    
    return response;
  }

  stopExecution(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let wasRunning = this.lastState == CompilerState.Run || this.lastState == CompilerState.Stdin
    
    let arg = request.message.args[0] ?? "2"
    let signal = parseInt(arg); // 2 stands for SIGINT.
    if(isNaN(signal)){signal = 2}
    console.log("stopExecution:",signal)//,res)
    setTimeout(()=>{this.interruptBuffer[0] = signal})

    response.message.args = [wasRunning?"true":"false"]
    return response
  }

  executeFile(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let fullpath = request.message.args[0];
    let path = this.mountPoint +"/"+ fullpath
    console.log("executeFile:",path)//,res)
    
    let rawContent = this.fs.readFile(path) as Uint8Array
    let code = new TextDecoder().decode(rawContent.buffer);

    this.stdinBuffer = []
    this.execCodeAsync(code)

    response.message.contents = ["true"]
    return response
  }

  subscribeNotify(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let enable = request.message.args[0] == 'true';
    if (enable){
      this.requestQueueNotify.set(request.uid, request)
    } else{
      this.requestQueueNotify.delete(request.uid)
    }
    console.log("subscribeNotify:\n", enable)//,res)
    response.message.args = [enable?'true':'false']
    return response;
  }

  subscribeState(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let enable = request.message.args[0] == 'true';
    if (enable){
      this.requestQueueState.set(request.uid, request)
      setTimeout(()=>{this.sendState(CompilerState.Loading)})
    } else {
      this.requestQueueState.delete(request.uid)
    }
    console.log("subscribeState:\n", enable)//,res)
    response.message.args = [enable?'true':'false']
    return response;
  }

  subscribeStdout(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let enable = request.message.args[0] == 'true';
    if (enable){
      this.requestQueueStdout.set(request.uid, request)
    } else{
      this.requestQueueStdout.delete(request.uid)
    }
    console.log("subscribeStdout:\n", enable)//,res)
    response.message.args = [enable?'true':'false']
    return response;
  }

  subscribeStderr(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let enable = request.message.args[0] == 'true';
    if (enable){
      this.requestQueueStderr.set(request.uid, request)
    } else{
      this.requestQueueStderr.delete(request.uid)
    }
    console.log("subscribeStderr:\n", enable)//,res)
    response.message.args = [enable?'true':'false']
    return response;
  }

  sendStdin(request:CompilerRequest){
    let response = this.responseFromRequest(request); 
    let data = request.message.contents[0];
    console.log("PyodideWorker:sendStdin:\n",data)
    this.sendState(CompilerState.Run)
    if (this.stdinResolver){
      this.stdinResolver(this.toString(data))
      this.stdinResolver=undefined
    }else{
      this.stdinBuffer.push(this.toString(data))
    }
    response.message.args = ['true']
    
    return response;
  }

  mount(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){ 
      return this.responseError(response,"createDirectory: Requires at least 1 path as argument");
    }
    let mountPoint = request.message.args[0];
    
    this.mountPoint = mountPoint;
    console.log("PyodideFsWorker: mount:",mountPoint)
    
    this.sendState(CompilerState.Loading)

    this.fs.mkdir(this.mountPoint);
    this.fs.mount(this.fs.filesystems.IDBFS, { root: '/' }, this.mountPoint);
    this.fs.syncfs(true,()=>{
      this.isReady = true;
      this.sendState(CompilerState.Ready)
      this.readyResolver(this.isReady);
    });
    
    console.log("PyodideFsWorker: mount: done")
    
    response.message.args = [mountPoint];
    return response;
  }

  unmount(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){ 
      return this.responseError(response,"createDirectory: Requires at least 1 path as argument");
    }
    let mountPoint = request.message.args[0];
    
    console.log("PyodideFsWorker: unmount:",mountPoint)

    this.sendState(CompilerState.Loading)

    this.fs.unmount(mountPoint);
    this.mountPoint = ""
    this.isReady=false
    this.fs.syncfs(true,()=>{
      this.isReady = false;
      this.sendState(CompilerState.Init)
      this.readyResolver(this.isReady);
    });
    
    console.log("PyodideFsWorker: unmount: done")
    
    response.message.args = [mountPoint];
    return response;
  }

  createDirectory(request:CompilerRequest):CompilerResponse{

    console.log("PYTHON CREATE DIRECTORY")
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){ 
      return this.responseError(response,"createDirectory: Requires at least 1 path as argument");
    }
    //TODO: allow for multiple queries;
    let fullpath = request.message.args[0];
    if(!this.internal_exists(this.mountPoint + fullpath)){
      console.log("CI ENTRO")
      console.log("ABC: ", this.mountPoint + " " + fullpath) 
      //var str = this.mount + fullpath.replace('.', '')
      //console.log(str)
      let res = this.fs.mkdir(this.mountPoint + fullpath);
      console.log('pydiode:mkdir:',res)
      this.syncFS()
    }
    
    response.message.args = [fullpath];
    return response;
  }

  getPath(node:any){
    //any: https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.getPath
    let path = this.fs.getPath(node)
    let pattern =  new RegExp("^"+this.mountPoint); 
    return path.replace(pattern,"/").replace(/\/\/+/,"/");
  }

  readDirectory(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    let curDir = this.scanDirectory_recursive(fullpath)
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir,this.jsonReplacer)]
    return response;
  }


  scanDirectory(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    console.log("scanDirectory: ", fullpath)
    let curDir = this.scanDirectory_recursive(fullpath, true)
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir,this.jsonReplacer)]
    return response;
  }

  jsonReplacer(key:any,value:any){
    if (value instanceof ArrayBuffer){
      let buffer = new Uint8Array(value)
      return {
        constructor: value.constructor.name,
        data: Array.from(buffer),
        flags: []
      }
    }
    return value
  }

  renameItem(request:CompilerRequest):CompilerResponse {
    console.log("PYTHON RENAME ITEM");

    let response = this.responseFromRequest(request);

    console.log("RENAME REQUEST: ", request)
    console.log("RENAME RESPONSE: ", response)

    const oldpath = this.mountPoint + request.message.args[0];
    const newpath = this.mountPoint + request.message.args[1];

    console.log("OLDPATH: ", oldpath)
    console.log("NEWPATH: ", newpath)

    console.log("OLD FS: ", this.fs)
    //var res = this.fs.rename(oldpath, newpath);
    this.fs.rename(oldpath, newpath);
    this.syncFS();
    //console.log("NEW FS: ", res)

    response.message.args = [oldpath, newpath];
    return response;
  }


  scanDirectory_recursive(fullpath:string, recursive=false):FsNodeFolder{
    let res = this.fs.lookupPath(this.mountPoint + fullpath);
    console.log("scanDirectory_recursive: ", res)
    console.log("scanDirectory_recursive:contents: ", res.node.contents);
    let curDir:FsNodeFolder = {
      folders: [],
      files: [],
      name: res.node.name,
      path: this.getPath(res.node)
    };

    for(let name in res.node.contents){
      let item = res.node.contents[name];
      let path = this.getPath(item);
      if (this.fs.isDir(item.mode)){
        let childDir;
        if (recursive){
          childDir = this.scanDirectory_recursive(path, true);
        }
        else{
          childDir = {
            folders: [],
            files: [],
            name: name,
            path: path
          }
        }
        curDir.folders.push(childDir);
      }else{
        let content = this.fs.readFile(this.mountPoint + path)
        curDir.files.push({
          name: name,
          path: path,
          content: content.buffer
        })
      }
    }

    return curDir;
  }

  writeFile(request:CompilerRequest):CompilerResponse{
    
    let response = this.responseFromRequest(request);
    let nargs = request.message.args.length;
    let ncont = request.message.contents.length
    if ( nargs < 1 || nargs < ncont ){ 
      return this.responseError(response,"writeFile: Requires at least 1 path as argument and 1 content");
    }
    
    let fullpath = request.message.args[0];
    let data = request.message.contents[0];
    let content;
    let options = {encoding: "binary"}
    if (data instanceof ArrayBuffer){
      content = new Uint8Array(data)
      options.encoding = "utf8"
    }else{
      content = data
    }

    console.log("writeFile: ", fullpath)
    console.log("writeFile:content: ", content)
    let res = this.fs.writeFile(this.mountPoint + fullpath, content, options);
    console.log("writeFile:res: ", res)
    this.syncFS()
    return response;
  }

  readFile(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request);
    if ( request.message.args.length < 1){ 
      return this.responseError(response,"readFile: Requires at least 1 path as argument");
    }
     
    let fullpath = request.message.args[0];

    let opts:{} = { encoding: 'utf8' }
    if (request.message.args.length == 2 && request.message.args[1] == 'binary' ){
      opts = {encoding: 'binary'} 
    }

    console.log("readFile: ", fullpath)
    let content = this.fs.readFile(this.mountPoint + fullpath, opts);
    console.log('readFile:content:\n', content.length)
    if(content instanceof Uint8Array){
      console.log('readFile:content: BUFFER',content)
      response.message.contents = [content.buffer];
    }
    else{
      console.log('readFile:content: STRING')
      response.message.contents = [content];
    }
    return response;
  }

  delete(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request); 
    
    if (request.message.args.length < 1){
      response.message.args = ["false"]
      return response;  
    }

    
    let fullpath = request.message.args[0];
    console.log("delete: ", fullpath)
    //TODO: use lookupPath and isDir/isFile
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.lookupPath
    //TODO: do it recursive
    try{this.fs.rmdir(this.mountPoint + fullpath)}catch(_){}
    try{this.fs.unlink(this.mountPoint + fullpath)}catch(_){}
    this.syncFS()
    response.message.args = ["true"]
    return response;
  }

  exists(request:CompilerRequest):CompilerResponse{
    let response = this.responseFromRequest(request); 
    if (request.message.args.length < 1){
      response.message.args = ["false"]
      return response;  
    }
    let fullpath = request.message.args[0];
    console.log("exists: ", this.mountPoint + fullpath)
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.analyzePath
    let exists = this.internal_exists(this.mountPoint + fullpath)
    console.log("exists:", exists)
    response.message.args = [exists?'true':'false']
    return response;
  }

  internal_exists(path:string){
    console.log("internal_file_exists:internal_exists", path)
    let res = this.fs.analyzePath(path)
    console.log("internal_file_exists:analyzePath", res)
    return res["exists"]
  }
}
  



main()
