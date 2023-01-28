import { Injectable } from '@angular/core';
import { PyodideDriver, PyodideRequest } from './pydiode-driver';
import { FsService } from '../fs-service/fs.service';
import { ApiService } from '../api-service/api.service';
import { Commands } from '../api-service/api.commands';




@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public driverName = 'pyodide';
  public projectFolder = "/.talight/"
  public configName = "talight.json"
  public configPath = this.projectFolder + this.configName
  
  public driver?: PyodideDriver;
  public worker: Worker = new Worker(new URL('../../workers/python-compiler.worker', import.meta.url));
  
  

  constructor( private fs:FsService) { 
    this.driver = new PyodideDriver();
    this.fs.registerDriver(this.driverName, this.driver); 
  }

  async createPythonProject(){
    console.log("createPythonProject")
    if (!this.driver) {return false}

    if (await this.driver.exists(this.configPath)){
      console.log("createPythonProject:skipping")
      return true;
    }
    


    let configContent = JSON.stringify(new PythonConfig(), null, 4)
    
    
    
    console.log("createPythonProject:project:",this.projectFolder)
    await this.driver?.createDirectory(this.projectFolder);
    console.log("createPythonProject:config:",this.configPath, configContent)
    await this.driver?.writeFile(this.configPath, configContent );
    let content = `print("asd") \ndata = 123 \nprint("data:", data)`;

    console.log("createPythonProject:content:",content)
    await this.driver?.writeFile('/main.py', content);
    console.log("createPythonProject:data:")
    await this.driver?.createDirectory('/data/');

    let bot = `import time
def sleep(seconds):
    start = now = time.time()
    while now - start < seconds:
        now = time.time()

sleep(2)
print("100 0")`

    await this.driver?.writeFile('/free_sum_mysimplebot.py', bot);
    return true
  }

  async readPythonConfig(){
    if (!this.driver) {return null}

    if (!await this.driver.exists(this.configPath)){
      console.log("readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile(this.configPath, false ) as string;
    let config = JSON.parse(configContent) as PythonConfig
    return config
  }

  
  async runProject(){
    let config = await this.readPythonConfig()
    if (!config){return null;}
    await this.driver?.installPackages(config.PIP_PACKAGES)
    let result = await this.driver?.executeFile(config!.MAIN)
    console.log(result)
    return result    
  }

  async installPackages(packages:string[]){
    this.driver?.installPackages(packages)
  }

  async executeFile(fullpath:string){
    this.driver?.executeFile(fullpath)
  }


}

class PythonConfig {
  MAIN = "main.py"
  DEBUG = false
  DOWNLOAD_ATTACHMENT_AUTO = true
  PROJECT_NAME="My 3SAT"

  TAL_SERVERS = [
    "ws://localhost:8008/", 
    "wss://ta.di.univr.it/sfide",
    "wss://ta.di.univr.it/rtel",
  ]
  TAL_SERVER = ""
  TAL_PROBLEM = ""
  TAL_SERVICE = ""
  
  PIP_PACKAGES: string[] = ["numpy"]

  DIR_PROJECT = '/.talight/'
  DIR_ATTACHMENTS = '/data/'
  DIR_RESULTS = '/results/'
  DIR_ARGSFILE = '/files/'


  CONFIG_NAME = 'taglight.json'
  PATH_CONFIG = this.DIR_PROJECT + this.CONFIG_NAME
}


export interface PythonCompiler{
  installPackages(packages: string[]): Promise<string>;

  executeCode(code: string): Promise<string>;

  executeFile(fullpath: string): Promise<string>;
}





