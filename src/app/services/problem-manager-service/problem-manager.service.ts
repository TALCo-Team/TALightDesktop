import { EventEmitter, Injectable } from '@angular/core';
import { ApiService, } from '../api-service/api.service';
import { ArgDescriptor, ParamsMap, ProblemDescriptor, ProblemList, ProblemMap, ServiceDescriptor, ServiceMap } from './problem-manager.types';
import { ProjectManagerService } from '../project-manager-service/project-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemManagerService {

  //selectedProblem?: ProblemDescriptor
  //selectedService?: ServiceDescriptor

  problemList=new ProblemList();
  problems=new ProblemMap();
  services=new ServiceMap();
  savedParams=new ParamsMap();


  public onProblemsChanged = new EventEmitter<boolean>();
  public onProblemSelected = new EventEmitter<ProblemDescriptor>();
  public onError = new EventEmitter<any>();
  public onProblemsLoaded = new EventEmitter<void>();

  public onServiceSelected = new EventEmitter<ServiceDescriptor>();

  constructor(
    public api:ApiService,
    public pms: ProjectManagerService,
  ){}


  public getProblems(){
    return this.problemList;
  }


  public updateProblems(){
    //this.selectedProblem=undefined;
    //this.selectedService=undefined;
    /*
    let config = this.pms.getCurrentProject().config
    config.TAL_PROBLEM = "";
    config.TAL_SERVICE = "";
    */

    this.problemList=[];
    this.problems.clear();
    this.services.clear();
    this.onProblemsChanged.emit(true)

    let req = this.api.problemList((problemMap) => {
      console.log('apiProblemList:problemList:', problemMap)
      problemMap.forEach(( problem, name )=>{
        let problemDesc = new ProblemDescriptor(name, problem)
        this.problemList.push(problemDesc)
        this.problems.set(problemDesc.key,problemDesc);
        problemDesc.services.forEach((serviceDesc)=>{
          this.services.set(serviceDesc.key, serviceDesc)
        })
      })
      this.onProblemsChanged.emit(false)
      this.onProblemsLoaded.emit()
    });
    req.onError = (error) => {
      this.onProblemsChanged.emit(false)
      this.onError.emit(error)
    };
  }


  selectProblem(selectedProblem: ProblemDescriptor){
    console.log('problem-manager-service:selectProblem:',selectedProblem.key)
    let config = this.pms.getCurrentProject().config
    config.TAL_PROBLEM = selectedProblem.key;
    config.TAL_SERVICE = "";
    
    this.pms.getCurrentProject().saveConfig(this.pms.getCurrentDriver());

    this.onProblemSelected.emit(selectedProblem);
  }

  getProblem(problemName: string) {
    return this.problems.get(problemName);
  }

  getCurrentProblem() {
    let project = this.pms.getCurrentProject();
    return this.getProblem(project.config.TAL_PROBLEM || "");
  }

  selectService(selectedService: ServiceDescriptor){
    let name = selectedService.key;
    if ( this.savedParams.has(name) ){
      //TODO: Deep copy param values from  to selectedProblem object, to account for changes in the problem structure.
      //this.selectedService = this.savedParams.get(name)
    }else{
      this.savedParams.set(name,selectedService);
      //this.selectedService = selectedService;
    }

    let project = this.pms.getCurrentProject();
    project.config.TAL_SERVICE = selectedService.getKey();
    project.saveConfig(this.pms.getCurrentDriver());

    this.onServiceSelected.emit(selectedService);
  }

  getService(serviceName: string) {
    return this.services.get(serviceName);
  }

  getCurrentService() {
    let project = this.pms.getCurrentProject();
    return this.getService(project.config.TAL_SERVICE || "");
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
