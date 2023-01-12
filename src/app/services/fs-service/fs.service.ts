import { Injectable } from '@angular/core';
import { IndexeddbFsDriver } from './fs.service.test';


@Injectable({
  providedIn: 'root'
})
export class FsService {
  public drivers = new Map<string,FsServiceDriver>();
  
  constructor(){
     //TODO: Remove test driver FS from constructor
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
    if ( this.drivers.has(name) ){return this.drivers.get(name);}
    alert(name + ' NOT found in: '  + this.getDriverNames() + " | getDriver: undefined !!!" )
    return undefined
    
  }

  getDriverNames(){
    return Array.from(this.drivers.keys());
  }
}


export interface FsNode {
  name: string;
  path: string;
}

export interface FsNodeFolder extends FsNode {
  folders: FsNodeFolder[];
  files: FsNodeFile[];
}
export interface FsNodeFile extends FsNode {}





export interface FsServiceDriver {
  rootDir:string;
  
  ready(): Promise<boolean>;

  createDirectory(fullpath:string): Promise<boolean>;

  writeFile(fullpath:string, content:string|ArrayBuffer): Promise<number>;

  readFile(fullpath:string): Promise<string|null>;

  readDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  scanDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  delete(fullpath:string): Promise<boolean>;

  exists(fullpath:string): Promise<boolean>;
}
