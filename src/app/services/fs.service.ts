import { Injectable } from '@angular/core';
import { createFs } from 'indexeddb-fs';


@Injectable({
  providedIn: 'root'
})
export class FsService {
  public driver;
  public pyofs;

  constructor(){
    this.driver=new FsServiceIndexedDBFS();
    this.pyofs=new PyodideFsDriver();
  }
}

export interface FsServiceDriver {
  rootDir:string;
  
  createDirectory(fullpath:string): Promise<boolean>;

  writeFile(fullpath:string, content:string): Promise<number>;

  readDirectory(fullpath:string): Promise<FsNode|null>;

  scanDirectory(fullpath:string, recursive?:boolean, parent?:FsNode):Promise<FsNode>;
}



export class PyodideFsDriver implements FsServiceDriver {
  public fs;
  public rootDir = "root"
  public options = {
    databaseVersion:    1,
    objectStoreName:    'files',
    databaseName:       'indexeddb',
    rootDirectoryName:  this.rootDir
  }

  constructor() { 
    this.fs = createFs(this.options);
  }

  static isElectron(): boolean{
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(' electron/') > -1) {
      return true;
    }
    return false;
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

  

  async scanDirectory(path?:string, recursive=false, parent?:FsNode):Promise<FsNode>{
    if (!path){path = this.rootDir;}
    let depth = (parent? parent.depth + 1 : 0);
    let rootNode:FsNode = {
      name: path.split("/").reverse()[0]+"/",
      path: path,
      depth: depth,
      isFolder: true,
      children: new Array<FsNode>(),
    };
    console.log("scanDirectory:dir: ",path);
    
    let dirContent = await this.fs.readDirectory(path)
     

    let fileNodes = Array<FsNode>();
    for(let key in dirContent.files){
      let element = dirContent.files[key]
      let childNode:FsNode = {
        name: element.name,
        path: element.fullPath,
        depth: depth + 1,
        isFolder: false,
      }
      fileNodes.push(childNode);
      console.log("scanDirectory:file: ",element.fullPath);
    }

    let dirNodes = Array<FsNode>();
    for(let key in dirContent.directories){
      let element = dirContent.directories[key]
      if (recursive){
        dirNodes.push(await this.scanDirectory(element.fullPath, true, rootNode));
      }
      else{
        let childNode:FsNode = {
          name: element.name,
          path: element.fullPath,
          depth: depth + 1,
          isFolder: true,
          children: new Array<FsNode>()
        }
        dirNodes.push(childNode);
      }
    }
    rootNode.children = dirNodes.concat( fileNodes );

    return rootNode;
  }
}











































export class FsServiceIndexedDBFS implements FsServiceDriver {
  public fs;
  public rootDir = "root"
  public options = {
    databaseVersion:    1,
    objectStoreName:    'files',
    databaseName:       'indexeddb',
    rootDirectoryName:  this.rootDir
  }

  constructor() { 
    this.fs = createFs(this.options);
  }

  static isElectron(): boolean{
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(' electron/') > -1) {
      return true;
    }
    return false;
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

  

  async scanDirectory(path?:string, recursive=false, parent?:FsNode):Promise<FsNode>{
    if (!path){path = this.rootDir;}
    let depth = (parent? parent.depth + 1 : 0);
    let rootNode:FsNode = {
      name: path.split("/").reverse()[0]+"/",
      path: path,
      depth: depth,
      isFolder: true,
      children: new Array<FsNode>(),
    };
    console.log("scanDirectory:dir: ",path);
    
    let dirContent = await this.fs.readDirectory(path)
     

    let fileNodes = Array<FsNode>();
    for(let key in dirContent.files){
      let element = dirContent.files[key]
      let childNode:FsNode = {
        name: element.name,
        path: element.fullPath,
        depth: depth + 1,
        isFolder: false,
      }
      fileNodes.push(childNode);
      console.log("scanDirectory:file: ",element.fullPath);
    }

    let dirNodes = Array<FsNode>();
    for(let key in dirContent.directories){
      let element = dirContent.directories[key]
      if (recursive){
        dirNodes.push(await this.scanDirectory(element.fullPath, true, rootNode));
      }
      else{
        let childNode:FsNode = {
          name: element.name,
          path: element.fullPath,
          depth: depth + 1,
          isFolder: true,
          children: new Array<FsNode>()
        }
        dirNodes.push(childNode);
      }
    }
    rootNode.children = dirNodes.concat( fileNodes );

    return rootNode;
  }
}


export interface FsNode {
  name: string;
  path: string;
  depth: number;
  isFolder: boolean;
  children?: FsNode[];
}


export class FsServiceTest{
  
  public fs;
  constructor( fs:FsService ){
    this.fs = fs;
  }
  
  

  async createTestFiles(){

    await this.fs.driver.createDirectory('/src');
    await this.fs.driver.createDirectory('/assets');
    await this.fs.driver.createDirectory('assets/data');
    await this.fs.driver.createDirectory('assets/img');
    await this.fs.driver.writeFile('main.py',           'import src/testclass.py\nprint("hello");');
    await this.fs.driver.writeFile('mainC.py',           'import src/testclass.py\nprint("helloC");');
    await this.fs.driver.writeFile('src/__init__.py',   '');
    await this.fs.driver.writeFile('src/testclassA.py',  'class testclassA: pass');
    await this.fs.driver.writeFile('src/testclassB.py',  'class testclassB: pass');
    await this.fs.driver.writeFile('src/testclassC.py',  'class testclassC: pass');
  }

}


