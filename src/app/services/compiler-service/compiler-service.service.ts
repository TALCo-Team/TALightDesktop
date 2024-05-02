import { Injectable } from '@angular/core';
import { ProjectsManagerService } from '../project-manager-service/projects-manager.service';
import { ProjectConfig } from '../project-manager-service/project-manager.types';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  constructor( private projectsManagerService:ProjectsManagerService ) {}

  async readConfig(){
    let project = this.projectsManagerService.getCurrentProject();

    if (!project?.driver)
      return null

    if (!await project.driver.exists(ProjectConfig.defaultConfig.CONFIG_PATH)){
      console.log("PythonCompilerService:readPythonConfig: config file doesn't exist!")
      return null;
    }
    
    let configContent = await project?.driver.readFile(ProjectConfig.defaultConfig.CONFIG_PATH, false) as string;
    return JSON.parse(configContent) as ProjectConfig
  }

  async runProject(){
    console.log("PythonCompilerService:runProject")
    let config = await this.readConfig()
    if (!config){return null;}

    let project = this.projectsManagerService.getCurrentProject();
    await project?.driver.installPackages(config.EXTRA_PACKAGES)
    let result = await project?.driver.executeFile(config!.RUN)
    console.log(result)
    return result    
  }

  async installPackages(packages:string[]){
    this.projectsManagerService.getCurrentProject()?.driver.installPackages(packages)
  }

  async executeFile(fullpath:string){
    console.log("PythonCompilerService:executeFile:",fullpath)
    this.projectsManagerService.getCurrentProject()?.driver.executeFile(fullpath)
  }
}
