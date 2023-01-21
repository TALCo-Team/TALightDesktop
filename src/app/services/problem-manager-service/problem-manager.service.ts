import { Injectable } from '@angular/core';
import { Packets } from '../api-service/api.packets';
import { Meta } from '../api-service/api.service';


export class RawMap extends Map<string, Meta>{};
export class ProblemList extends Array<ProblemDescriptor>{};
export class ProblemMap extends Map<string, ProblemDescriptor>{};
export class ServiceMap extends Map<string, ServiceDescriptor>{};
export class ParamsMap extends ServiceMap{};
export class ArgsMap extends Map<string, ArgDescriptor>{};

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
  public files;
  constructor( public name:string, 
               service:Packets.Service,
               public parent:ProblemDescriptor,
    ){
      this.evaluator = service.evaluator
      this.files = service.files
      service.args!.forEach((arg,argName)=>{
        //console.log('ServiceDescriptor:constructor:arg', arg)
        let argDesc = new ArgDescriptor(argName,arg,this)
        this.args.set(argName,argDesc)
      })
      console.log('ServiceDescriptor:constructor:args', this.args)
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



@Injectable({
  providedIn: 'root'
})
export class ProblemManagerService {
  selectedProblem?: ProblemDescriptor
  selectedService?: ServiceDescriptor

  problemList=new ProblemList();
  problems=new ProblemMap();
  services=new ServiceMap();
  savedParams=new ParamsMap();
  
  updateProblems(problemMap: RawMap){
    this.problemList=[];
    this.problems.clear();
    problemMap.forEach(( problem, name )=>{
      let problemDesc = new ProblemDescriptor(name, problem)
      this.problemList.push(problemDesc)
      this.problems.set(problemDesc.key,problemDesc);
      problemDesc.services.forEach((serviceDesc)=>{
        this.services.set(serviceDesc.key, serviceDesc)
      })
    })
  }

  
  
  selectProblem(selectedProblem: ProblemDescriptor){
    this.selectedProblem = selectedProblem;
  }
  

  selectService(selectedService: ServiceDescriptor){
    let name = selectedService.key;
    if ( this.savedParams.has(name) ){
      //TODO: Deep copy param values from  to selectedProblem object, to account for changes in the problem structure.
      this.selectedService = this.savedParams.get(name)
    }else{
      this.savedParams.set(name,selectedService);
      this.selectedService = selectedService;
    }
    this.selectedProblem = this.selectedService?.parent;
  }



}
