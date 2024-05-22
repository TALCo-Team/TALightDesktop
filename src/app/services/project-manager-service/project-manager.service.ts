import { EventEmitter, Injectable } from '@angular/core';
import { ProjectDriver, ProjectEnvironment, ProjectLanguage } from './project-manager.types';
import { PyodideProjectEnvironment } from '../python-compiler-service/python-compiler.types';
import { on } from 'events';
import { CompilerService } from '../compiler-service/compiler-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {
  //ID -> ProjectEnvironment
  private projectsEnvironment = new Map<number, ProjectEnvironment | null>();

  private currentProjectEnvId = -1;
  private currentProjectEnv: ProjectEnvironment | null = null;

  public currentProjectChanged = new EventEmitter<void>();
  public projectManagerServiceListChanged = new EventEmitter<void>();

  static readonly projectsFolder = "Projects";

  constructor(private compiler : CompilerService) {
    /* TODO: Multi Compiler */
    // Wait all the worker needed for the load!!

    let driver = this.compiler.get(ProjectLanguage.PY)
    driver.onWorkerReady.subscribe(() => {
      console.log("ProjectManagerService:CompilerService:onWorkerReady")
      this.load();
    });

    driver.onMountChanged.subscribe(() => {
      console.log("ProjectManagerService:mountChanged")
      let project = this.getCurrentProject()
      let id = this.getCurrentProjectId()
      project.load(driver)
      
      console.log("ProjectManagerService:mountChanged:id:", id, project, project.isLoaded)
      if(project.isLoaded){
        console.log("ProjectManagerService:setCurrent:mountChanged:loaded")
        this.currentProjectChanged.emit()
      }else{
        project.onLoaded.subscribe(() => {
          console.log("ProjectManagerService:createProject:onProjectReady:id:", id)
          this.currentProjectChanged.emit()
          project.isLoaded = true
        });
      }
    })
   }

  public getProjectsEnvironment() {
    return this.projectsEnvironment;
  }

  private createProject(projectLanguage: ProjectLanguage) : ProjectEnvironment {
    console.log("ProjectManagerService:createProject:")

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

    return projectEnvironment;
  }

  public async setCurrent(id: number) {
    console.log("ProjectManagerService:setCurrent:id:", id)
    
    if (this.getProjectsId().indexOf(id) < 0){
      console.log("ProjectManagerService:setCurrent:id:not_found")
      throw new Error("Project not found")
    }

    let projectEnvironment = this.projectsEnvironment.get(id)
    if (!projectEnvironment) {
      // The project is not loaded from the storage
      console.log("ProjectManagerService:setCurrent:loadFromStorage:id: ", id)
      projectEnvironment = await this.createProject(ProjectLanguage.PY)
      
      this.projectsEnvironment.set(id, projectEnvironment)// Replace the null value
    }
    console.log("ProjectManagerService:setCurrent:id:", id, projectEnvironment)

    let oldId = this.currentProjectEnvId;

    this.currentProjectEnv = projectEnvironment;
    this.currentProjectEnvId = id;
    console.log("ProjectManagerService:setCurrent:done:id:", id)

    // TODO: multidriver
    let driver = this.getCurrentDriver()  
    driver.onUnmountChanged.subscribe(() => {
      console.log("ProjectManagerService:setCurrent:mounting:id:", this.getCurrentProjectId())
      driver.mountByProjectId(this.getCurrentProjectId())
    })

    if(oldId != -1)// In this case will wait the didReceiveUnmount function to mount the new project
      driver.unmountByProjectId(oldId) 
    else
      driver.onUnmountChanged.emit()
  }

  public async runProject() {
    let id = this.getCurrentProjectId()
    let project = this.getCurrentProject()
    console.log("PythonCompilerService:runProject:id:", id)
    
    await this.installPackages(project.config.EXTRA_PACKAGES)
    let result = await this.getCurrentDriver().executeFile(project.config.RUN)
    console.log("PythonCompilerService:runProject:id:", id, "result:", result)
    return result
  }

  private async installPackages(packages: string[]) {
    this.getCurrentDriver().installPackages(packages)
  }

  public async stopExecution() {
    this.getCurrentDriver().stopExecution()
  }

  public addProject() {
    console.log("ProjectManagerService:addProject")

    let id = 0
    let ids = this.getProjectsId()
    console.log("ProjectManagerService:addProject:ids", ids)
    if(ids.length > 0)
      id = Math.max(...ids) + 1

    console.log("ProjectManagerService:addProject:id: ", id)
    this.projectsEnvironment.set(id, this.createProject(ProjectLanguage.PY));
    this.setCurrent(id);

    this.projectManagerServiceListChanged.emit();
    this.store();
  }

  private async load() {
    // Read from cache, to replace with the previous comment
    let content = localStorage.getItem('projectsCached');
    console.log("ProjectManagerService:load:", content)

    if (content == null){
      this.addProject();
      return
    }
      
    // Load the projects from the storage
    for (let storedId of JSON.parse(content) as number[])
      this.projectsEnvironment.set(storedId, null);
    /* IMPORTANT:
    The id is added to the map with null value but will be replaced
    with the rigth ProjectManagerService saved into the storage just
    if needed by getProjectManagerService(...)
    */

    this.setCurrent(Math.min(...this.getProjectsId()));
    this.projectManagerServiceListChanged.emit();
  }

  private store() {
    // Write the ids to add the new one
    let content = JSON.stringify(this.getProjectsId());
    console.log("ProjectManagerService:store:", content)
    
    // Write to cache, to replace with the previous comment
    localStorage.setItem('projectsCached', content);
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

  public getCurrentDriver() : ProjectDriver {
    return this.compiler.get(this.getCurrentProject().language)
  }
}
