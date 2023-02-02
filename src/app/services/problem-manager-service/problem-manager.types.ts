import { Packets } from '../api-service/api.packets';
import {  Meta } from '../api-service/api.service';


export class RawMap extends Map<string, Meta>{};
export class ProblemList extends Array<ProblemDescriptor>{};
export class ProblemMap extends Map<string, ProblemDescriptor>{};
export class ServiceMap extends Map<string, ServiceDescriptor>{};
export class ParamsMap extends ServiceMap{};
export class ArgsMap extends Map<string, ArgDescriptor>{};
export class FilesMap extends Map<string, FileDescriptor>{};

export class ProblemDescriptor {
  public key;
  public services=new ServiceMap();
  
  constructor(
    public name:string, 
    meta:Meta,
    ){
      meta.services.forEach((service,serviceName)=>{
        let serviceDesc = new ServiceDescriptor(serviceName,service,this)
        this.services.set(serviceDesc.getKey(), serviceDesc)
      })
      this.key = this.getKey()
    }

    getKey(){
      let key = this.name.trim()
      key = key.toLowerCase()
      key = key.replace("_+","_")
      key = key.replace(" ","-")
      key = key.replace("-+","-")
      key = key.replace("[^a-z0-9_-]","")
      
      return key
    }
}

export class ServiceDescriptor {
  public key;
  public args = new ArgsMap();
  public evaluator;
  public files = new FilesMap();
  public filesOrder
  constructor( public name:string, 
               service:Packets.Service,
               public parent:ProblemDescriptor,
    ){
      this.evaluator = service.evaluator
      
      this.filesOrder = service.files ?? []
      this.filesOrder.forEach(name =>{
        let file = new FileDescriptor(name,this)
        this.files.set(file.name,file)
      })
      service.args!.forEach((arg,argName)=>{
        //console.log('ServiceDescriptor:constructor:arg', arg)
        let argDesc = new ArgDescriptor(argName,arg,this)
        this.args.set(argName,argDesc)
      })
      console.log('ServiceDescriptor:constructor:args', this.args)
      this.key = this.getKey()
    }

    public getKey(){
      let key = this.name.trim()
      key = key.toLowerCase().trim()
      key = key.replace(" ","-")
      key = key.replace("[^a-z0-9_-]","")
      key = key.replace("-+","-")
      key = key.replace("_+","_")
      return this.parent.getKey() + "_" + key
    }

    public exportArgs(){
      let args:any = {}
      this.args.forEach(arg=>{
        args[arg.name]=arg.value
      })
      return args;
    }

    public exportFilesPaths(){
      let fileList = new Array<string>();
      this.filesOrder.forEach((name)=>{
        let file = this.files.get(name)
        let value = file?.value ?? ""
        fileList.push(value)
      })

      return fileList
    }
}

export class ArgDescriptor{
  public key;
  public default: string
  public regex: RegExp
  public value: string
  
  constructor(
    public name:string, 
    arg: Packets.Arg,
    public parent: ServiceDescriptor
    ){
    this.default = arg.default
    this.regex = arg.regex
    this.value = arg.default
    this.key = this.getKey()
  }

  getKey(){
    let key = this.name.trim()
    key = key.toLowerCase().trim()
    key = key.replace(" ","-")
    key = key.replace("[^a-z0-9_-]","")
    key = key.replace("-+","-")
    key = key.replace("_+","_")
    return this.parent.getKey() + "_" + key
  }
}

export class FileDescriptor{
  public key;
  public value:string=""; 

  constructor(
    public name:string, 
    public parent: ServiceDescriptor
    ){
    this.key = this.getKey()
  }

  getKey(){
    let key = this.name.trim()
    key = key.toLowerCase().trim()
    key = key.replace(" ","-")
    key = key.replace("[^a-z0-9_-]","")
    key = key.replace("-+","-")
    key = key.replace("_+","_")
    return this.parent.getKey() + "_" + key
  }
}


