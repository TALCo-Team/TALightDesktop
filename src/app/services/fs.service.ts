import { Injectable } from '@angular/core';
import { createFs } from 'indexeddb-fs';


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


export class FsNode {
  name: string;
  path: string;
  isFolder: boolean;
  children?: FsNode[];

  constructor(name:string, path:string, isFolder:boolean, children?:FsNode[]){
    this.name = name;
    this.path = path;
    this.isFolder = isFolder;
    this.children = children;
  }
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

  async scanDirectory(path?:string, recursive=false):Promise<FsNode>{
    if (!path){path = this.fs.rootDir;}
    let rootNode = new FsNode(
      path,
      path,
      true,
      Array<FsNode>()
    );
    
    let dirContent = await this.fs.readDirectory(path);

    let fileNodes = Array<FsNode>();
    dirContent.files.forEach(element => {
      fileNodes.push(new FsNode(
        element.name,
        element.directory,
        false //element.type == "file"
      ));
    });

    let dirNodes = Array<FsNode>();
    await dirContent.directories.forEach(async (element) => {
      if (recursive){
        dirNodes.push(await this.scanDirectory(element.directory, true));
      }
      else{
        dirNodes.push(new FsNode(
          element.name,
          element.directory,
          false,
          Array<FsNode>()
        ));
      }
    });
    rootNode.children = dirNodes.concat( fileNodes );
    
    

    return rootNode;
  }
}


