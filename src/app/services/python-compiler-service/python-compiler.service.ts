import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FsNode, FsService, FsServiceDriver } from '../fs-service/fs.service';


let WORKER_DIR = '../../workers/';

@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public driverName = 'pyodide';
  public requests = new Map<string,PyodideFsRequest>();
  
  public fs;
  public driver?:PyodideFsDriver;
  public worker: Worker = new Worker(new URL(WORKER_DIR+'python-compiler.worker', import.meta.url));

  constructor( private _fs:FsService ) { 
    this.fs = _fs;
    this.driver = new PyodideFsDriver();
    this.fs.registerDriver(this.driverName, this.driver); 
    //alert('registered: '+this.driverName)
  }

}

export enum PythonCompilerMessageInterfaceType {
  PackageInstall = 'PackageInstall',
  ExecuteCode = 'ExecuteCode',
  // ExecuteCodeResult = 'ExecuteCodeResult',
}

export interface PythonCompilerMessageInterface {
  type: PythonCompilerMessageInterfaceType;
  packages?: string[];
  code?: string;
}



// --- PyodideFsDriver --- 

export enum PyodideFsMessageType {
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory'  
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





export class PyodideFsDriver implements FsServiceDriver {
  public worker: Worker = new Worker(new URL(WORKER_DIR+'workers/python-compiler-fs.worker', import.meta.url));

  public rootDir = "root"
    
  constructor(){
      //alert('driver built!');
      this.worker.onmessage = (event:MessageEvent) => this.onMessage(event.data);
  }

  onMessage(message:PyodideFsResponse){
    alert('onMessage!!! ');
  }

  
  async createDirectory(fullpath:string): Promise<boolean>{
    return false;
  }

  async readFile(fullpath:string): Promise<string>{
    return "";
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
}

  requestUID(){
    var timestap = new Date().getTime();
    let seed = Math.floor(Math.random() * 100000000);
    return 'uid-'+timestap+'-'+seed;
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