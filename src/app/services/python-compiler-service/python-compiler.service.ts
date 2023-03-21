import { Injectable } from '@angular/core';
import { PyodideDriver } from './python-compiler.driver';
import { FsService } from '../fs-service/fs.service';
import { ProjectConfig } from '../project-manager-service/project-manager.types';
import { PyodideExamples } from './python-compiler.examples';


@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public driverName = 'pyodide';
  public projectFolder = ProjectConfig.defaultConfig.DIR_PROJECT
  public configName = ProjectConfig.defaultConfig.CONFIG_NAME
  public configPath = ProjectConfig.defaultConfig.CONFIG_PATH
  
  public driver?: PyodideDriver;
  

  constructor( private fs:FsService) { 
    this.driver = new PyodideDriver();
    this.fs.registerDriver(this.driverName, this.driver); 
  }

  async createPythonProject(){
    console.log("PythonCompilerService:createPythonProject")
    if (!this.driver) {return false}

    let writeConfig = false
    let config = await this.readPythonConfig();
    if (!config){
      config = new ProjectConfig()
      writeConfig = true
    }
    
    
    //Starter files
    let folders = [
      config.DIR_PROJECT,
      config.DIR_ATTACHMENTS,
    ]
    if(config.CREATE_EXAMPLES){ folders.push(config.DIR_EXAMPLES)}
    
    for(let i = 0; i < folders.length; i++){
      console.log("createPythonProject:createDirectory:",folders[i])
      await this.driver?.createDirectory(folders[i]);
    }
    
    let files: string[][] = []
    
     
    
    if(writeConfig){ 
      let configContent = JSON.stringify(config, null, 4)
      files.unshift([config.CONFIG_PATH, configContent])
    }
    let mainContent = `print("Hello World!")`;
    files.push([config.RUN, mainContent])
    

    if(config.CREATE_EXAMPLES){
      PyodideExamples.forEach((content:string, filename:string)=>{
        files.push([config!.DIR_EXAMPLES + filename, content])
      })
    }    
    
    for(let i=0; i < files.length; i++){
      let path = files[i][0]
      let content = files[i][1]
      console.log("PythonCompilerService:createPythonProject:files:", path, content)
      if(await this.driver.exists(path)){
        console.log("PythonCompilerService:createPythonProject:files:SKIP:", path)
        continue;
      }
      await this.driver?.writeFile(path, content);  
    }

    return true
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


