/// <reference lib="webworker" />
// Configs


let pyodideRoot = "/"
let pyodideMount = "/mnt"

// Bootstrap pyodide

importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");


//
//wget https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js
//wget https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide_py.tar
//wget https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.asm.js
//wget https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js.map
//importScripts("./assets/pyodide.js");

declare var loadPyodide: any;

//let worker: PyodideFsWorker;
async function main() {
  
  let worker = new PyodideWorker(pyodideRoot, pyodideMount);
}



// Worker definition 
//TODO: import claees from pydiode-fsdriver
type PromiseResolver<T> = (value: T | PromiseLike<T>) => void;


export interface FsNode {
  name: string;
  path: string;
}

export interface FsNodeFolder extends FsNode {
  folders: FsNodeFolder[];
  files: FsNodeFile[];
}
export interface FsNodeFile extends FsNode {}


export enum PyodideMessageType {
  Ready = 'Ready',
  InstallPackages = 'InstallPackages',
  ExecuteFile = 'ExecuteFile',
  ExecuteCode = 'ExecuteCode',
  SubscribeStdout = 'SubscribeStdout',
  SubscribeStderr = 'SubscribeStderr',
  SendStdin = 'SendStdin',
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory',
  Exists = 'Exists',
  Delete = 'Delete', 
}

export interface PyodideMessage {
  uid: string;
  type: PyodideMessageType;
  args: string[];
  contents: Array<string|ArrayBuffer>;
}

export interface PyodideRequest {
  uid: string;
  timestamp: number;
  message: PyodideMessage;
}

export interface PyodideResponse {
  uid: string;
  timestamp: number;
  success: boolean;
  message: PyodideMessage;
  errors: string[];
}

export type FsMessageHandler = (message:PyodideRequest)=>PyodideResponse;

class PyodideWorker{
  
  requestQueueStdout = new Map<string,PyodideRequest>();
  requestQueueStderr = new Map<string,PyodideRequest>();

  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  pyodide: any;
  fs: any;
  loadPyodide: any;
  micropip: any;
  root:string;
  mount:string;
  isReady = false;
  readyPromise: Promise<boolean>;
  readyResolver: PromiseResolver<boolean>;
  stdinPending=false;
  stdinResolver?: PromiseResolver<string>;
  isSync = false;
  needSync = false;
  stdinBuffer = new Array<string>();

  constructor(root:string, mount:string ){
    this.root = root;
    this.mount = mount;

    this.requestQueueStdout = new Map();
    this.requestQueueStderr = new Map();
    
    //onReady
    let readyResolver: PromiseResolver<boolean>;
    this.readyPromise =  new Promise<boolean>((resolve, reject) => {
      readyResolver = resolve;
    })
    this.readyResolver = (value)=>{ readyResolver(value) }

    
    addEventListener("message", ( payload:any ) => { this.onData(payload.data) })

   

    this.initPydiode().then(()=>{
      this.load(this.root, this.mount);
      this.fs.syncfs(()=>{
        this.isReady = true;
        this.readyResolver(this.isReady);
      });
    })
  }

  async initPydiode(){
    
    console.log("loadPyodide: ...")
    
    let options = {
      stdin: ()=>{return this.onStdin()},
      stdout: (msg:string)=>{this.onStdout(msg)},
      stderr: (msg:string)=>{this.onStderr(msg)},
    }

    //console.log(loadPyodide)
    this.pyodide = await loadPyodide(options);
    this.fs = this.pyodide.FS;
    await this.pyodide.loadPackage(["micropip"]);
    this.micropip = this.pyodide.pyimport("micropip");
    
    console.log("loadPyodide: done")
    //console.log(pyodide)
  }

  async load(root:string, mount:string)
  {
    this.root = root;
    this.mount = mount;
    console.log("PyodideFsWorker: load")
    this.fs.mkdir(this.mount);
    this.fs.mount(this.fs.filesystems.IDBFS, { root: root }, this.mount);
    console.log("PyodideFsWorker: load: done")

    
    console.log(this.fs.mounts)
    console.log(this.fs.root)
    console.log(this.fs.root.mount)
  }

  toString(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return this.binDecoder.decode(data) }
    return data
  }

  toArrayBuffer(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return data }
    return this.binEncoder.encode(data)
  }
  
  
  responseFromRequest(request:PyodideRequest, success:boolean=true, errors:string[]=[]):PyodideResponse{
    let response:PyodideResponse = {
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

  responseError(response:PyodideResponse, error?:string):PyodideResponse{
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

  async onStdin(){
    let cnt = this.stdinBuffer.length
    let msg;
    if(cnt > 0){
      let items = this.stdinBuffer.splice(0,cnt)
      msg = items.concat("")
      
    }
    return msg
    /*
    else{
      //onStdin
      let stdinResolver: PromiseResolver<string>;
      let stdinPromise =  new Promise<string>((resolve, reject) => {
        stdinResolver = resolve;
      })
      this.stdinResolver = (value)=>{ 
        stdinResolver(value); 
        this.stdinResolver = undefined; 
      }
      return stdinPromise
    }
    */
  }

  onStdout(msg:string){
    console.log("stdout: "+msg)
    this.requestQueueStdout.forEach(( request:PyodideRequest, uid:string )=>{
      let response = this.responseFromRequest(request); 
      response.message.contents = [msg]
      console.log("stdout:uid:\n",response)//,res)
      postMessage(response)
    })
  }

  onStderr(msg:string){
    console.log("stderr: "+msg)
    this.requestQueueStderr.forEach(( request:PyodideRequest, uid:string )=>{
      let response = this.responseFromRequest(request); 
      response.message.contents = [msg]
      console.log("stderr:uid:\n",response)//,res)
      postMessage(response)
    })
  }

  onData(request:PyodideRequest) {
    console.log('PyodideFsWorker:onData:',request);
    let action: FsMessageHandler | null = null;

    switch (request.message.type) {
      case PyodideMessageType.Ready:
        this.ready(request);
        break;
      case PyodideMessageType.SubscribeStdout:
        action=(request)=>{return this.subscribeStdout(request)};
        break;
      case PyodideMessageType.SubscribeStderr:
        action=(request)=>{return this.subscribeStderr(request)};
        break;
      case PyodideMessageType.SendStdin:
        action=(request)=>{return this.sendStdin(request)};
        break;
      case PyodideMessageType.InstallPackages:
        action=(request)=>{return this.installPackages(request)};
        break;
      case PyodideMessageType.ExecuteCode:
        action=(request)=>{return this.executeCode(request)};
        break;
      case PyodideMessageType.ExecuteFile:
        action=(request)=>{return this.executeFile(request)};
        break;
      case PyodideMessageType.CreateDirectory:
        action=(request)=>{return this.createDirectory(request)};
        break;
      case PyodideMessageType.ReadDirectory:
        action=(request)=>{return this.readDirectory(request)};
        break;
      case PyodideMessageType.WriteFile:
        action=(request)=>{return this.writeFile(request)};
        break;
      case PyodideMessageType.ReadFile:
        action=(request)=>{return this.readFile(request)};
        break;
      case PyodideMessageType.ScanDirectory:
        action=(request)=>{return this.scanDirectory(request)};
        break;
      case PyodideMessageType.Delete:
        action=(request)=>{return this.delete(request)};
        break;
      case PyodideMessageType.Exists:
        action=(request)=>{return this.exists(request)};
        break;
      default: break;
    }
    if(action){ 
      let response = action(request);
      if (response){ postMessage(response) }
    }
  }

  ready(request:PyodideRequest){
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

  installPackages(request:PyodideRequest){
    let response = this.responseFromRequest(request); 
    let packages = request.message.args;
    console.log("installPackages:\n",packages)//,res)
    let res = this.micropip.install(packages)
    this.syncFS()
    console.log("installPackages: DONE!\n")//,res)
    response.message.contents.push("")//res+": "+res)
    
    return response;
  }

  executeCode(request:PyodideRequest){
    let response = this.responseFromRequest(request); 
    let code = request.message.contents[0];
    console.log("executeCode:\n",code)//,res)
    const result = this.pyodide.runPython(code);
    response.message.contents = [result]
    return response;
  }

  executeFile(request:PyodideRequest){
    let response = this.responseFromRequest(request); 
    let fullpath = request.message.args[0];
    let path = this.mount +"/"+ fullpath
    console.log("executeFile:",path)//,res)
    
    let rawContent = this.fs.readFile(path) as Uint8Array
    let code = new TextDecoder().decode(rawContent.buffer);

    let result = this.pyodide.runPython(code)
    

    console.log("executeFile: result:\n",result)
    response.message.contents = [result]
    return response
  }

  subscribeStdout(request:PyodideRequest){
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

  subscribeStderr(request:PyodideRequest){
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

  sendStdin(request:PyodideRequest){
    let response = this.responseFromRequest(request); 
    let data = request.message.contents[0];
    console.log("sendStdin:\n",data)//,res)
    if (this.stdinResolver){
      this.stdinResolver(this.toString(data))
    }else{
      this.stdinBuffer.push(this.toString(data))
    }
    response.message.args = ['true']
    return response;
  }

  createDirectory(request:PyodideRequest):PyodideResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){ 
      return this.responseError(response,"createDirectory: Requires at least 1 path as argument");
    }
    //TODO: allow for multiple queries;
    let fullpath = request.message.args[0];
    let res = this.fs.mkdir(this.mount + fullpath);
    console.log('pydiode:mkdir:',res)
    this.syncFS()
    response.message.args = [fullpath];
    return response;
  }

  getPath(node:any){
    //any: https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.getPath
    let path = this.fs.getPath(node)
    let pattern =  new RegExp("^"+this.mount); 
    return path.replace(pattern,"/").replace(/\/\/+/,"/");
  }

  readDirectory(request:PyodideRequest):PyodideResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    let curDir = this.scanDirectory_recursive(fullpath)
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir)]
    return response;
  }

  scanDirectory_recursive(fullpath:string, recursive=false):FsNodeFolder{
    let res = this.fs.lookupPath(this.mount + fullpath);
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
        curDir.files.push({
          name: name,
          path: path,
          //content: "" //should I add also the content ?
        })
      }
    }

    return curDir;
  }

  writeFile(request:PyodideRequest):PyodideResponse{
    
    let response = this.responseFromRequest(request);
    let nargs = request.message.args.length;
    let ncont = request.message.contents.length
    if ( nargs < 1 || nargs < ncont ){ 
      return this.responseError(response,"writeFile: Requires at least 1 path as argument and 1 content");
    }
    
    let fullpath = request.message.args[0];
    let data = request.message.contents[0];
    let content;
    if (data instanceof ArrayBuffer){
      content = new DataView(data)
    }else{
      content = data
    }

    console.log("writeFile: ", fullpath)
    let res = this.fs.writeFile(this.mount + fullpath, content, { encoding: "utf8" });
    console.log("writeFile:res: ", res)
    this.syncFS()
    return response;
  }

  readFile(request:PyodideRequest):PyodideResponse{
    let response = this.responseFromRequest(request);
    if ( request.message.args.length < 1){ 
      return this.responseError(response,"readFile: Requires at least 1 path as argument");
    }
    let fullpath = request.message.args[0];
    console.log("readFile: ", fullpath)
    let content = this.fs.readFile(this.mount + fullpath, { encoding: "utf8" });
    response.message.contents.push(content);
    return response;
  }

  scanDirectory(request:PyodideRequest):PyodideResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    console.log("scanDirectory: ", fullpath)
    let curDir = this.scanDirectory_recursive(fullpath, true)
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir,null, 4)]
    return response;
  }

  delete(request:PyodideRequest):PyodideResponse{
    let response = this.responseFromRequest(request); 
    
    if (request.message.args.length < 1){
      response.message.args = ["false"]
      return response;  
    }

    
    let fullpath = request.message.args[0];
    console.log("delete: ", fullpath)
    this.fs.unlink(this.mount + fullpath)
    this.syncFS()
    response.message.args = ["true"]
    return response;
  }

  exists(request:PyodideRequest):PyodideResponse{
    let response = this.responseFromRequest(request); 
    if (request.message.args.length < 1){
      response.message.args = ["false"]
      return response;  
    }
    let fullpath = request.message.args[0];
    console.log("exists: ", this.mount + fullpath)
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.analyzePath
    let res = this.fs.analyzePath(this.mount + fullpath)
    console.log("exists:res:exists ", res["exists"])
    console.log("exists:res ", res)
    response.message.args = [res["exists"]?'true':'false']
    return response;
  }
}
  




main()

