import { EventEmitter, Injectable } from '@angular/core';
import { ProjectEnvironment } from './project-manager.types';
import { PyodideProjectEnvironment } from '../python-compiler-service/python-compiler.types';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  //ID -> ProjectEnvironment
  private projectsEnvironment = new Map<number, ProjectEnvironment | null>();

  private currentProjectEnvId = -1;
  private currentProjectEnv: ProjectEnvironment = new PyodideProjectEnvironment(0);

  public onInit = new EventEmitter<void>();
  public currentProjectChanged = new EventEmitter<void>();
  public projectManagerServiceListChanged = new EventEmitter<void>();

  static readonly projectsFolder = "Projects";

  public setCurrentProjectEnvironment(id: number) {
    let projectEnv = this.getProject(id);
    console.log("ProjectManagerService:setCurrentProject:id:", id, projectEnv)
    if (!projectEnv) {
      console.log("ProjectManagerService:setCurrentProject: error, invalid index")
      return;
    }

    this.currentProjectEnv = projectEnv;
    this.currentProjectEnvId = id;
    /*
    projectEnv.onProjectChanged.subscribe(() => {
      console.log("ProjectManagerService:setCurrentProject:willEmit:onProjectChanged", this.currentProjectEnv)
      this.currentProjectChanged.emit()
      console.log("ProjectManagerService:setCurrentProject:onProjectChanged:sent")
    });
    */
    console.log("ProjectManagerService:setCurrentProject:send")
    this.currentProjectChanged.emit()
  }

  private getProject(indexIds: number) {
    let ids = this.getProjectsId();

    if (indexIds < 0 || indexIds >= ids.length)
      return null; // Invalid index, prj not found
    
    let projectEnvironment = this.projectsEnvironment.get(ids[indexIds])
    if (!projectEnvironment) {
      // The project is not loaded from the storage
      console.log("ProjectManagerService:getProject:loadFromStorage:id: ", ids[indexIds])
      projectEnvironment = new PyodideProjectEnvironment(ids[indexIds])
      this.projectsEnvironment.set(indexIds, projectEnvironment)// Replace the null value
    }
    return projectEnvironment;
  }

  public getProjectsId() {
    return Array.from(this.projectsEnvironment.keys()).sort();
  }

  public getCurrentProject() : ProjectEnvironment {
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

    //TODO: add switch python/cpp
    let projectEnvironment = new PyodideProjectEnvironment(id)
    this.projectsEnvironment.set(id, projectEnvironment)
    console.log("ProjectManagerService:addProject:projectEnvironment", projectEnvironment)
    console.log("ProjectManagerService:addProject:id: ", id)
    this.setCurrentProjectEnvironment(id)

    this.store();
  }

  // TODO read/write on file instead of the cache
  // Needed for driver to mount the storage with the projects ids json file
  private async getFirstProject() {
    let firstId = Math.min(...this.getProjectsId());
    return this.getProject(firstId);
  }

  private getPathProjectsJson(firstProject: ProjectEnvironment) {
    /*
    Use the first project driver to mount the storage with the projects
    ids json file
    */
    return firstProject.config.DIR_PROJECT + "Projects.json";
  }

  public async load() {
    // Read to get the projects ids
    
    // Actually the idea is to use always the first driver avaible,
    // the one of the first project
    /*
    let firstProject = this.getFirstProject()
    if(firstProject != null){
      let path = this.getPathProjectsJson(firstProject)
      let content = firstProject.driver.readFile(path, false)
      console.log("ProjectManagerService:load:", content)
    }
    */

    // Read from cache, to replace with the previous comment
    let content = localStorage.getItem('projectsCached');
    console.log("ProjectManagerService:load:", content)

    if (content != null) { // Load the projects from the storage
      for (let id of JSON.parse(content) as number[])
        this.projectsEnvironment.set(id, null);
      /* IMPORTANT:
      The id is added to the map with null value but will be replaced
      with the rigth ProjectManagerService saved into the storage just
      if needed by getProjectManagerService(...)
      */

      let id = Math.min(...this.getProjectsId());
      this.setCurrentProjectEnvironment(id);    
    } else
      this.projectsEnvironment.set(0, this.currentProjectEnv);

    this.onInit.emit();
    this.projectManagerServiceListChanged.emit();
  }

  private store() {
    // Write the ids to add the new one
    let content = JSON.stringify(this.getProjectsId());
    console.log("ProjectManagerService:store:", content)
    
    // Actually the idea is to use always the first driver avaible,
    // the one of the first project
    /*
    let firstProject = this.getFirstProject()
    if(firstProject != null){
      let path = this.getPathProjectsJson(firstProject)
      firstProject?.driver.writeFile(path, content);
    }
    */
    
    // Write to cache, to replace with the previous comment
    localStorage.setItem('projectsCached', content);

    this.projectManagerServiceListChanged.emit();
  }
}
