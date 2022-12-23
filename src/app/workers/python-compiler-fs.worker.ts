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
  
  let worker = new PyodideFsWorker(pyodideRoot, pyodideMount);
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


export enum PyodideFsMessageType {
  Ready = 'Ready',
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory',
  Exists = 'Exists',
  Delete = 'Delete', 
}

export interface PyodideFsMessage {
  uid: string;
  type: PyodideFsMessageType;
  args: string[];
  contents: string[];
}

export interface PyodideFsRequest {
  uid: string;
  timestamp: number;
  message: PyodideFsMessage;
}

export interface PyodideFsResponse {
  uid: string;
  timestamp: number;
  success: boolean;
  message: PyodideFsMessage;
  errors: string[];
}

export type FsMessageHandler = (message:PyodideFsRequest)=>PyodideFsResponse;

class PyodideFsWorker{
  RequestQueueUID = new Map<string,PyodideFsRequest>();
  pyodide: any;
  fs: any;
  loadPyodide: any;
  micropip: any;
  root:string;
  mount:string;
  isReady = false;
  readyPromise: Promise<boolean>;
  readyResolver: PromiseResolver<boolean>;

  constructor(root:string, mount:string ){
    this.root = root;
    this.mount = mount;
    
    let promiseResolver: PromiseResolver<boolean>;
    this.readyPromise =  new Promise<boolean>((resolve, reject) => {
      promiseResolver = resolve;
    })

    this.readyResolver = (value)=>{ promiseResolver(value) }

    addEventListener("message", ( payload:any ) => { this.onData(payload.data) })

    this.initPydiode().then(()=>{
      this.load(this.root, this.mount);
      this.isReady = true;
      this.readyResolver(this.isReady);
    })
  }

  async initPydiode(){
    //console.log(loadPyodide)
    console.log("loadPyodide: ...")
    this.pyodide = await loadPyodide();
    this.fs = this.pyodide.FS;
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
    this.fs.syncfs;
    console.log("PyodideFsWorker: load: done")

    
    console.log(this.fs.mounts)
    console.log(this.fs.root)
    console.log(this.fs.root.mount)
    
  }

  onData(request:PyodideFsRequest) {
    console.log('PyodideFsWorker:onData:',request);
    let action: FsMessageHandler | null = null;

    switch (request.message.type) {
      case PyodideFsMessageType.Ready:
        this.ready(request);
        break;
      case PyodideFsMessageType.CreateDirectory:
        action=(request)=>{return this.createDirectory(request)};
        break;
      case PyodideFsMessageType.ReadDirectory:
        action=(request)=>{return this.readDirectory(request)};
        break;
      case PyodideFsMessageType.WriteFile:
        action=(request)=>{return this.writeFile(request)};
        break;
      case PyodideFsMessageType.ReadFile:
        action=(request)=>{return this.readFile(request)};
        break;
      case PyodideFsMessageType.ScanDirectory:
        action=(request)=>{return this.scanDirectory(request)};
        break;
      case PyodideFsMessageType.Delete:
        action=(request)=>{return this.delete(request)};
        break;
      case PyodideFsMessageType.Exists:
        action=(request)=>{return this.exists(request)};
        break;
      default: break;
    }
    if(action){ 
      let response = action(request);
      postMessage(response);
    }
  }
  
  responseFromRequest(request:PyodideFsRequest, success:boolean=true, errors:string[]=[]):PyodideFsResponse{
    let response:PyodideFsResponse = {
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

  responseError(response:PyodideFsResponse, error?:string):PyodideFsResponse{
    response.success = false;
    if (error){response.errors.push(error)};
    return response;
  }

  ready(request:PyodideFsRequest){
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
  

  createDirectory(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){ 
      return this.responseError(response,"createDirectory: Requires at least 1 path as argument");
    }
    //TODO: allow for multiple queries;
    let fullpath = request.message.args[0];
    let res = this.fs.mkdir(this.mount + fullpath);
    console.log('pydiode:mkdir:',res)
    response.message.args = [fullpath];
    return response;
  }

  getPath(node:any){
    //any: https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.getPath
    let path = this.fs.getPath(node)
    let pattern =  new RegExp("^"+this.mount); 
    return path.replace(pattern,"/");
  }

  readDirectory(request:PyodideFsRequest):PyodideFsResponse{
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
      path: this.fs.getPath(res.node)
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

  writeFile(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request);
    if ( request.message.args.length < 1 || request.message.args.length < request.message.contents.length ){ 
      return this.responseError(response,"writeFile: Requires at least 1 path as argument and 1 content");
    }
    
    let fullpath = request.message.args[0];
    let content = request.message.contents[0];
    this.fs.writeFile(this.mount + fullpath, content, { encoding: "utf8" });
    //this.fs.syncfs(true)
    return response;
  }

  readFile(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request);
    if ( request.message.args.length < 1){ 
      return this.responseError(response,"readFile: Requires at least 1 path as argument");
    }
    let fullpath = request.message.args[0];
    let content = this.fs.readFile(this.mount + fullpath, { encoding: "utf8" });
    response.message.contents.push(content);
    return response;
  }

  scanDirectory(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    let curDir = this.scanDirectory_recursive(fullpath, true)
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir)]
    return response;
  }

  delete(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    return response;
  }

  exists(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    return response;
  }
}
  




main()

