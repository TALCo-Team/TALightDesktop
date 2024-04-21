import { EventEmitter, Injectable } from '@angular/core';
import { ProjectEnvironment } from './project-manager.types';
import { FsNodeFile, FsNodeFolder } from '../fs-service/fs.service.types';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  public onProjectChanged = new EventEmitter<ProjectEnvironment>();

  // list of all the files
  public files: FsNodeFile[] = [];

  constructor(private project: ProjectEnvironment){
    console.log("ProjectManagerService:constructor:", this.project)
  }

  public getProject(){
    return this.project;
  }
}
