import { CompilerMessage, CompilerMessageType, CompilerRequest, CompilerRequestHandler, CompilerResponse, CompilerState, notifyCallback, PromiseResolver, stateCallback, stdCallback, UID } from './compiler-service.types';
import { FsNodeEmptyFolder, FsNodeFileList, FsNodeFolder, FsNodeList } from '../fs-service/fs.service.types';
import { ProjectDriver } from '../project-manager-service/project-manager.types';
import { ProjectsManagerService } from '../project-manager-service/projects-manager.service';
import { EventEmitter } from '@angular/core';

export class CompilerDriver implements ProjectDriver {
  public driverName: string;
  public fsRoot:FsNodeFolder = FsNodeEmptyFolder;
  public fsList:FsNodeList=[];
  public fsListfiles:FsNodeFileList=[];

  //Prefix for the mount point
  // Example with Project ID 0: /TALight_Projects_0
  public mountPoint = "/TALight_" + ProjectsManagerService.projectsFolder + "_";
  public onMountChanged = new EventEmitter<any>();

  public requestIndex = new Map<UID, CompilerRequestHandler>();

  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  onStdout?: stdCallback
  onStderr?: stdCallback
  onState?: stateCallback
  onNotify?: notifyCallback

  constructor(public worker: Worker) {
    console.log("CompilerDriver:constructor:setMount: ", this.mountPoint);

    this.driverName = "CompilerDriver";
    
    this.worker.onmessage = (event: MessageEvent) => { this.didRecieve(event.data) };   
    this.worker.addEventListener('error', (event) => { console.log('CompilerDriver: Worker error!')});
  }

  private didRecieve(response: CompilerResponse) {
    if (!response) {return;}
    console.log('CompilerDriver:didRecieve:', response.message.type, response);

    let requestHandler = this.requestIndex.get(response.uid);
    if (requestHandler != null) {
      let removeRequest = true;
      let msgSent = requestHandler.request.message;
      let msgRecived = response.message;
      let resolvePromise = requestHandler.resolvePromise;

      switch(response.message.type){
        case CompilerMessageType.Ready:           this.didReceiveReady(msgSent, msgRecived, resolvePromise); break;
        
        case CompilerMessageType.InstallPackages: this.didReceiveInstallPackages(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.ExecuteCode:     this.didReceiveExecuteCode(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.ExecuteFile:     this.didReceiveExecuteFile(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.StopExecution:   this.didReceiveStopExecution(msgSent, msgRecived, resolvePromise); break;

        case CompilerMessageType.SubscribeNotify: this.didReceiveSubscribeNotify(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case CompilerMessageType.SubscribeState:  this.didReceiveSubscribeState(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case CompilerMessageType.SubscribeStdout: this.didReceiveSubscribeStdout(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case CompilerMessageType.SubscribeStderr: this.didReceiveSubscribeStderr(msgSent, msgRecived, resolvePromise); removeRequest = false; break;
        case CompilerMessageType.SendStdin:       this.didReceiveSendStdin(msgSent, msgRecived, resolvePromise); break;


        case CompilerMessageType.Mount:           this.didReceiveMount(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.Unmount:         this.didReceiveUnmount(msgSent, msgRecived, resolvePromise); break;

        case CompilerMessageType.CreateDirectory: this.didReceiveCreateDirectory(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.ReadDirectory:   this.didReceiveReadDirectory(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.ScanDirectory:   this.didReceiveScanDirectory(msgSent, msgRecived, resolvePromise); break;

        case CompilerMessageType.WriteFile:       this.didReceiveWriteFile(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.ReadFile:        this.didReceiveReadFile(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.RenameItem:      this.didReceiveRenameItem(msgSent, msgRecived, resolvePromise); break;
        
        case CompilerMessageType.Delete:          this.didReceiveDelete(msgSent, msgRecived, resolvePromise); break;
        case CompilerMessageType.Exists:          this.didReceiveExists(msgSent, msgRecived, resolvePromise); break;
      }
      
      if (removeRequest){
        this.requestIndex.delete(response.uid)
      }
    }
  }

  private didReceiveReady(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveReady: ")
    let ready = msgRecived.args[0]
    resolvePromise(ready == 'true'?true:false)
  }

  private didReceiveInstallPackages(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveInstallPackages: ")
    if (msgSent.contents.length != 1){ 
      resolvePromise(""); 
    }
    console.log(msgRecived.contents)

    resolvePromise(this.dataToString(msgRecived.contents[0]))
  } 

  private didReceiveExecuteCode(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveExecuteCode: ")
    if (msgSent.contents.length != 1){ 
      resolvePromise(""); 
    }
    console.log(msgRecived.contents)

    resolvePromise(this.dataToString(msgRecived.contents[0]))
  } 

  private didReceiveExecuteFile(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<string> ){
    console.log("didReceiveExecuteFile: ")
    if (msgSent.contents.length != 1){ 
      resolvePromise(""); 
    }
    console.log(msgRecived.contents)

    resolvePromise(this.dataToString(msgRecived.contents[0]))
  } 

  private didReceiveStopExecution(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveStopExecution: ",msgRecived.args )
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }

    resolvePromise(true)
  } 

  private didReceiveSubscribeNotify(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeNotify: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onNotify && msgRecived.contents.length > 1){
      console.log(msgRecived.contents)
      let [title, msg, kind] = msgRecived.contents
      this.onNotify(this.dataToString(title), this.dataToString(msg), this.dataToString(kind))
    }
  } 

  private didReceiveSubscribeState(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeState: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    console.log("didReceiveSubscribeState: ",msgRecived.contents)
    if ( this.onState && msgRecived.contents.length > 0){
      console.log("didReceiveSubscribeState: ",msgRecived.contents)
      let state = msgRecived.contents[0] as CompilerState
      let content;
      if(msgRecived.contents.length>1){
        content = this.dataToString(msgRecived.contents[1])
      }
      this.onState(state,content)
    }
  } 

  private didReceiveSubscribeStdout(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeStdout: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onStdout && msgRecived.contents.length > 0){
      console.log(msgRecived.contents)
      let content = msgRecived.contents[0]
      this.onStdout(this.dataToString(content))
    }
  } 

  private didReceiveSubscribeStderr(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSubscribeStderr: ")
    if (msgRecived.args.length == 1){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }
    if ( this.onStderr && msgRecived.contents.length > 0){
      console.log(msgRecived.contents)
      let content = msgRecived.contents[0]
      this.onStderr(this.dataToString(content))
    }
  } 

  private didReceiveSendStdin(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveSendStdin: ")
    if (msgRecived.args.length > 0){ 
      let result = msgRecived.args[0] == 'true'
      resolvePromise(result); 
    }

    resolvePromise(false)
  } 

  private didReceiveMount(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("compiler-serivce-driver:didReceiveMount: ")
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    console.log("compiler-serivce-driver:didReceiveMount: ", pathSent, pathRecived)

    resolvePromise(pathSent == pathRecived)
  } 


  private didReceiveUnmount(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveUnmount: ")
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    resolvePromise(pathSent == pathRecived)
  } 


  private didReceiveCreateDirectory(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveCreateDirectory: ")
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    resolvePromise(pathSent == pathRecived)
  } 

  private didReceiveReadDirectory(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<FsNodeFolder | null> ){
    //TODO: do the actual thing 
    let replacer = (key:any, value:any) => {
      if (value instanceof ArrayBuffer){
        let buffer = new Uint8Array(value)
        return Array.from(buffer)
      }
      return value
    }
    let node = JSON.parse(this.dataToString(msgRecived.contents[0]),this.internal_jsonReplacer)
    console.log("didReceiveReadDirectory: ", node)
    resolvePromise( node )
  }

  private didReceiveScanDirectory(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<FsNodeFolder | null> ){
    //TODO: do the actual thing 
    let node = JSON.parse(this.dataToString(msgRecived.contents[0]),this.internal_jsonReplacer)
    console.log("didReceiveScanDirectory: ", node)
    resolvePromise( node )
  }

  private didReceiveRenameItem(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<Boolean> ){
    //TODO: do the actual thing 
    //let node = JSON.parse(this.dataToString(msgRecived.contents[0]),this.internal_jsonReplacer)
    //console.log("didReceiveRenameItem: ", node)
    
    if (msgSent.args.length != 1){ 
      resolvePromise(false); 
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];

    resolvePromise(pathSent == pathRecived)
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
  
  private didReceiveReadFile(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<string|ArrayBuffer> ){
    console.log("didReceiveReadFile:\n", msgRecived.contents.length)
    resolvePromise( msgRecived.contents[0] )
  }
  
  private didReceiveWriteFile(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<number> ){
    console.log("didReceiveWriteFile: ")
    console.log(msgRecived.args.length)
    console.log(msgRecived.contents.length)
    //TODO:
    resolvePromise(msgRecived.contents.length)
  }
  

  private didReceiveDelete(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveDelete: ")
    resolvePromise(true)
  }

  private didReceiveExists(msgSent:CompilerMessage, msgRecived:CompilerMessage, resolvePromise:PromiseResolver<boolean> ){
    console.log("didReceiveExists: ")
    let res = msgRecived.args[0]
    resolvePromise(res  == 'true' )
  }

  // SEND: INTERNAL

  private sendMessage<T>(message: CompilerMessage) {
    console.log("CompilerDriver:sendMessage:"+message.type)
    let request: CompilerRequest = {
      uid: message.uid,
      timestamp: Date.now(),
      message: message
    }

    let promiseResolver: PromiseResolver<T>;
    let resultPromise =  new Promise<T>((resolve, reject) => {
      promiseResolver = resolve;
    })
    
    let requestHandler: CompilerRequestHandler = {
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
    console.log("compiler-serive-driver:mount: "+path)
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.Mount,
      args: [path],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    this.onMountChanged.emit();

    return resultPromise;
  }

  public mountByProjectId(projectId: number): Promise<boolean> {
    return this.mount(this.mountPoint + projectId);
  }

  public unmount(path: string): Promise<boolean> {
    console.log("compiler-serive-driver:unmount: "+path)
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.Unmount,
      args: [path],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public async ready(): Promise<boolean> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.Ready,
      args: [],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public async installPackages(packages: string[]): Promise<string> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.InstallPackages,
      args: packages,
      contents: [],
    }
    
    let resultPromise = this.sendMessage<string>(message);

    return resultPromise;
  }

  public async executeCode(code: string): Promise<string> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.ExecuteCode,
      args: [],
      contents: [code],
    }
    
    let resultPromise = this.sendMessage<string>(message);

    return resultPromise;
  }

  public async executeFile(fullpath: string): Promise<string> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.ExecuteFile,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<string>(message);

    return resultPromise;
  }

  public async stopExecution(signal: number=2): Promise<boolean> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.StopExecution,
      args: [signal.toString()],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);
    
    return resultPromise;
  }

  public subscribeNotify(enable=true, onNotify?:notifyCallback){
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.SubscribeNotify,
      args: [enable?'true':'false'],
      contents: [],
    }
    if (onNotify && enable){
      this.onNotify = (title: string, msg:string, kind:string="")=>{
        onNotify(title,msg,kind)
      }
    }else{
      this.onNotify = undefined;
    }

    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public subscribeState(enable=true, onState?:stateCallback){
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.SubscribeState,
      args: [enable?'true':'false'],
      contents: [],
    }
    if (onState && enable){
      this.onState = (state: CompilerState, content?:any)=>{onState(state,content)}
    }else{
      this.onState = undefined;
    }

    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public subscribeStdout(enable=true, onStdout?:stdCallback){
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.SubscribeStdout,
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
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.SubscribeStderr,
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
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.SendStdin,
      args: [],
      contents: [msg],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  public async createDirectory(fullpath: string): Promise<boolean> {
    console.log("compiler-serive-driver:createDirectory: "+fullpath)

    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.CreateDirectory,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  public async readFile(fullpath: string, binary: boolean=true): Promise<string|ArrayBuffer> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.ReadFile,
      args: [fullpath],
      contents: [],
    }
    if(binary){message.args.push('binary');}
    let resultPromise = this.sendMessage<string|ArrayBuffer>(message);
    return resultPromise;
  }

  public async writeFile(fullpath: string, content: string|ArrayBuffer): Promise<number> {
    console.log("compiler-serive-driver:writeFile: "+fullpath)
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.WriteFile,
      args: [fullpath],
      contents: [],
    }
    message.contents.push(content)
    
    let resultPromise = this.sendMessage<number>(message);
    return resultPromise;
  }

  public async readDirectory(fullpath: string): Promise<FsNodeFolder | null> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.ReadDirectory,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<FsNodeFolder | null>(message);
    return resultPromise;
  }



  public async scanDirectory(fullpath?: string, recursive = false, parent?: FsNodeFolder): Promise<FsNodeFolder | null> {
    if (!fullpath) { fullpath = './' }
    
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.ScanDirectory,
      args: [fullpath, recursive?'recursive':'flat'],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<FsNodeFolder | null>(message);
    return resultPromise;
  }

  public async renameItem(oldpath: string, newpath: string): Promise<boolean> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.RenameItem,
      args: [oldpath, newpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  public async delete(fullpath: string): Promise<boolean> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.Delete,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }


  public async exists(fullpath: string): Promise<boolean> {
    let message: CompilerMessage = {
      uid: this.requestUID(),
      type: CompilerMessageType.Exists,
      args: [fullpath],
      contents: [],
    }
    
    let resultPromise = this.sendMessage<boolean>(message);

    return resultPromise;
  }

  private dataToString(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return this.binDecoder.decode(data) }
    return data
  }

  private dataToArrayBuffer(data:string|ArrayBuffer){
    if(data instanceof ArrayBuffer) { return data }
    return this.binEncoder.encode(data)
  }
  
  private requestUID(): UID {
    var timestap = new Date().getTime();
    let seed = Math.floor(Math.random() * 100000000);
    return 'uid-' + timestap + '-' + seed;
  }
}
  