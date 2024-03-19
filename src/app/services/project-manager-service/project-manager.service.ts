import { EventEmitter, Injectable, Input } from '@angular/core';
import { ProjectDriver, ProjectEnvironment, ProjectLanguage } from './project-manager.types';
import { PythonCompilerService } from '../python-compiler-service/python-compiler.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private projects = new Array<ProjectEnvironment>();
  private currentProject: ProjectEnvironment | null = null;

  public onProjectChanged = new EventEmitter<ProjectEnvironment>();
  public onProjectListChanged = new EventEmitter<void>();

  constructor(
    private python: PythonCompilerService,
  ){}

  public setCurrentProject(index:number){
    console.log("ProjectManagerService:setCurrentProject")
    this.currentProject = this.projects[index];
    console.log("ProjectManagerService:setCurrentProject:willEmit", this.projects[index])
    this.onProjectChanged.emit(this.currentProject)
    console.log("ProjectManagerService:setCurrentProject:sent", this.projects)
  }

  public getCurrentProject(){
    return this.currentProject;
  }

  public listProject(){
    return this.projects.slice();
  }

  public addProject(){
    console.log("ProjectManagerService:addProject")

    //TODO: add switch python/cpp
    let project = this.python.createPythonProject()
    console.log("ProjectManagerService:addProject:newPythonProject", project)
    
    let index = this.projects.indexOf(project)
    if(index == -1){
      this.projects.push(project)
      this.onProjectListChanged.emit();
      index = this.projects.length - 1
    }

    this.setCurrentProject(index)
  }

  public openProject(project:ProjectEnvironment){
    //TODO:
    return project
  }

  public closeProject(index: number){

    this.projects.splice(index, 1); // 2nd parameter means remove one item only
    this.onProjectListChanged.emit();

  }
}
