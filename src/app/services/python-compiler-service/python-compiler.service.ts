import { Injectable } from '@angular/core';
import { PyodideDriver } from './python-compiler.driver';
import { FsService } from '../fs-service/fs.service';
import { ProjectConfig } from '../project-manager-service/project-manager.types';
import { PyodideProjectEnvironment } from './python-compiler.types';


@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public projectFolder = ProjectConfig.defaultConfig.DIR_PROJECT
  public configName = ProjectConfig.defaultConfig.CONFIG_NAME
  public configPath = ProjectConfig.defaultConfig.CONFIG_PATH
  
  public driver: PyodideDriver;
  public ppe: PyodideProjectEnvironment;
  

  constructor( private fs:FsService ) { 
    this.ppe = this.createPythonProject()
    this.driver = this.ppe.driver;
    this.fs.registerDriver(this.ppe.driver.driverName, this.ppe.driver); 
  }

  createPythonProject(){
    console.log("PythonCompilerService:createPythonProject")
    let pyodideRoot = "/"
    let pyodideMount = "/mnt"
    let ppe = new PyodideProjectEnvironment(pyodideRoot, pyodideMount);
    return ppe;
  }

  async readPythonConfig(){
    if (!this.driver) {return null}

    let defaultConfig = new ProjectConfig()
    if (!await this.driver.exists(defaultConfig.CONFIG_PATH)){
      console.log("PythonCompilerService:readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile(defaultConfig.CONFIG_PATH, false ) as string;
    let config = JSON.parse(configContent) as ProjectConfig
    return config
  }

  
  async runProject(){
    console.log("PythonCompilerService:runProject")
    let config = await this.readPythonConfig()
    if (!config){return null;}
    await this.driver?.installPackages(config.EXTRA_PACKAGES)
    let result = await this.driver?.executeFile(config!.RUN)
    console.log(result)
    return result    
  }

  async installPackages(packages:string[]){
    this.driver?.installPackages(packages)
  }

  async executeFile(fullpath:string){
    console.log("PythonCompilerService:executeFile:",fullpath)
    this.driver?.executeFile(fullpath)
  }

}


