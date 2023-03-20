import { EventEmitter, Injectable, Input } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { CompilerDriver } from '../compiler-service/compiler-service.types';
import { FsService } from '../fs-service/fs.service';
import { ProjectDriver, ProjectEnvironment, ProjectLang } from './project-manager.types';


@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  
  projects = new Array<ProjectEnvironment>();
  private _selectedProject?: ProjectEnvironment;
  
  @Input("onProjectSelected") onProjectSelected = new EventEmitter<ProjectEnvironment>();
  @Input("onProjectListChanged") onProjectListChanged = new EventEmitter<void>();

  constructor(
    ) {
  }


  public set currentProject(project:ProjectEnvironment | undefined){
    if(!project){return}
    this.addProject(project)
    this._selectedProject = project
    this.onProjectSelected.emit(project)
  }

  public get currentProject(): ProjectEnvironment | undefined{
    return this._selectedProject
  }
  


  public createProject(name:string, mount:string, root:string, ){
    let project = new ProjectEnvironment();
    //TODO: 
    return project
  }

  public closeProject(project:ProjectEnvironment){
    //TODO: 
    return project
  }

  public listProject(){
    let projects = new Array<ProjectEnvironment>();
    //TODO: 
    return projects
  }

  public addProject(project:ProjectEnvironment){
    if( this.projects.indexOf(project) == -1 ){
      this.projects.push(project)
    }
  }



}
