import { resolve } from 'dns';
import { createFs } from 'indexeddb-fs';
import { FsService } from './fs.service';
import { FsNodeEmptyFolder, FsNodeFile, FsNodeFileList, FsNodeFolder, FsNodeList, FsServiceDriver } from './fs.service.types';


export class IndexeddbFsDriver implements FsServiceDriver {
  public driverName: string;
  public mountPoint: string = "";
  public fsRoot: FsNodeFolder = FsNodeEmptyFolder;
  public fsList: FsNodeList = [];
  public fsListfiles: FsNodeFileList = [];

  public fs;
  public mountRoot = "root"

  constructor() { 
    this.driverName = 'example'
    let options = {
      databaseVersion:    1,
      objectStoreName:    'files',
      databaseName:       'indexeddb',
      rootDirectoryName:  this.mountRoot
    }
    this.fs = createFs(options);
  }
  
  

  async ready(): Promise<boolean>{
    return true;
  }

  async readFile(fullpath:string, binary: boolean=true): Promise<string|null>{
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

  async readDirectory(fullpath:string):Promise<FsNodeFolder|null>{
    if ( await this.fs.exists(fullpath) ) {
      return this.scanDirectory_recursive(fullpath);
    }
    return null;
  }

  async mount(path: string): Promise<boolean> {
    //TODO
    return new Promise<boolean>(resolve=>true);
  }
  
  async unmount(path: string): Promise<boolean> 
  {
    //TODO
    return new Promise<boolean>(resolve=>true);
  }
  
  async scanDirectory(path?:string):Promise<FsNodeFolder>{
    if (!path){path = this.mountRoot;}
    return this.scanDirectory_recursive(path, true)
  }

  async scanDirectory_recursive(path:string, recursive=false):Promise<FsNodeFolder>{
    let rootNode:FsNodeFolder = {
      name: path.split("/").reverse()[0]+"/",
      path: path,
      folders: [],
      files: []
    };
    console.log("scanDirectory:dir: ",path);
    
    let dirContent = await this.fs.readDirectory(path)
     

    for(let key in dirContent.files){
      let element = dirContent.files[key]
      let childNode:FsNodeFile = {
        name: element.name,
        path: element.fullPath,
        content: ""
        //depth: depth + 1,
      }
      rootNode.files.push(childNode);
      console.log("scanDirectory:file: ",element.fullPath);
    }

    for(let key in dirContent.directories){
      let element = dirContent.directories[key]
      if (recursive){
        rootNode.folders.push(await this.scanDirectory_recursive(element.fullPath, true));
      }
      else{
        let childNode:FsNodeFolder = {
          name: element.name,
          path: element.fullPath,
          //depth: depth + 1,
          folders: [],
          files: []
        }
        rootNode.folders.push(childNode);
      }
    }

    return rootNode;
  }

  async delete(fullpath:string): Promise<boolean>{
    if(!this.exists(fullpath)) return true;
    await this.fs.remove(fullpath);
    return !this.exists(fullpath);
  }

  async exists(fullpath:string): Promise<boolean>{
    return this.fs.exists(fullpath);
  }

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
    //alert('createTestFiles: before: '+this.driver.constructor.name);
    await this.driver.createDirectory('/src');
    await this.driver.createDirectory('/assets');
    await this.driver.createDirectory('/assets/data');
    await this.driver.createDirectory('/assets/img');
    await this.driver.writeFile('/main.py',           'import src/testclass.py\nprint("hello");');
    await this.driver.writeFile('/mainC.py',           'import src/testclass.py\nprint("helloC");');
    await this.driver.writeFile('/src/__init__.py',   '');
    await this.driver.writeFile('/src/testclassA.py',  'class testclassA: pass');
    await this.driver.writeFile('/src/testclassB.py',  'class testclassB: pass');
    await this.driver.writeFile('/src/testclassC.py',  'class testclassC: pass');
  }

}


