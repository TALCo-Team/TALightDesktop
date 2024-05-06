import { EventEmitter, Injectable } from '@angular/core';
import { ProjectEnvironment } from './project-manager.types';
import { PythonCompilerService } from '../python-compiler-service/python-compiler.service';
import { ProjectManagerService } from './project-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsManagerService {
  //ID -> ProjectEnvironment
  private pms = new Map<number, ProjectManagerService | null>();

  private currentPmsId = -1;
  private currentPms: ProjectManagerService | null = null;
  private lastPms: ProjectManagerService | null = null;

  public currentProjectChanged = new EventEmitter<void>();
  public projectManagerServiceListChanged = new EventEmitter<void>();

  static readonly projectsFolder = "Projects";

  constructor(private python: PythonCompilerService) { }

  public setCurrentProjectManagerService(id: number) {
    console.log("ProjectManagerService:setCurrentProject")

    let projectManagerService = this.getProjectManagerService(id);
    if (!projectManagerService) {
      console.log("ProjectManagerService:setCurrentProject: error, invalid index")
      return;
    }
    this.lastPms = this.currentPms
    this.currentPms = projectManagerService;
    this.currentPmsId = id;
    console.log("ProjectManagerService:setCurrentProject:willEmit", this.currentPms)
    this.currentProjectChanged.emit()
    console.log("ProjectManagerService:setCurrentProject:sent")
  }

  private getProjectManagerService(indexIds: number) {
    let ids = this.getProjectsId();

    if (indexIds < 0 || indexIds >= ids.length)
      return null; // Invalid index, pms not found
    
    let projectManagerService = this.pms.get(ids[indexIds])
    if (!projectManagerService) {
      // The project is not loaded from the storage
      console.log("ProjectManagerService:getProjectManagerService:loadProject:id: ", indexIds)
      projectManagerService = new ProjectManagerService(this.python.loadPythonProject())
      this.pms.set(indexIds, projectManagerService)// Replace the null value
    }
    return projectManagerService;
  }

  private getProject(indexIds: number) {
    return this.getProjectManagerService(indexIds)?.getProject();
  }

  public getProjectsId() {
    return Array.from(this.pms.keys()).sort();
  }

  public getCurrentProjectManagerService() {
    return this.currentPms;
  }

  public getLastProjectManagerService() {
    return this.lastPms;
  }

  public getCurrentProject() {
    return this.currentPms?.getProject();
  }

  public getCurrentProjectId() {
    return this.currentPmsId;
  }

  public addProject() {
    console.log("ProjectManagerService:addProject")

    // Get the last project id if exist
    let id = 0
    let ids = this.getProjectsId()
    if(ids.length > 0)
      id = Math.max(...ids) + 1

    //TODO: add switch python/cpp
    let pms = new ProjectManagerService(this.python.createPythonExample())

    this.pms.set(id, pms)

    console.log("ProjectManagerService:addProject:id: ", id)
    this.setCurrentProjectManagerService(id)

    this.store();

    return this.getCurrentProjectManagerService();
  }

  // TODO read/write on file instead of the cache
  // Needed for driver to mount the storage with the projects ids json file
  private getFirstProject() {
    let firstId = Math.min(...this.getProjectsId());
    let firstProject = this.getProject(firstId);
    firstProject?.driver.mountByProjectId(firstId);

    return firstProject;
  }
  private getPathProjectsJson(firstProject: ProjectEnvironment) {
    /*
    Use the first project driver to mount the storage with the projects
    ids json file
    */
    return firstProject.config.DIR_PROJECT + "Projects.json";
  }

  public load() {
    // Read to get the projects ids
    /*
    // Actually the idea is to use always the first driver avaible,
    // the one of the first project
    let firstProject = this.getFirstProject()
    if(firstProject != null){
      let path = this.getPathProjectsJson(firstProject)
      let content = firstProject.driver.readFile(path, false)
    */

    // Read from cache, to replace with the previous comment
    let content = localStorage.getItem('projectsCached');
    console.log("ProjectManagerService:load:", content)
    if (content == null)
      this.addProject();

    else {
      for (let id of JSON.parse(content) as number[])
        this.pms.set(id, null);
      /* IMPORTANT:
      The id is added to the map with null value but will be replaced
      with the rigth ProjectManagerService saved into the storage just
      if needed by getProjectManagerService(...)
      */

      /*
      The following function will load the first project calling the method
      getProjectManagerService(...)
      */
      this.getFirstProject();
    }

    this.projectManagerServiceListChanged.emit();
  }

  private store() {
    // Write the ids to add the new one
    let content = JSON.stringify(this.getProjectsId());
    console.log("ProjectManagerService:store:", content)
    /*
    // Actually the idea is to use always the first driver avaible,
    // the one of the first project
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

  public closeProject(index: number) {
    this.pms.delete(index);
    this.store();
  }
}
