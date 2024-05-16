import { EventEmitter, Injectable } from '@angular/core';
import { ProjectEnvironment, ProjectLanguage } from './project-manager.types';
import { PyodideProjectEnvironment } from '../python-compiler-service/python-compiler.types';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  //ID -> ProjectEnvironment
  private projectsEnvironment = new Map<number, ProjectEnvironment | null>();

  private currentProjectEnvId = -1;
  private currentProjectEnv: ProjectEnvironment | null = null;

  public onInit = new EventEmitter<void>();
  public currentProjectChanged = new EventEmitter<void>();
  public projectManagerServiceListChanged = new EventEmitter<void>();

  static readonly projectsFolder = "Projects";

  public getProjectsEnvironment() {
    return this.projectsEnvironment;
  }

  private createProject(projectLanguage: ProjectLanguage, id: number) : ProjectEnvironment {
    let projectEnvironment: ProjectEnvironment;

    // TODO: add switch python/cpp
    /*
    if(projectLanguage == ProjectLanguage.C)
      projectEnvironment = new ___ProjectEnvironment();

    if(projectLanguage == ProjectLanguage.CPP)
      projectEnvironment = new ___ProjectEnvironment();
    
    else // Default to Python
    */
      projectEnvironment = new PyodideProjectEnvironment();

    console.log("ProjectManagerService:createProject:id:", id)

    projectEnvironment.onProjectReady.subscribe(() => {
      console.log("ProjectManagerService:createProject:onProjectReady:id:", id)
      this.currentProjectChanged.emit()
    });

    projectEnvironment.init(id)

    return projectEnvironment;
  }

  public async setCurrent(id: number) {
    console.log("ProjectManagerService:setCurrent:id:", id)
    // If not present, return null
    if (this.getProjectsId().indexOf(id) < 0){
      console.log("ProjectManagerService:setCurrent:id:not_found")
      return
    }

    let projectEnvironment = this.projectsEnvironment.get(id)
    if (!projectEnvironment) {
      // The project is not loaded from the storage
      console.log("ProjectManagerService:setCurrent:loadFromStorage:id: ", id)
      projectEnvironment = await this.createProject(ProjectLanguage.PY, id)
      
      this.projectsEnvironment.set(id, projectEnvironment)// Replace the null value
    }
    console.log("ProjectManagerService:setCurrent:id:", id, projectEnvironment)

    this.currentProjectEnv = projectEnvironment;
    this.currentProjectEnvId = id;

    if (projectEnvironment.isReady){
      console.log("ProjectManagerService:setCurrent:send")
      this.currentProjectChanged.emit()
    }
    // othetrwise, the event will be emitted by the projectEnvironment when it will be ready
    // read the createProject() funtion
  }

  public getProjectsId() {
    return Array.from(this.projectsEnvironment.keys()).sort();
  }

  public getCurrentProject() : ProjectEnvironment {
    if (!this.currentProjectEnv){
      console.log("ProjectManagerService:getCurrentProject:throw: No project selected")
      throw new Error("No project selected")
    }  
    return this.currentProjectEnv;
  }

  public getCurrentProjectId() : number {
    return this.currentProjectEnvId;
  }

  public addProject() {
    console.log("ProjectManagerService:addProject")

    // Get the last project id if exist
    let id = 0
    let ids = this.getProjectsId()
    console.log("ProjectManagerService:addProject:ids", ids)
    if(ids.length > 0)
      id = Math.max(...ids) + 1

    console.log("ProjectManagerService:addProject:id: ", id)
    this.currentProjectEnv = this.createProject(ProjectLanguage.PY, id)
    console.log("ProjectManagerService:addProject:id:EmptyProject", id)
    this.currentProjectEnvId = id;
    this.projectsEnvironment.set(id, this.currentProjectEnv);

    this.onInit.emit();

    this.store();
  }

  public async load() {
    // Read from cache, to replace with the previous comment
    let content = localStorage.getItem('projectsCached');
    console.log("ProjectManagerService:load:", content)

    let id = 0;
    if (content != null) { // Load the projects from the storage
      for (let storedId of JSON.parse(content) as number[])
        this.projectsEnvironment.set(storedId, null);
      /* IMPORTANT:
      The id is added to the map with null value but will be replaced
      with the rigth ProjectManagerService saved into the storage just
      if needed by getProjectManagerService(...)
      */

      id = Math.min(...this.getProjectsId());
    }
    console.log("ProjectManagerService:load:createEmptyProjectEnv:", id)
    this.currentProjectEnv = this.createProject(ProjectLanguage.PY, id)
    this.currentProjectEnvId = id;
    this.projectsEnvironment.set(id, this.currentProjectEnv);

    /*
    Don't use setCurrent(id) because it will emit an event
    that is not to emit on load
    */

    this.onInit.emit();
    this.projectManagerServiceListChanged.emit();
  }

  private store() {
    // Write the ids to add the new one
    let content = JSON.stringify(this.getProjectsId());
    console.log("ProjectManagerService:store:", content)
    
    // Write to cache, to replace with the previous comment
    localStorage.setItem('projectsCached', content);

    this.projectManagerServiceListChanged.emit();
  }
}
