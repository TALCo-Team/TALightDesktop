import { EventEmitter, Injectable } from '@angular/core';
import { ProjectEnvironment } from './project-manager.types';
import { PythonCompilerService } from '../python-compiler-service/python-compiler.service';
import { ProjectManagerService } from './project-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsManagerService {
  //ID -> ProjectEnvironment
  private pms = new Map<number, ProjectManagerService>();

  private currentPmsId = -1;
  private currentPms: ProjectManagerService | null = null;

  public currentProjectChanged = new EventEmitter<ProjectManagerService>();
  public projectManagerServiceListChanged = new EventEmitter<void>();

  static readonly projectsFolder = "Projects";

  constructor(private python: PythonCompilerService){
    //Scan for stored projects
  }

  public setCurrentProjectManagerService(index:number){
    console.log("ProjectManagerService:setCurrentProject")
    
    let projectManagerService = this.getProjectManagerService(index);
    if(!projectManagerService){
      console.log("ProjectManagerService:setCurrentProject: error, invalid index")
      return;
    }

    this.currentPms = projectManagerService;
    this.currentPmsId = index;
    console.log("ProjectManagerService:setCurrentProject:willEmit", this.currentPms)
    this.currentProjectChanged.emit(this.currentPms)
    console.log("ProjectManagerService:setCurrentProject:sent")
  }

  private getProjectManagerService(index:number){
    let projectManagerService = this.pms.get(this.getProjectsId()[index])
    if(!projectManagerService){
      //console.log("ProjectManagerService:getProject: error, invalid index")
      return null;
    }

    return projectManagerService;
  }

  private getProject(index:number){
    return this.getProjectManagerService(index)?.getProject();
  }

  public getProjects(){
    let projects: ProjectEnvironment[] = [];
    for (let index of this.getProjectsId()){
      let project = this.getProject(index);
      if (project)
        projects.push(project);
    }

    return projects;
  }

  public getProjectsId(){
    return Array.from(this.pms.keys()).sort();
  }

  public getCurrentProjectManagerService(){
    return this.currentPms;
  }

  public getCurrentProject(){
    return this.currentPms?.getProject();
  }

  public getCurrentProjectId(){
    return this.currentPmsId;
  }
  
  public addProject(){
    console.log("ProjectManagerService:addProject")

    // Get the last project id if exist
    let id = 0
    if(this.getProject(this.pms.size - 1))
      id = Math.max(...this.getProjectsId()) + 1 
    
    //TODO: add switch python/cpp  
    this.pms.set(id, new ProjectManagerService(this.python.createPythonProject()))
    console.log("ProjectManagerService:addProject:projects", this.getProjectsId())
    this.setCurrentProjectManagerService(id)

    this.projectManagerServiceListChanged.emit();
  }

  public openProject(project:ProjectEnvironment){
    //TODO:
    return project
  }

  public closeProject(index: number){
    this.pms.delete(index);
    this.projectManagerServiceListChanged.emit();
  }
}
