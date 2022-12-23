import { FsNodeFolder, FsServiceDriver } from '../fs-service/fs.service';

// --- PyodideFsDriver --- 

type UID = string; // should I ? 

type PromiseResolver<T> = (value: T | PromiseLike<T>) => void;



export enum PyodideFsMessageType {
  Ready = 'Ready',
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory',
  Delete = 'Delete',
  Exists = 'Exists',
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
  resolvePromise: PromiseResolver<any>
}


export class PyodideFsDriver implements FsServiceDriver {
  public worker: Worker = new Worker(new URL('../../workers/python-compiler-fs.worker', import.meta.url));
  public rootDir = "."
  public requestIndex = new Map<UID, PyodideFsRequestHandler>();

  constructor() {
    //alert('driver built!');
    this.worker.onmessage = (event: MessageEvent) => { this.didRecieve(event.data) };   
  }

  mount(path: string) {
    //TODO
  }

  unmount(path: string) {
    //TODO
  }



  didRecieve(response: PyodideFsResponse) {
    console.log('PyodideFsDriver:didRecieve:', response.constructor.name);

    let requestHandler = this.requestIndex.get(response.uid);
    if (requestHandler != null) {
      let msgSent = requestHandler.request.message;
      let msgRecived = response.message;
      let resolvePromise = requestHandler.resolvePromise;

      switch(response.message.type){
        case PyodideFsMessageType.Ready:           this.didReceiveReady(msgSent, msgRecived, resolvePromise); break;
        
        case PyodideFsMessageType.CreateDirectory: this.didReceiveCreateDirectory(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.ReadDirectory:   this.didReceiveReadDirectory(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.ScanDirectory:   this.didReceiveScanDirectory(msgSent, msgRecived, resolvePromise); break;

        case PyodideFsMessageType.WriteFile:       this.didReceiveWriteFile(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.ReadFile:        this.didReceiveReadFile(msgSent, msgRecived, resolvePromise); break;
        
        case PyodideFsMessageType.Delete:          this.didReceiveDelete(msgSent, msgRecived, resolvePromise); break;
        case PyodideFsMessageType.Exists:          this.didReceiveExists(msgSent, msgRecived, resolvePromise); break;
      }
      this.requestIndex.delete(response.uid)
    }
  }

  didReceiveReady(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveReady: ")
    let ready = msgRecived.args[0]
    ///alert(111)
    resolvePromise(ready == 'true'?true:false)
  }

  didReceiveCreateDirectory(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveCreateDirectory: ")
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    resolvePromise(pathSent == pathRecived)
  } 

  didReceiveReadDirectory(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<FsNodeFolder | null> ){
    //TODO: do the actual thing 
    let node = JSON.parse(msgRecived.contents[0])
    console.log("didReceiveReadDirectory: ", node)
    resolvePromise( node )
  }

  didReceiveScanDirectory(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<FsNodeFolder | null> ){
    //TODO: do the actual thing 
    let node = JSON.parse(msgRecived.contents[0])
    console.log("didReceiveScanDirectory: ", node)
    resolvePromise( node )
  }

  didReceiveReadFile(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveReadFile: ")
    resolvePromise(msgRecived.contents[0])
  }
  
  didReceiveWriteFile(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<number> ){
    console.log("didReceiveWriteFile: ")
    //TODO:
    resolvePromise(1)
  }
  

  didReceiveDelete(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveDelete: ")
    resolvePromise(true)
  }

  didReceiveExists(msgSent:PyodideFsMessage, msgRecived:PyodideFsMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveExists: ")
    resolvePromise(true)
  }

  sendMessage<T>(message: PyodideFsMessage) {
    //alert('sendMessage:'+message.type);
    let request: PyodideFsRequest = {
      uid: message.uid,
      timestamp: Date.now(),
      message: message
    }

    let promiseResolver: PromiseResolver<T>;
    let resultPromise =  new Promise<T>((resolve, reject) => {
      promiseResolver = resolve;
    })
    
    let requestHandler: PyodideFsRequestHandler = {
      uid: message.uid,
      request: request,
      resolvePromise: (value)=>{ promiseResolver(value) }
    }

    this.requestIndex.set(message.uid, requestHandler);
    this.worker.postMessage(request);

    return resultPromise;
  }

  async ready(): Promise<boolean> {
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.Ready,
      args: [],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

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
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.ReadFile,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<string>(message);
    return resultPromise;
  }

  async writeFile(fullpath: string, content: string): Promise<number> {
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.WriteFile,
      args: [fullpath],
      contents: [content],
    }
    
    let resultPromise = this.sendMessage<number>(message);
    return resultPromise;
  }

  async readDirectory(fullpath: string): Promise<FsNodeFolder | null> {
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.ReadDirectory,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<FsNodeFolder | null>(message);
    return resultPromise;
  }



  async scanDirectory(fullpath?: string, recursive = false, parent?: FsNodeFolder): Promise<FsNodeFolder | null> {
    if (!fullpath) { fullpath = './' }
    
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.ScanDirectory,
      args: [fullpath, recursive?'recursive':'flat'],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<FsNodeFolder | null>(message);
    return resultPromise;
  }


  async delete(fullpath: string): Promise<boolean> {
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.Delete,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  async exists(fullpath: string): Promise<boolean> {
    let message: PyodideFsMessage = {
      uid: this.requestUID(),
      type: PyodideFsMessageType.Exists,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  


  requestUID(): UID {
    var timestap = new Date().getTime();
    let seed = Math.floor(Math.random() * 100000000);
    return 'uid-' + timestap + '-' + seed;
  }
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
