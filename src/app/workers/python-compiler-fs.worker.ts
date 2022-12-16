/// <reference lib="webworker" />
// Configs


let pyodideRoot = "."
let pyodideMount = "/mnt"

// Bootstrap pyodide

importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");

declare var pyodide: any;
declare var loadPyodide: any;
declare var micropip: any;

async function initPyodide(){
  pyodide = await loadPyodide();  
  console.log(self.pyodide.FS);
  pyodide.FS.syncfs(true);
}

let worker:DyodideFsWorker;
initPyodide().then(()=>{
  worker = new DyodideFsWorker(pyodideRoot, pyodideMount);    
});


// Worker definition 

export enum PyodideFsMessageType {
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

class DyodideFsWorker{
  RequestQueueUID = new Map<string,PyodideFsRequest>();
  pyodide: any;
  fs: any;
  loadPyodide: any;
  micropip: any;
  root:string;
  mount:string;

  constructor(root:string, mount:string ){
    this.pyodide = pyodide;
    this.fs = pyodide.FS;
    this.root = root;
    this.mount = mount;
    this.load(root,mount);
  }

  async load(root:string, mount:string)
  {
    this.root = root;
    this.mount = mount;
    this.fs.mount(this.fs.filesystems.IDBFS, { root: root }, mount);

    console.log(this.fs.mounts)
    console.log(this.fs.root)
    console.log(this.fs.root.mount)

    addEventListener("message", async (event:any) => { this.onData(event.data)})
  }

  onData(request:PyodideFsRequest) {
    let action: FsMessageHandler | null;

    switch (request.message.type) {
      case PyodideFsMessageType.CreateDirectory:
        action=this.createDirectory;
        break;
      case PyodideFsMessageType.ReadDirectory:
        action=this.readDirectory;
        break;
      case PyodideFsMessageType.WriteFile:
        action=this.writeFile;
        break;
      case PyodideFsMessageType.ReadFile:
        action=this.readFile;
        break;
      case PyodideFsMessageType.ScanDirectory:
        action=this.scanDirectory;
        break;
      default: action=null;
    }
    if(action){ 
      let response = action(request);
      this.pyodide.message()
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

  

  createDirectory(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){ 
      return this.responseError(response,"createDirectory: Requires at least 1 path as argument");
    }
    //TODO: allow for multiple queries;
    let fullpath = request.message.args[0];
    return this.fs.mkdir(fullpath);
  }

  readDirectory(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request); 
    if ( request.message.args.length < 1 ){
      return this.responseError(response,"readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    response.message.args = this.fs.readdir(fullpath);
    return response;
  }

  writeFile(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request);
    if ( request.message.args.length < 1 || request.message.args.length < request.message.contents.length ){ 
      return this.responseError(response,"writeFile: Requires at least 1 path as argument and 1 content");
    }
    
    let fullpath = request.message.args[0];
    let content = request.message.contents[0];
    this.fs.writeFile(fullpath, content, { encoding: "utf8" });
    this.fs.syncfs(true)
    return response;
  }


  readFile(request:PyodideFsRequest):PyodideFsResponse{
    let response = this.responseFromRequest(request);
    if ( request.message.args.length < 1){ 
      return this.responseError(response,"readFile: Requires at least 1 path as argument");
    }
    let fullpath = request.message.args[0];
    let content = this.fs.readFile(fullpath, { encoding: "utf8" });
    response.message.contents.push(content);
    return response;
  }

  scanDirectory(request:PyodideFsRequest):PyodideFsResponse{
    //TODO: do it recursive
    return this.readDirectory(request);
  }
}
  










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