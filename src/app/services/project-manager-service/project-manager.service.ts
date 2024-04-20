import { EventEmitter, Injectable, Input } from '@angular/core';
import { ProjectDriver, ProjectEnvironment, ProjectLanguage } from './project-manager.types';
import { PythonCompilerService } from '../python-compiler-service/python-compiler.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  //ID -> ProjectEnvironment
  private projects = new Map<number, ProjectEnvironment>();

  private currentProject: ProjectEnvironment | null = null;

  public onProjectChanged = new EventEmitter<ProjectEnvironment>();
  public onProjectListChanged = new EventEmitter<void>();

  constructor(
    private python: PythonCompilerService,
  ){}

  public setCurrentProject(index:number){
    console.log("ProjectManagerService:setCurrentProject")
    
    let prj = this.getProject(index);
    if(!prj){
      console.log("ProjectManagerService:setCurrentProject: error, invalid index")
      return;
    }

    this.currentProject = prj;
    console.log("ProjectManagerService:setCurrentProject:willEmit", this.currentProject)
    this.onProjectChanged.emit(this.currentProject)
    console.log("ProjectManagerService:setCurrentProject:sent", this.projects)
  }

  private getProject(index:number){
    let prj = this.projects.get(this.getProjectsId()[index]);
    if(!prj){
      //console.log("ProjectManagerService:getProject: error, invalid index")
      return null;
    }

    return prj;
  }

  public getProjects(){// TODO Daniel: check if there are sorted byt the id (the key of the map)
    return Array.from(this.projects.values());
  }

  public getCurrentProject(){
    return this.currentProject;
  }

  public getProjectsId(){
    return Array.from(this.projects.keys()).sort();
  }

  public addProject(){
    console.log("ProjectManagerService:addProject")

    // Get the last project id if exist
    let id = 0
    if(this.getProject(this.projects.size - 1))
      id = Math.max(...this.getProjectsId()) + 1      
      
    //TODO: add switch python/cpp
    let project = this.python.createPythonProject()
    console.log("ProjectManagerService:addProject:newPythonProject", project)
    
    this.projects.set(id, project)
    console.log("ProjectManagerService:addProject:projects", this.getProjectsId())
    this.setCurrentProject(id)

    this.onProjectListChanged.emit();
  }

  public openProject(project:ProjectEnvironment){
    //TODO:
    return project
  }

  public closeProject(index: number){
    this.projects.delete(index);
    this.onProjectListChanged.emit();
  }
}
