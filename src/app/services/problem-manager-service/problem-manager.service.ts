import { EventEmitter, Injectable } from '@angular/core';
import { ApiService, } from '../api-service/api.service';
import { ArgDescriptor, ParamsMap, ProblemDescriptor, ProblemList, ProblemMap, ServiceDescriptor, ServiceMap } from './problem-manager.types';

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
  

  public onProblemsChanged = new EventEmitter<boolean>();
  public onProblemSelected = new EventEmitter<ProblemDescriptor>();
  public onError = new EventEmitter<any>();
  public onProblemsLoaded = new EventEmitter<ProblemList>();
    
  constructor(
    public api:ApiService
  ){}


  updateProblems(){
    this.selectedProblem=undefined;
    this.selectedService=undefined;
    this.problemList=[];
    this.problems.clear();
    this.services.clear();
    this.onProblemsChanged.emit(true)

    let req = this.api.problemList((problemMap) => {
      console.log('apiProblemList:problemList:', problemMap)
      problemMap.forEach(( problem, name )=>{
        let problemDesc = new ProblemDescriptor(name, problem)
        this.problemList.push(problemDesc)
        console.log('PROVA:\n' + problemDesc.key);
        this.problems.set(problemDesc.key,problemDesc);
        problemDesc.services.forEach((serviceDesc)=>{
          this.services.set(serviceDesc.key, serviceDesc)
        })
      })
      this.onProblemsChanged.emit(false)
      this.onProblemsLoaded.emit(this.problemList)
    });
    req.onError = (error) => { 
      this.onProblemsChanged.emit(false)
      this.onError.emit(error) 
    };
  }

  findServices (problem: ProblemDescriptor) {
    problem.services.forEach((service) => {
      //alert(service.name);
    })
  }

  
  
  selectProblem(selectedProblem: ProblemDescriptor){
    this.selectedProblem = selectedProblem;
    //'hai selezionato il problema: '+ selectedProblem.name);
    localStorage.setItem('problema', selectedProblem.name);
    this.onProblemSelected.emit(selectedProblem);
    this.selectedService = undefined
  }

  getProblem(problemName: string, lista: ProblemList) {
    //alert('sto cercando ' + problemName);
    //alert('la dimensione è: ' + lista.length)
    this.problemList.forEach(problem => {
      console.log("Nome del problema: " + problem.name);
    })
    return this.problemList.find(problem => problem.name === problemName);
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
  }


  validateArgs(service: ServiceDescriptor){
    let issues = new Map<string,any>();
    service.args.forEach((arg)=>{
      let issue = this.validateArg(arg)
      if(issue){issues.set(arg.key,issue)}
    })
    return issues;
  }

  validateArg(arg: ArgDescriptor){
      //set
      if (arg.regex === null){
        console.log("validateArg:regex:null")
        return null
      }

      //valid re
      let pattern;
      try{
        pattern = new RegExp(arg.regex)
      }catch(error:any) { 
        console.log("validateArg:regex:invalid")
        return null;
      }

      //match
      let match = arg.value.match(pattern)
      console.log("validateArg:value:",arg.value)
      console.log("validateArg:pattern:",pattern)
      console.log("validateArg:match:",match)
      if(!match || match.length == 0){
        console.log("validateArg:match:no")
        return arg.name + ": Validation error";
      }
      console.log("validateArg:match:yes")
      return null;
  }

}
