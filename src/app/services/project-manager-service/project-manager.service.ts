import { EventEmitter, Injectable, Input } from '@angular/core';
import { ProjectDriver, ProjectEnvironment, ProjectLanguage } from './project-manager.types';


@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private projects = new Array<ProjectEnvironment>();
  private currentProject: ProjectEnvironment | null = null;

  public onProjectChanged = new EventEmitter<ProjectEnvironment>();
  public onProjectListChanged = new EventEmitter<void>();

  constructor(){}

  public clearCurrentProject(){
    this.currentProject = null;
    this.onProjectChanged.emit();
  }

  public setCurrentProject(project:ProjectEnvironment){
    console.log("ProjectManagerService:setCurrentProject")
    this.currentProject = project
    console.log("ProjectManagerService:setCurrentProject:willEmit", project)
    this.onProjectChanged.emit(project)
    console.log("ProjectManagerService:setCurrentProject:sent")
  }

  public getCurrentProject(){
    return this.currentProject;
  }

  public listProject(){
    return this.projects.slice();
  }

  public addProject(project:ProjectEnvironment){
    //if( this.projects.indexOf(project) == -1 ){
      this.projects.push(project)
      this.onProjectListChanged.emit();
      this.setCurrentProject(project)
    //}
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
