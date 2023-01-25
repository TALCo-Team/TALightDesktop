import { Injectable } from '@angular/core';
import { PyodideDriver, PyodideRequest } from './pydiode-driver';
import { FsService } from '../fs-service/fs.service';
import { ApiService } from '../api-service/api.service';
import { Commands } from '../api-service/api.commands';
import { ProblemWidgetComponent } from 'src/app/widgets/code-editor/problem-widget/problem-widget.component';



@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public driverName = 'pyodide';
  public configFile = ".config.json"
  
  public fs;
  public driver?: PyodideDriver;
  public worker: Worker = new Worker(new URL('../../workers/python-compiler.worker', import.meta.url));
  public cmdConnect?:Commands.Connect;
  public problemWidget?:ProblemWidgetComponent;

  constructor( private _fs:FsService) { 
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
    let content = `print("asd") \ndata = 123 \nprint("data:", data)`;
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

    if (!await this.driver.exists("/"+this.configFile)){
      console.log("readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile('/'+this.configFile, false ) as string;
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

  //-------------- TEST CONNECT
  async onApiError(message: string){
    alert("Error: "+message)
  }

  public onStdout(data:string){
    this.problemWidget!.print(data);
    this.cmdConnect!.sendBinary(data + "\n"); //lo \n va aggiunto all'output del bot python
  }

  async apiConnect() {
    let api = new ApiService();
    let problem_name = "sum_testAPI";
    let service = "free_sum";

    let onConnectionBegin = (onConnectionBegin: string[]) => {console.log("Connection Begin -> " + onConnectionBegin); };
    let onConnectionStart = () => {console.log("Connection Start")};
    let onConnectionClose = (onConnectionClose: string[]) => {console.log(onConnectionClose)};
    
    let onData = (data: string)=>{
      console.log("Binary data: "+data);
      this.problemWidget!.print(data);
    };

    let req = api.Connect(problem_name, service, undefined, undefined, undefined, undefined, onConnectionBegin, onConnectionStart, onConnectionClose, onData);
    req.onError = this.onApiError;

    return req;
  }

  async testConnectAPI(problemWidget:ProblemWidgetComponent){
    this.problemWidget = problemWidget;
    this.driver?.subscribeStdout(true,(msg)=>{this.onStdout(msg)})

    this.cmdConnect = await this.apiConnect();

    let config = await this.readPythonConfig()
    if (!config){return null;}
    await this.driver?.installPackages(config.PACKAGES)
    let stdout = await this.driver?.executeFile(config!.MAIN)
    
    console.log(stdout)
    return stdout      
  }

  //--------------

}

class PythonConfig {
  MAIN = "free_sum_mysimplebot.py"
  DEBUG = ""
  DOWNLOAD_ATTACHMENT_AUTO = true
  DEFAULT_PROJECT="3SAT"
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





