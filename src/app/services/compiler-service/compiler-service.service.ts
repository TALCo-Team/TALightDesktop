import { Injectable } from '@angular/core';
import { ProjectConfig } from '../project-manager-service/project-manager.types';
import { ProjectManagerService } from '../project-manager-service/project-manager.service';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  constructor(private pms: ProjectManagerService) { }

  async readConfig() {
    let project = this.pms.getCurrentProject();

    if (!await project.driver.exists(ProjectConfig.defaultConfig.CONFIG_PATH)) {
      console.log("PythonCompilerService:readPythonConfig: config file doesn't exist!")
      return null;
    }

    let configContent = await project.driver.readFile(ProjectConfig.defaultConfig.CONFIG_PATH, false) as string;
    return JSON.parse(configContent) as ProjectConfig
  }

  async runProject() {
    console.log("PythonCompilerService:runProject")
    let config = await this.readConfig()
    if (!config) { return null; }

    let project = this.pms.getCurrentProject();
    await project.driver.installPackages(config.EXTRA_PACKAGES)
    let result = await project?.driver.executeFile(config!.RUN)
    console.log(result)
    return result
  }

  async installPackages(packages: string[]) {
    this.pms.getCurrentProject().driver.installPackages(packages)
  }

  async executeFile(fullpath: string) {
    console.log("PythonCompilerService:executeFile:", fullpath)
    this.pms.getCurrentProject().driver.executeFile(fullpath)
  }
}
