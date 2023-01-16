import { Injectable } from '@angular/core';
import { Writable } from 'stream';
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


export class Tar{
  public static tarstream = require('tar-stream')
  public static b4a = require('b4a')

  public static binEncoder = new TextEncoder(); // always utf-8
  public static binDecoder = new TextDecoder("utf-8");

  static streamReader(ab: ArrayBuffer) {
    return new ReadableStream({
      start(controller) {
        controller.enqueue(ab)
        controller.close()
      }
    })
  }
  
  static unpack(tarball: ArrayBuffer, cb: (files:FsNodeFile[],folders:FsNodeFolder[])=>void ){
    var extract:Writable = this.tarstream.extract()

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
      // all entries read
      if(cb){cb(files,folders)}
    })

    console.log('Tar:unpack:tarball',tarball)
    console.log('Tar:unpack:extract',extract)

    let tarData = new Uint8Array(tarball)
    extract.write(tarData, (errr)=>{console.log("Tar:unpack:extract:write:",errr)})
    extract.end()
    
    console.log('Tar:unpack:files',files)
    console.log('Tar:unpack:folders',folders)
    files.sort((a,b)=>a.path.length - b.path.length)
    folders.sort((a,b)=>a.path.length - b.path.length)
  }









  static streamWriter(ab: ArrayBuffer) {
    let tarthis = this;
    let result = "";
    const writableStream = new WritableStream({
      // Implement the sink
      write(chunk) {
        return new Promise((resolve, reject) => {
          const buffer = new ArrayBuffer(1);
          const view = new Uint8Array(buffer);
          view[0] = chunk;
          const decoded = tarthis.binDecoder.decode(view, { stream: true });
          result += decoded;
          resolve();
        });
      },
      close() {
        const listItem = document.createElement('li');
        listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
      },
      abort(err) {
        console.log("Sink error:", err);
      }
    });
    return writableStream;
    
  }

  static pack(files: FsNodeFile[]){
    let pack = this.tarstream.pack() // pack is a stream
    
    files.forEach( (file, idx)=>{
      // add a file called YourFile.txt with the content "Hello World!"
      pack.entry({name: file.name}, file.content, function (error:any) {
        if (error) { throw error }
        pack.finalize()
      })
    })
    //let tarball = new ArrayBuffer();
    //var stream = streamWriter()

    // pipe the pack stream to your file
    /*
    pack.pipe(yourTarball)

    yourTarball.on('close', function () {
      console.log(path + ' has been written')
      fs.stat(path, function(err, stats) {
        if (err) throw err
        console.log(stats)
        console.log('Got file info successfully!')
      })
    })
    */
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

  readFile(fullpath:string, binary: boolean): Promise<string|ArrayBuffer|null>;

  readDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  scanDirectory(fullpath:string): Promise<FsNodeFolder|null>;

  delete(fullpath:string): Promise<boolean>;

  exists(fullpath:string): Promise<boolean>;
}
