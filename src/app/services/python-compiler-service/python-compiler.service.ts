import { Injectable } from '@angular/core';
import { PyodideDriver } from './pydiode-driver';
import { FsService } from '../fs-service/fs.service';
import { ProjectConfig } from '../project-manager-service/project-manager.types';


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
    console.log("createPythonProject")
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

    //TODO: load from external asset bundle
    let files: string[][] = []
    
    let mainContent = `print("Hello World!")`;
    let inputExample = `# Esempio che mostra come utilizzare la funzione di input in ambiente asincrono
nome = await input("Ciao, come ti chiami?")
print(f'Ciao {nome}, posso farti una domanda ?')    

async def main():
  while(True):
    lati = await input("quanti lati ha un triangolo?")
    if lati=="3": break;
    print(f'No, mi dispiace non ha {lati} lati')    
  print('Congratulazioni!')

main()`

    let freesumExample = `# Example: sum -> free sum
while True:
    line = await input()
    #print(f"# BOT: line={line}")
    if line[0] == '#':   # this is a commented line (sent by the service server)
        if '# WE HAVE FINISHED' == line:
            exit(0)   # exit upon termination of the service server
    else:
        n = int(line)
        print(f"{n} 0")`

    let sumExample = `# Example: sfilde: somma, sovle
cnt = int(input())
for i in range(cnt):
    line = input()
    #print("line:", line)
    nums = line.split(" ")
    a = int(nums[0])
    b = int(nums[1])
    print(a+b)`    
    
    if(writeConfig){ 
      let configContent = JSON.stringify(config, null, 4)
      files.unshift([config.CONFIG_PATH, configContent])
    }

    files.push([config.RUN, mainContent])
    

    let examples = [
      [config.DIR_EXAMPLES + 'input.py', inputExample],
      [config.DIR_EXAMPLES + 'freesum.py', freesumExample],
      [config.DIR_EXAMPLES + 'sum.py', sumExample],
    ]
    if(config.CREATE_EXAMPLES){ files = files.concat(examples) }

    
    
    
    for(let i=0; i < files.length; i++){
      let path = files[i][0]
      let content = files[i][1]
      console.log("createPythonProject:files:", path, content)
      if(await this.driver.exists(path)){
        console.log("createPythonProject:files:SKIP:", path)
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
      console.log("readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile(defaultConfig.CONFIG_PATH, false ) as string;
    let config = JSON.parse(configContent) as ProjectConfig
    return config
  }

  
  async runProject(){
    let config = await this.readPythonConfig()
    if (!config){return null;}
    await this.driver?.installPackages(config.PIP_PACKAGES)
    let result = await this.driver?.executeFile(config!.RUN)
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


export enum PyodideState {
  Unknown = 'Unknown',
  Loading = 'Loading',
  Ready = 'Ready',
  Run = 'Run',
  Stdin = 'Stdin',
  Success = 'Success',
  Error = 'Error',
}


export interface PythonCompiler{
  installPackages(packages: string[]): Promise<string>;
  executeCode(code: string): Promise<string>;
  executeFile(fullpath: string): Promise<string>;
  stopExecution(signal?: number): Promise<boolean>;
  subscribeNotify(enable?:boolean, onNotify?:(title:string, msg:string, kind:string)=>void ): Promise<boolean>;
  subscribeState(enable?:boolean, onState?:(state:PyodideState, content?:string)=>void ): Promise<boolean>;
  subscribeStdout(enable?:boolean, onStdout?:(data:string)=>void): Promise<boolean>;
  subscribeStderr(enable?:boolean, onStderr?:(data:string)=>void): Promise<boolean>;
  sendStdin(msg:string): Promise<boolean> ;
}

