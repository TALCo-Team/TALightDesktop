import { Injectable } from '@angular/core';
import { ProjectConfig } from '../project-manager-service/project-manager.types';
import { ProjectManagerService } from '../project-manager-service/project-manager.service';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  constructor(private pms: ProjectManagerService) { }

  async runProject() {
    let project = this.pms.getCurrentProject();
    let id = this.pms.getCurrentProjectId();

    console.log("PythonCompilerService:runProject:id:", id, project)
    
    await project.driver.installPackages(project.config.EXTRA_PACKAGES)
    let result = await project?.driver.executeFile(project.config!.RUN)
    console.log("PythonCompilerService:runProject:id:", id, "result:", result)
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
