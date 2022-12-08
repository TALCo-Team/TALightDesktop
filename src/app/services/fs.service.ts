import { Injectable } from '@angular/core';
import { createFs } from 'indexeddb-fs';


@Injectable({
  providedIn: 'root'
})
export class FsService {
  public drivers = new Map<string,FsServiceDriver>();
  
  constructor(){
    this.registerDriver('example', new IndexeddbFsDriver());    
  }

  registerDriver(name:string, driver: FsServiceDriver):boolean{
    //if (name in this.drivers){return false;}
    //alert('register: '+driver)
    this.drivers.set(name, driver);
    //alert('register: '+driver.constructor.name+' | all: '+this.getDriverNames())
    return true;
  }

  getDriver(name:string): FsServiceDriver | undefined{
    //alert(name + ' '  + this.getDriverNames() )
    if ( this.drivers.has(name) ){return this.drivers.get(name)!;}
    alert(name + ' NOT found in: '  + this.getDriverNames() + " | getDriver: undefined !!!" )
    return undefined
    
  }

  getDriverNames(){
    return Array.from(this.drivers.keys());
  }
}

export interface FsServiceDriver {
  rootDir:string;
  
  createDirectory(fullpath:string): Promise<boolean>;

  writeFile(fullpath:string, content:string): Promise<number>;

  readFile(fullpath:string): Promise<string|null>;

  readDirectory(fullpath:string): Promise<FsNode|null>;

  scanDirectory(fullpath:string, recursive?:boolean, parent?:FsNode):Promise<FsNode|null>;
}

export class IndexeddbFsDriver implements FsServiceDriver {
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

  async readFile(fullpath:string): Promise<string|null>{
    if (!(await this.fs.exists(fullpath)) ) {return null;}
    return this.fs.readFile(fullpath);
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
  public driver;
  public driverName;
  constructor( fs:FsService, useDriver?:string ){
    this.fs = fs;

    this.driverName = useDriver ?? 'example';
    this.driver = fs.getDriver(this.driverName);
    //alert('driverName:'+this.driver)
  }
  
  

  async createTestFiles(){
    
    if (!this.driver){return;}
    alert('createTestFiles: before: '+this.driver.constructor.name);
    await this.driver.createDirectory('/src');
    await this.driver.createDirectory('/assets');
    await this.driver.createDirectory('assets/data');
    await this.driver.createDirectory('assets/img');
    await this.driver.writeFile('main.py',           'import src/testclass.py\nprint("hello");');
    await this.driver.writeFile('mainC.py',           'import src/testclass.py\nprint("helloC");');
    await this.driver.writeFile('src/__init__.py',   '');
    await this.driver.writeFile('src/testclassA.py',  'class testclassA: pass');
    await this.driver.writeFile('src/testclassB.py',  'class testclassB: pass');
    await this.driver.writeFile('src/testclassC.py',  'class testclassC: pass');
  }

}


