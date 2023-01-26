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
    
    if (!this.driver) {return false}

    if (await this.driver.exists(this.configPath)){
      console.log("createPythonProject: Skipping, config file already present")
      return true;
    }
  
    let configContent = JSON.stringify(new PythonConfig(), null, 4)
    await this.driver?.writeFile(this.configPath, configContent );
    let content = `print("asd") \ndata = 123 \nprint("data:", data)`;
    await this.driver?.createDirectory(this.projectFolder);
    await this.driver?.writeFile('/main.py', content);
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
    await this.driver?.installPackages(config.PACKAGES)
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
  DEBUG = ""
  DOWNLOAD_ATTACHMENT_AUTO = true
  DEFAULT_PROJECT="3SAT"
  PACKAGES: string[] = ["numpy"]
}

export interface PythonCompiler{
  installPackages(packages: string[]): Promise<string>;

  executeCode(code: string): Promise<string>;

  executeFile(fullpath: string): Promise<string>;
}





