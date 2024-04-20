import { Injectable } from '@angular/core';
import { ProjectManagerService } from '../project-manager-service/project-manager.service';
import { ProjectConfig, ProjectEnvironment } from '../project-manager-service/project-manager.types';
import { CompilerDriver } from './compiler-service.types';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {

  public drivers = new Map<string,CompilerDriver>();
  public project: ProjectEnvironment | null = null;

  constructor( private prj:ProjectManagerService ) {
    this.prj.onProjectChanged.subscribe( (project)=>{this.didProjectChanged(project)} )  
  }

  public didProjectChanged(project:ProjectEnvironment){
    console.log("FileExplorerWidgetComponent:didProjectChanged")
    this.project = project;
  }

  //TODO: look like dead code, check if it is used
  registerDriver(name:string, driver: CompilerDriver):boolean{
    //if (name in this.drivers){return false;}
    //alert('register: '+driver)
    this.drivers.set(name, driver);
    //alert('register: '+driver.constructor.name+' | all: '+this.getDriverNames())
    return true;
  }
  
  //TODO: look like dead code, check if it is used
  getDriver(name:string): CompilerDriver | undefined{
    //alert(name + ' '  + this.getDriverNames() )
    if ( this.drivers.has(name) ){return this.drivers.get(name);}
    alert(name + ' NOT found in: '  + this.getDriverNames() + " | getDriver: undefined !!!" )
    return undefined
    
  }
  //TODO: look like dead code, check if it is used (is used just from getDriver(..))
  getDriverNames(){
    return Array.from(this.drivers.keys());
  }

  async readConfig(){
    if (!this.project?.driver) {return null}

    if (!await this.project?.driver.exists(ProjectConfig.defaultConfig.CONFIG_PATH)){
      console.log("PythonCompilerService:readPythonConfig: config file doesn't exist!")
      return null;
    }
    
    let configContent = await this.project?.driver.readFile(ProjectConfig.defaultConfig.CONFIG_PATH, false ) as string;
    return JSON.parse(configContent) as ProjectConfig
  }

  async runProject(){
    console.log("PythonCompilerService:runProject")
    let config = await this.readConfig()
    if (!config){return null;}
    await this.project?.driver.installPackages(config.EXTRA_PACKAGES)
    let result = await this.project?.driver.executeFile(config!.RUN)
    console.log(result)
    return result    
  }

  async installPackages(packages:string[]){
    this.project?.driver.installPackages(packages)
  }

  async executeFile(fullpath:string){
    console.log("PythonCompilerService:executeFile:",fullpath)
    this.project?.driver.executeFile(fullpath)
  }
}
