import { FsNode, FsServiceDriver } from '../fs-service/fs.service';

// --- PyodideFsDriver --- 

type UID = string; // should I ? 

type ResolvePromise<T> = (value: T | PromiseLike<T>) => void;

export enum PyodideFsMessageType {
  Ready = 'Ready',
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory'
}
export interface PyodideFsMessage {
  uid: UID;
  type: PyodideFsMessageType;
  args: string[];
  contents: string[];
}

export interface PyodideFsRequest {
  uid: UID;
  timestamp: number;
  message: PyodideFsMessage;
}

export interface PyodideFsResponse {
  uid: UID;
  timestamp: number;
  success: boolean;
  message: PyodideFsMessage;
  errors: string[];
}

export interface PyodideFsRequestHandler {
  uid: UID;
  request: PyodideFsRequest;
  resolvePromise: ResolvePromise<any>
}




export class PyodideFsDriver implements FsServiceDriver {
  public worker: Worker = new Worker(new URL('../../workers/python-compiler-fs.worker', import.meta.url));
  public rootDir = "root"
  public requestIndex = new Map<UID, PyodideFsRequestHandler>();

  constructor() {
    //alert('driver built!');
    this.worker.onmessage = (event: MessageEvent) => { this.didRecieve(event.data) };

    //alert('done!')

    //this.pythonSrv.worker.onmessage = ({ data }) => {
    //  console.log(`page got message: ${data}`);
    //}


    /*
 
    const messageInstall: PythonCompilerMessageInterface = {
    type: PythonCompilerMessageInterfaceType.PackageInstall,
    packages: ['fake-traffic'],
    }
    this.pythonSrv.worker.postMessage(messageInstall);
 
    const messageToSend: PythonCompilerMessageInterface = {
    type: PythonCompilerMessageInterfaceType.ExecuteCode,
    code: `
    import os
    print(os.listdir('/'))
    print(os.listdir('/mnt'))
    import fox
    import mainC
`
    }
 
    this.pythonSrv.worker.postMessage(messageToSend);
 
    */

  }

  mount(path: string) {
    //TODO
  }

  unmount(path: string) {
    //TODO
  }



  didRecieve(response: PyodideFsResponse) {
    let requestHandler = this.requestIndex.get(response.uid);
    if (requestHandler != null) {
      let msgSent = requestHandler.request.message;
      let msgRecived = response.message;
      let resolvePromise = requestHandler.resolvePromise;

      switch(response.message.type){
        case PyodideFsMessageType.Ready:           this.didRecieveReady(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.CreateDirectory: this.didRecieveCreateDirectory(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.ReadDirectory:   this.didRecieveReadDirectory(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.WriteFile:       this.didRecieveWriteFile(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.ReadFile:        this.didRecieveReadFile(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.ScanDirectory:   this.didRecieveScanDirectory(msgSent, msgRecived, resolvePromise); break;
      }
      this.requestIndex.delete(response.uid)
    }
    alert('onMessage!!! ' + response.constructor.name);
  }
  didRecieveReady(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:ResolvePromise<boolean> ){
    resolvePromise(true)
  }
  didRecieveReadDirectory(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:ResolvePromise<FsNode | null> ){
    //TODO: do the actual thing 
    let node:FsNode = {
      path: msgRecived.args[0],
      isFolder:true,
      name: msgRecived.args[0],
      depth:0,
    };
    resolvePromise( node )
  }
  didRecieveReadFile(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:ResolvePromise<string> ){
    resolvePromise(msgRecived.contents[0])
  }
  didRecieveWriteFile(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:ResolvePromise<number> ){
    //TODO:
    resolvePromise(1)
  }
  didRecieveScanDirectory(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:ResolvePromise<FsNode | null> ){
    //TODO: do the actual thing 
    let node:FsNode = {
      path: msgRecived.args[0],
      isFolder:true,
      name: msgRecived.args[0],
      depth:0,
    };
    resolvePromise( node )
  }

  didRecieveCreateDirectory(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:ResolvePromise<boolean> ){
    
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    resolvePromise(pathSent == pathRecived)
  }

  sendMessage<T>(message: PyodideFsMessage) {
    //alert('sendMessage!');
    let request: PyodideFsRequest = {
      uid: message.uid,
      timestamp: Date.now(),
      message: message
    }

    let promiseResolver: ResolvePromise<T>;
    let resultPromise =  new Promise<T>((resolve, reject) => {
      promiseResolver = resolve;
    })
    
    let requestHandler: PyodideFsRequestHandler = {
      uid: message.uid,
      request: request,
      resolvePromise: (value)=>{ promiseResolver(value) }
    }

    this.requestIndex.set(message.uid, requestHandler);

    return resultPromise;
  }
  
  async createDirectory(fullpath: string): Promise<boolean> {
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.CreateDirectory,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  async readFile(fullpath: string): Promise<string> {
    return "";
  }

  async writeFile(fullpath: string, content: string): Promise<number> {
    return -1;
  }

  async readDirectory(fullpath: string): Promise<FsNode | null> {
    return null;
  }



  async scanDirectory(path?: string, recursive = false, parent?: FsNode): Promise<FsNode> {
    if (!path) { path = './' }
    return { name: path, path: path, isFolder: false, depth: -1 };
  }


  requestUID(): UID {
    var timestap = new Date().getTime();
    let seed = Math.floor(Math.random() * 100000000);
    return 'uid-' + timestap + '-' + seed;
  }

  /*
}
 
 
  sendMessage(type: PyodideFsMessageType, args?:string[], contents?:string[], response?:(data:string)=>void){
    if(!(args)){ args = []; }
    if(!(contents)){ contents = []; }
    
    const uid = this.requestUID();
 
    
    
    const message: PyodideFsMessage = {
      type: type,
      uid: uid,
      args: args,
      contents: contents
    }
    this.worker.postMessage(message);
    let onData = (data:Event)=>{
      if(response){response(data);}
      if(this.worker.removeAllListeners){worker.removeAllListeners(uid)}
    }
    worker.addEventListener(uid, onData);
  }
 
  async createDirectory(fullpath:string): Promise<boolean>{
    return false;
  }
 
  async writeFile(fullpath:string, content:string): Promise<number>{
    return -1;
  }
 
  async readDirectory(fullpath:string):Promise<FsNode|null>{
    return null;
  }
 
  
 
  async scanDirectory(path?:string, recursive=false, parent?:FsNode):Promise<FsNode>{
    if(!path){path='./'}
    return {name:path,path:path,isFolder:false, depth:-1};
  }
 
 
 
  /*
  sendMessages(){
    this.pycs.worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    }
    
    const messageInstall: PythonCompilerMessageInterface = {
      type: PythonCompilerMessageInterfaceType.PackageInstall,
      packages: ['fake-traffic'],
    }
    this.pycs.worker.postMessage(messageInstall);
 
    const messageToSend: PythonCompilerMessageInterface = {
      type: PythonCompilerMessageInterfaceType.ExecuteCode,
      code: `
      import os
      print(os.listdir('/'))
      print(os.listdir('/mnt'))
      import fox
      import mainC
  `
    }
 
    this.pycs.worker.postMessage(messageToSend);
 
  }
 
  async createDirectory(fullpath:string): Promise<boolean>{
    let res = await this.fs.createDirectory(fullpath);
    return await this.fs.exists(fullpath);
  }
 
  async writeFile(fullpath:string, content:string): Promise<number>{
    let res = await this.fs.writeFile(fullpath, content);
    if (!(await this.fs.exists(fullpath)) ) {return -1;}
    return res.data.length;
  }
 
  async readDirectory(fullpath:string):Promise<FsNode|null>{
    if ( await this.fs.exists(fullpath) ) {
      return this.scanDirectory(fullpath, false );
    }
    return null;
  }
  */
}