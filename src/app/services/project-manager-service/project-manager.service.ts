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
    console.log("ProjectManagerService:setCurrentProject:sent")
  }

  public getCurrentProject(){
    return this.currentProject;
  }

  public listProject(){
    return this.projects.slice();
  }

  public addProject(project?:ProjectEnvironment){
    console.log("CodeEditorComponent:constructor:createPythonProject:do!start", project)
    //if( this.projects.indexOf(project) == -1 ){
      if(!project){
        project = this.python.createPythonProject()
        console.log("CodeEditorComponent:constructor:createPythonProject:do!errorrrrrr", project)
      }
      
      this.projects.push(project)
      this.onProjectListChanged.emit();
      this.setCurrentProject(this.projects.length - 1)
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
