import { Injectable } from '@angular/core';
import { PyodideDriver, PyodideRequest } from './pydiode-driver';
import { FsService } from '../fs-service/fs.service';


@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public driverName = 'pyodide';
  public configFile = ".config.json"
  
  public fs;
  public driver?: PyodideDriver;
  public worker: Worker = new Worker(new URL('../../workers/python-compiler.worker', import.meta.url));

  constructor( private _fs:FsService ) { 
    this.fs = _fs;
    this.driver = new PyodideDriver();
    this.fs.registerDriver(this.driverName, this.driver); 
  }

  async createPythonProject(){
    
    if (!this.driver) {return false}

    if (await this.driver.exists("/"+this.configFile)){
      console.log("createPythonProject: Skipping, config file already present")
      return true;
    }
  
    let configContent = JSON.stringify(new PythonConfig(), null, 4)
    await this.driver?.writeFile('/'+this.configFile, configContent );
    let content = `
    print("sad")
    data = input("Please enter the message:\\n")
    print("data:", data)
    `
    await this.driver?.writeFile('/main.py', content);
    return true
  }

  async readPythonConfig(){
    if (!this.driver) {return null}

    if (!await this.driver.exists("/"+this.configFile)){
      console.log("readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile('/'+this.configFile );
    let config = JSON.parse(configContent) as PythonConfig
    return config
  }

  async runProject(){
    let config = await this.readPythonConfig()
    if (!config){return null;}
    await this.driver?.installPackages(config.PACKAGES)
    let stdout = await this.driver?.executeFile(config!.MAIN)
    console.log(stdout)
    return stdout    
  }

  async installPackages(packages:string[]){
    let msg = {
      type: PythonCompilerMessageInterfaceType.InstallPackages,
      packages: packages,
    } as PythonCompilerMessageInterface;
    this.worker.postMessage(msg)
  }

  async executeFile(fullpath:string){
    let msg = {
      type: PythonCompilerMessageInterfaceType.ExecuteFile,
      path: fullpath,
    } as PythonCompilerMessageInterface;
    this.worker.postMessage(msg)
  }

}

class PythonConfig {
  MAIN = "main.py"
  DEBUG = ""
  PACKAGES: string[] = ["numpy"]
}


export enum PythonCompilerMessageInterfaceType {
  InstallPackages = 'InstallPackages',
  ExecuteFile = 'ExecuteFile',
  ExecuteCode = 'ExecuteCode',
  // ExecuteCodeResult = 'ExecuteCodeResult',
}

export interface PythonCompilerMessageInterface {
  type: PythonCompilerMessageInterfaceType;
  packages?: string[];
  path?: string;
  code?: string;
}


export interface PythonCompiler{
  installPackages(packages: string[]): Promise<string>;

  executeCode(code: string): Promise<string>;

  executeFile(fullpath: string): Promise<string>;
}