import { FsNodeFolder, FsServiceDriver } from '../fs-service/fs.service';
import { PyodideState, PythonCompiler as PythonCompiler } from './python-compiler.service';

// --- PyodideDriver --- 

type UID = string; // should I ? 

type PromiseResolver<T> = (value: T | PromiseLike<T>) => void;

type stdCallback = (data:string)=>void;
type stateCallback = (state:PyodideState, content?:string)=>void;
type notifyCallback = (title:string, msg:string, kind:string)=>void;


export enum PyodideMessageType {
  Ready = 'Ready', // Deprecated -> SubscribeState
  Mount = 'Mount', //TODO
  Unmount = 'Unmount', //TODO
  InstallPackages = 'InstallPackages',
  ExecuteFile = 'ExecuteFile',
  ExecuteCode = 'ExecuteCode',
  StopExecution = 'StopExecution',
  SubscribeNotify = 'SubscribeNotify',
  SubscribeState  = 'SubscribeState',
  SubscribeStdout = 'SubscribeStdout',
  SubscribeStderr = 'SubscribeStderr',
  SendStdin = 'SendStdin',
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory',
  Delete = 'Delete',
  Exists = 'Exists',
}
export interface PyodideMessage {
  uid: UID;
  type: PyodideMessageType;
  args: string[];
  contents: Array<string|ArrayBuffer>;
}

export interface PyodideRequest {
  uid: UID;
  timestamp: number;
  message: PyodideMessage;
}

export interface PyodideResponse {
  uid: UID;
  timestamp: number;
  success: boolean;
  message: PyodideMessage;
  errors: string[];
}

export interface PyodideRequestHandler {
  uid: UID;
  request: PyodideRequest;
  resolvePromise: PromiseResolver<any>
}


export class PyodideDriver implements FsServiceDriver, PythonCompiler {
  public worker: Worker;
  public mountDir = "/mnt"
  public homeDir = "/"
  public rootDir = "."
  public requestIndex = new Map<UID, PyodideRequestHandler>();

  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  onStdout?: stdCallback
  onStderr?: stdCallback
  onState?: stateCallback
  onNotify?: notifyCallback

  constructor() {
    //alert('driver built!');
    this.worker = new Worker(new URL('../../workers/python-compiler.worker', import.meta.url));
    this.worker.onmessage = (event: MessageEvent) => { this.didRecieve(event.data) };   
    
  }



  private didRecieve(response: PyodideResponse) {
    if (!response) {return;}
    console.log('PyodideFsDriver:didRecieve:', response.message.type, response);

    let requestHandler = this.requestIndex.get(response.uid);
    if (requestHandler != null) {
      let removeRequest = true;
      let msgSent = requestHandler.request.message;
      let msgRecived = response.message;
      let resolvePromise = requestHandler.resolvePromise;

      switch(response.message.type){
        case PyodideMessageType.Ready:           this.didReceiveReady(msgSent, msgRecived, resolvePromise); break;
        
        case PyodideMessageType.InstallPackages: this.didReceiveInstallPackages(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.ExecuteCode:     this.didReceiveExecuteCode(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.ExecuteFile:     this.didReceiveExecuteFile(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.StopExecution:     this.didReceiveStopExecution(msgSent, msgRecived, resolvePromise); break;

        case PyodideMessageType.SubscribeNotify: this.didReceiveSubscribeNotify(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case PyodideMessageType.SubscribeState:  this.didReceiveSubscribeState(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case PyodideMessageType.SubscribeStdout: this.didReceiveSubscribeStdout(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case PyodideMessageType.SubscribeStderr: this.didReceiveSubscribeStderr(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case PyodideMessageType.SendStdin:       this.didReceiveSendStdin(msgSent, msgRecived, resolvePromise); break;

        case PyodideMessageType.CreateDirectory: this.didReceiveCreateDirectory(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.ReadDirectory:   this.didReceiveReadDirectory(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.ScanDirectory:   this.didReceiveScanDirectory(msgSent, msgRecived, resolvePromise); break;

        case PyodideMessageType.WriteFile:       this.didReceiveWriteFile(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.ReadFile:        this.didReceiveReadFile(msgSent, msgRecived, resolvePromise); break;
        
        case PyodideMessageType.Delete:          this.didReceiveDelete(msgSent, msgRecived, resolvePromise); break;
        case PyodideMessageType.Exists:          this.didReceiveExists(msgSent, msgRecived, resolvePromise); break;
      }
      
      if (removeRequest){
        this.requestIndex.delete(response.uid)
      }
    }
  }

  private didReceiveReady(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveReady: ")
    let ready = msgRecived.args[0]
    resolvePromise(ready == 'true'?true:false)
  }

  private didReceiveInstallPackages(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveInstallPackages: ")
    if (msgSent.contents.length != 1){ 
      resolvePromise(""); 
    }
    console.log(msgRecived.contents)

    resolvePromise(this.toString(msgRecived.contents[0]))
  } 

  private didReceiveExecuteCode(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveExecuteCode: ")
    if (msgSent.contents.length != 1){ 
      resolvePromise(""); 
    }
    console.log(msgRecived.contents)

    resolvePromise(this.toString(msgRecived.contents[0]))
  } 

  private didReceiveExecuteFile(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveExecuteFile: ")
    if (msgSent.contents.length != 1){ 
      resolvePromise(""); 
    }
    console.log(msgRecived.contents)

    resolvePromise(this.toString(msgRecived.contents[0]))
  } 

  private didReceiveStopExecution(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveStopExecution: ",msgRecived.args )
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }

    resolvePromise(true)
  } 

  private didReceiveSubscribeNotify(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeNotify: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onNotify && msgRecived.contents.length > 1){
      console.log(msgRecived.contents)
      let [title, msg, kind] = msgRecived.contents
      this.onNotify(this.toString(title), this.toString(msg), this.toString(kind))
    }
  } 

  private didReceiveSubscribeState(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeState: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onState && msgRecived.contents.length > 0){
      console.log(msgRecived.contents)
      let state = msgRecived.contents[0] as PyodideState
      let content;
      if(msgRecived.contents.length>1){
        content = this.toString(msgRecived.contents[1])
      }
      this.onState(state,content)
    }
  } 

  private didReceiveSubscribeStdout(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeStdout: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onStdout && msgRecived.contents.length > 0){
      console.log(msgRecived.contents)
      let content = msgRecived.contents[0]
      this.onStdout(this.toString(content))
    }
  } 

  private didReceiveSubscribeStderr(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeStderr: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onStderr && msgRecived.contents.length > 0){
      console.log(msgRecived.contents)
      let content = msgRecived.contents[0]
      this.onStderr(this.toString(content))
    }
  } 

  private didReceiveSendStdin(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSendStdin: ")
    if (msgRecived.args.length > 0){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }

    resolvePromise(false)
  } 

  private didReceiveCreateDirectory(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveCreateDirectory: ")
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    resolvePromise(pathSent == pathRecived)
  } 

  private didReceiveReadDirectory(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<FsNodeFolder | null> ){
    //TODO: do the actual thing 
    let replacer = (key:any, value:any) => {
      if (value instanceof ArrayBuffer){
        let buffer = new Uint8Array(value)
        return Array.from(buffer)
      }
      return value
    }
    let node = JSON.parse(this.toString(msgRecived.contents[0]),this.internal_jsonReplacer)
    console.log("didReceiveReadDirectory: ", node)
    resolvePromise( node )
  }

  private didReceiveScanDirectory(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<FsNodeFolder | null> ){
    //TODO: do the actual thing 
    let node = JSON.parse(this.toString(msgRecived.contents[0]),this.internal_jsonReplacer)
    console.log("didReceiveScanDirectory: ", node)
    resolvePromise( node )
  }

  private internal_jsonReplacer(key:any,value:any){
    if ( typeof value !== 'object') {return value; }
    //console.log('jsonReplacer:object:',key,value)
    if (!("flags" in value && "constructor" in value && "data" in value )){ return value; }
    //console.log('jsonReplacer:constructor',value.constructor)
    if ( value.constructor == 'ArrayBuffer' && value.data instanceof Array){
      //console.log('jsonReplacer:ArrayBuffer')
      let buffer = Uint8Array.from(value.data).buffer
      console.log('jsonReplacer:ArrayBuffer',buffer)
      return buffer;
    }
    return value
  }
  
  private didReceiveReadFile(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<string|ArrayBuffer> ){
    console.log("didReceiveReadFile:\n", msgRecived.contents.length)
    resolvePromise( msgRecived.contents[0] )
  }
  
  private didReceiveWriteFile(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<number> ){
    console.log("didReceiveWriteFile: ")
    console.log(msgRecived.args.length)
    console.log(msgRecived.contents.length)
    //TODO:
    resolvePromise(msgRecived.contents.length)
  }
  

  private didReceiveDelete(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveDelete: ")
    resolvePromise(true)
  }

  private didReceiveExists(msgSent:PyodideMessage, msgRecived:PyodideMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveExists: ")
    let res = msgRecived.args[0]
    resolvePromise(res  == 'true' )
  }

  // SEND: INTERNAL

  private sendMessage<T>(message: PyodideMessage) {
    console.log("PyodideDriver:sendMessage:"+message.type)
    let request: PyodideRequest = {
      uid: message.uid,
      timestamp: Date.now(),
      message: message
    }

    let promiseResolver: PromiseResolver<T>;
    let resultPromise =  new Promise<T>((resolve, reject) => {
      promiseResolver = resolve;
    })
    
    let requestHandler: PyodideRequestHandler = {
      uid: message.uid,
      request: request,
      resolvePromise: (value)=>{ promiseResolver(value) }
    }

    this.requestIndex.set(message.uid, requestHandler);
    this.worker.postMessage(request);

    return resultPromise;
  }

  //SEND: PUBLIC

  public mount(path: string): Promise<boolean> {
    //TODO
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.Mount,
      args: [path],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public unmount(path: string): Promise<boolean> {
    //TODO
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.Unmount,
      args: [path],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public async ready(): Promise<boolean> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.Ready,
      args: [],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public async installPackages(packages: string[]): Promise<string> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.InstallPackages,
      args: packages,
      contents: [],
    }
    
    let resultPromise = this.sendMessage<string>(message);

    return resultPromise;
  }

  public async executeCode(code: string): Promise<string> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.ExecuteCode,
      args: [],
      contents: [code],
    }
    
    let resultPromise = this.sendMessage<string>(message);

    return resultPromise;
  }

  public async executeFile(fullpath: string): Promise<string> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.ExecuteFile,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<string>(message);

    return resultPromise;
  }

  public async stopExecution(signal: number=2): Promise<boolean> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.StopExecution,
      args: [signal.toString()],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    //TODO: stop pyodide gracefully -> stopExecution ( keyboard interrupt ) seams ineffetive
    let res = confirm("**WORK IN PROGRESS**\nPurtroppo qualcosa è andato storto con le API e pyodide è rimasto appeso.\nPer il momento mi tocca fare il reload della pagina.")
    if(res){ window.location.reload() }

    return resultPromise;
  }

  public subscribeNotify(enable=true, onNotify?:notifyCallback){
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.SubscribeNotify,
      args: [enable?'true':'false'],
      contents: [],
    }
    if (onNotify && enable){
      this.onNotify = (title: string, msg:string, kind:string="")=>{onNotify(title,msg,kind)}
    }else{
      this.onNotify = undefined;
    }

    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public subscribeState(enable=true, onState?:stateCallback){
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.SubscribeState,
      args: [enable?'true':'false'],
      contents: [],
    }
    if (onState && enable){
      this.onState = (state: PyodideState, content?:any)=>{onState(state,content)}
    }else{
      this.onState = undefined;
    }

    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public subscribeStdout(enable=true, onStdout?:stdCallback){
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.SubscribeStdout,
      args: [enable?'true':'false'],
      contents: [],
    }
    if (onStdout && enable){
      this.onStdout = (msg:string)=>{onStdout(msg)}
    }else{
      this.onStdout = undefined;
    }

    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public subscribeStderr(enable=true, onStderr?:stdCallback){
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.SubscribeStderr,
      args: [enable?'true':'false'],
      contents: [],
    }
    if (onStderr && enable){
      this.onStderr = (msg:string)=>{onStderr(msg)}
    }else{
      this.onStderr = undefined;
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public sendStdin(msg:string): Promise<boolean> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.SendStdin,
      args: [],
      contents: [msg],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  public async createDirectory(fullpath: string): Promise<boolean> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.CreateDirectory,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public async readFile(fullpath: string, binary: boolean=true): Promise<string|ArrayBuffer> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.ReadFile,
      args: [fullpath],
      contents: [],
    }
    if(binary){message.args.push('binary');}
    let resultPromise = this.sendMessage<string|ArrayBuffer>(message);
    return resultPromise;
  }

  public async writeFile(fullpath: string, content: string|ArrayBuffer): Promise<number> {
    console.log("writeFile: "+fullpath)
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.WriteFile,
      args: [fullpath],
      contents: [],
    }
    message.contents.push(content)
    
    let resultPromise = this.sendMessage<number>(message);
    return resultPromise;
  }

  public async readDirectory(fullpath: string): Promise<FsNodeFolder | null> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.ReadDirectory,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<FsNodeFolder | null>(message);
    return resultPromise;
  }



  public async scanDirectory(fullpath?: string, recursive = false, parent?: FsNodeFolder): Promise<FsNodeFolder | null> {
    if (!fullpath) { fullpath = './' }
    
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.ScanDirectory,
      args: [fullpath, recursive?'recursive':'flat'],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<FsNodeFolder | null>(message);
    return resultPromise;
  }


  public async delete(fullpath: string): Promise<boolean> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.Delete,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  public async exists(fullpath: string): Promise<boolean> {
    let message: PyodideMessage = {
      uid: this.requestUID(),
      type: PyodideMessageType.Exists,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  private toString(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return this.binDecoder.decode(data) }
    return data
  }

  private toArrayBuffer(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return data }
    return this.binEncoder.encode(data)
  }
  


  private requestUID(): UID {
    var timestap = new Date().getTime();
    let seed = Math.floor(Math.random() * 100000000);
    return 'uid-' + timestap + '-' + seed;
  }
}
  