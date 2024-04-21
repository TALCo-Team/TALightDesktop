import { EventEmitter, Injectable } from '@angular/core';
import { ProjectEnvironment } from './project-manager.types';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  public onProjectChanged = new EventEmitter<ProjectEnvironment>();

  constructor(private project: ProjectEnvironment){
    console.log("ProjectManagerService:constructor:", this.project)
  }

  public getProject(){
    return this.project;
  }
}
