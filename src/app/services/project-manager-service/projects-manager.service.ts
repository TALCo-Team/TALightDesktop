import { EventEmitter, Injectable } from '@angular/core';
import { ProjectDriver, ProjectEnvironment } from './project-manager.types';
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
  private lastPms: ProjectManagerService | null = null;

  public currentProjectChanged = new EventEmitter<void>();
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
    this.lastPms = this.currentPms 
    this.currentPms = projectManagerService;
    this.currentPmsId = index;
    console.log("ProjectManagerService:setCurrentProject:willEmit", this.currentPms)
    this.currentProjectChanged.emit()
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

  public getLastProjectManagerService(){
    return this.lastPms;
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
    let pms = new ProjectManagerService(this.python.createPythonProject())
    
    this.pms.set(id, pms)

    console.log("ProjectManagerService:addProject:project:id: ", id)
    this.setCurrentProjectManagerService(id)

    this.syncProjects(id)// Write the new id to the file in the first Storage

    this.projectManagerServiceListChanged.emit();

    return this.getCurrentProjectManagerService();
  }


  private syncProjects(id:number){
    let minId = Math.min(...this.getProjectsId());

    let firstProject = this.getProject(minId);
    let path = firstProject?.config.DIR_PROJECT + "Projects.json";
    
    firstProject?.driver.mountByProjectId(minId);

    if(id == 0){
      // Read the storage to get the projects
      let content = firstProject?.driver.readFile(path, false)
      console.log("ProjectManagerService:syncProjects:read: ", content)
      //TODO Daniel: convertire content in un array di id
    }else{
      let content = JSON.stringify(this.getProjectsId());
      console.log("ProjectManagerService:syncProjects:write: ", content)

      
      firstProject?.driver.writeFile(path, content);
    }
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
