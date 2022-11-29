import { Injectable } from '@angular/core';
import { createFs, DirectoryEntry } from 'indexeddb-fs';


@Injectable({
  providedIn: 'root'
})
export class FsService {
  public idb;
  public rootDir = "root"
  public options = {
    databaseVersion:    1,
    objectStoreName:    'files',
    databaseName:       'indexeddb',
    rootDirectoryName:  this.rootDir
  }

  constructor() { 
    this.idb = createFs(this.options);
  }

  static isElectron(): boolean{
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf(' electron/') > -1) {
      return true;
    }
    return false;
  }

  async createDirectory(fullpath:string){
    return await this.idb.createDirectory(fullpath);
  }

  async writeFile(fullpath:string, content:string){
    return await this.idb.writeFile(fullpath, content);
  }

  async readDirectory(fullpath:string){
    return await this.idb.readDirectory(fullpath);
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
  constructor(){
    this.fs = new FsService();
  }
  
  

  async createTestFiles(){

    await this.fs.createDirectory('/src');
    await this.fs.createDirectory('/assets');
    await this.fs.createDirectory('assets/data');
    await this.fs.createDirectory('assets/img');
    await this.fs.writeFile('main.py',           'import src/testclass.py\nprint("hello");');
    await this.fs.writeFile('mainC.py',           'import src/testclass.py\nprint("helloC");');
    await this.fs.writeFile('src/__init__.py',   '');
    await this.fs.writeFile('src/testclassA.py',  'class testclassA: pass');
    await this.fs.writeFile('src/testclassB.py',  'class testclassB: pass');
    await this.fs.writeFile('src/testclassC.py',  'class testclassC: pass');
  }

  async scanDirectory(path?:string, recursive=false, parent?:FsNode):Promise<FsNode>{
    if (!path){path = this.fs.rootDir;}
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


