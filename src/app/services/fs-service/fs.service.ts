import { Injectable } from '@angular/core';
import { IndexeddbFsDriver } from './fs.service.test';

export class FsNodeList extends Array<FsNodeFile|FsNodeFolder>{};

@Injectable({
  providedIn: 'root'
})
export class FsService {
  public drivers = new Map<string,FsServiceDriver>();
  public static EmptyFolder = {name:"", path: "/", files:[], folders:[]} as FsNodeFolder
  public static EmptyFile = {name:"", path: "/", content:""} as FsNodeFile
  
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

  treeToList(root:FsNodeFolder){
    let items = new Array<FsNodeFile|FsNodeFolder>();
    let queue = new Array<FsNodeFolder>();
    
    queue.push(root)
    console.log('treeToList:root',root)
    console.log('treeToList:queue:0:',queue.length)
    while(queue.length > 0){
      let dir = queue.shift()
      console.log('treeToList:dir:',dir)
      if(!dir){break;}
      items = items.concat(dir.files, dir.folders)
      queue = queue.concat(dir.folders)
      console.log('treeToList:queue:',queue.length)
    }
    return items;
  }
}


export class Tar{
  public static tarstream = require('tar-web')
  public static b4a = require('b4a')

  public static binEncoder = new TextEncoder(); // always utf-8
  public static binDecoder = new TextDecoder("utf-8");

  static unpack(tarball: ArrayBuffer, cb: (files:FsNodeFile[],folders:FsNodeFolder[])=>void ){
    var extract = this.tarstream.extract()

    var files = new Array<FsNodeFile>();
    var folders = new Array<FsNodeFolder>();
    
    
    extract.on('entry', function(header:any, stream:any, next:()=>void) {
      // header is the tar header
      // stream is the content body (might be an empty stream)
      // call next when you are done with this entry

      console.log('Tar:unpack:entry:header',header)
      console.log('Tar:unpack:entry:stream',stream)

      let fullpath = header.name;
      let filetype = header.type;
        
      if ( filetype == 'file' ){
        stream.on('data', (data:any)=>{
          console.log('Tar:unpack:entry:data',data)
          let filename = fullpath.split("/").slice(0,-1)[0];
          let file:FsNodeFile = {path:fullpath, name:filename, content: data}
          console.log('Tar:unpack:entry:file',file, stream.read)
          files.push(file)
        })
      }else if ( filetype == 'directory' ){
        let dirname = fullpath;
        if( dirname.slice(-1) == '/' ) {dirname = dirname.slice(0,-1)}
        let forder:FsNodeFolder = {path:fullpath, name:dirname, files:[], folders:[] }
        console.log('Tar:unpack:entry:forder',forder)
        folders.push(forder)
      }
      
      // ready for next entry
      stream.on('end', () => {
        console.log('Tar:unpack:entry:end'); 
        next()
      })

      stream.resume() // just auto drain the stream
    })

    extract.on('finish', function() {
      console.log('Tar:unpack:finish')
      console.log('Tar:unpack:files',files)
      console.log('Tar:unpack:folders',folders)
      files.sort((a,b)=>a.path.length - b.path.length)
      folders.sort((a,b)=>a.path.length - b.path.length)
      // all entries read
      if(cb){cb(files,folders)}
    })

    console.log('Tar:unpack:tarball',tarball)
    console.log('Tar:unpack:extract',extract)

    let tarData = new Uint8Array(tarball)
    extract.write(tarData, (errr:any)=>{console.log("Tar:unpack:extract:write:",errr)})
    extract.end()
    
    
  }

  static pack(items: Array<FsNodeFile|FsNodeFolder>, cb:(tarbell:ArrayBuffer)=>void){
    let pack = this.tarstream.pack() // pack is a stream
    console.log(pack);

    var length = 0
    var chunks = new Array<any>();
    pack.on('data', (chunk:ArrayBuffer)=>{
      console.log('data:chunk:prototype:',chunk.constructor.name)
      console.log('data:chunk:',chunk)
      length += chunk.byteLength
      chunks.push(chunk)
    })

    pack.on('end', ()=>{
      // Create a new array with total length and merge all source arrays.
      console.log(chunks)
      let data = new Uint8Array(length);
      let offset = 0;
      chunks.forEach(item => {
        data.set(item, offset);
        offset += item.length;
      });
      console.log(data)
      if(cb){cb(data)}
    })

    let processItems = function(items: Array<FsNodeFile|FsNodeFolder>){
      let item = items.shift()
      let file = item as FsNodeFile;
      console.log("Tar:pack:item", item)
      
      let content;
      let header;
      if( file.content ){
        console.log("Tar:pack:file", file)
        if ( file.content instanceof ArrayBuffer ){
          content = new Uint8Array(file.content)
        }else{
          content = file.content
        }
        header = {name: file.path}
      } else {
        header = {name: item!.path, type:"directory"}
      }
      
      pack.entry(header, content, (error:any) => {
        console.log("Tar:pack:onFinishEntry", error)
        if (error) { throw error }
        if ( items.length == 0 ){
          pack.finalize()
        }else{
          processItems(items)
        }
      })

    }

    console.log("Tar:pack:processItems", items)
    processItems(items)
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
export interface FsNodeFile extends FsNode {
  content:string|ArrayBuffer
}





export interface FsServiceDriver {
  rootDir:string;
  
  ready(): Promise<boolean>;

  createDirectory(fullpath:string): Promise<boolean>;

  writeFile(fullpath:string, content:string|ArrayBuffer): Promise<number>;

  readFile(fullpath:string, binary?: boolean): Promise<string|ArrayBuffer|null>;

  readDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  scanDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  delete(fullpath:string): Promise<boolean>;

  exists(fullpath:string): Promise<boolean>;
}
