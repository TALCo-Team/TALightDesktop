/// <reference lib="webworker" />
// Configs



let pyodideRoot = "/"
let pyodideMount = "/mnt"

// Bootstrap pyodide

importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");

declare var loadPyodide: any;

//let worker: PyodideFsWorker;
async function main() {
  
  let worker = new PyodideFsWorker(pyodideRoot, pyodideMount);
}



// Worker definition 

type PromiseResolver<T> = (value: T | PromiseLike<T>) => void;

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

  readDirectory(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    this.fs.readdir(this.mount + fullpath);
    response.message.args = [fullpath];
    return response;
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
    //TODO: do it recursive
    return this.readDirectory(request);
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




  /*}

      await pyodideReadyPromise;
      for (const pkg of data.packages) {
        self.pyodide.runPythonAsync(`
        import micropip
        await micropip.install("${pkg}")
        package_list = micropip.list()
        print(package_list)
        `).then((result: any) => {
          postMessage(result);
        })
        .catch((error: any) => {
          postMessage(error);
        });
      }
    }
    if (data.type === "ExecuteCode") {
      await pyodideReadyPromise;
      const result = await self.pyodide.runPythonAsync(data.code);
      postMessage(result);
    }
  }


async loadPyodideAndPackages() {
  self.pyodide = await loadPyodide();
  await self.pyodide.loadPackage(["micropip"]);
  self.pyodide.FS.mkdir("/mnt");
  console.log(self.pyodide.FS)
  self.pyodide.FS.mount(self.pyodide.FS.filesystems.IDBFS, { root: "." }, "/mnt");
  // self.pyodide.FS.writeFile("/mnt/fox.py", `print("HELLOWORLDFOX")`, { encoding: "utf8" });
  self.pyodide.FS.syncfs(true)
  // self.pyodide.FS.filesystems.IDBFS.getDB("indexeddb", (err: any, db: any) => {
  //   
  //   console.log(self.pyodide.FS)
  //   console.log(self.pyodide.FS.mounts)
  //   console.log(self.pyodide.FS.root)
  //   console.log(self.pyodide.FS.root.mount)
  //   self.pyodide.FS.writeFile("fox.py", `print("HELLOWORLDFOX")`, { encoding: "utf8" });
  //   self.pyodide.FS.writeFile("/mnt/fox.py", `print("HELLOWORLDFOX")`, { encoding: "utf8" });
  //   console.log(self.pyodide.FS.readdir("/mnt"));
  //   console.log(self.pyodide.FS.readdir("/home/pyodide"));
  // });


  // console.log(self.pyodide.FS.filesystems.IDBFS.dbs)
  // await self.pyodide.loadPackage(["numpy", "pytz"]);
}




// addEventListener('message', async ({ data }) => {
//   data
//   // pyodide.loadPackage(['pandas', 'numpy']).then(() => {
//   //   // console.log(pyodide);

//   //   let print_code = `
//   //     print("HELLOWORLD")

//   //     `
//   //   pyodide.runPython(print_code)
//   //   postMessage("HELLOWORLD");


//   // });

// }
// );

*/