import { Injectable } from '@angular/core';
import { PyodideDriver, PyodideRequest } from './pydiode-driver';
import { FsService } from '../fs-service/fs.service';


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

main()
`

    let sumExample = `# Example: sum -> free sum
while True:
    line = await input()
    #print(f"# BOT: line={line}")
    if line[0] == '#':   # this is a commented line (sent by the service server)
        if '# WE HAVE FINISHED' == line:
            exit(0)   # exit upon termination of the service server
    else:
        n = int(line)
        print(f"{n} 0")
` 
    
    if(writeConfig){ 
      let configContent = JSON.stringify(config, null, 4)
      files.unshift([config.PATH_CONFIG, configContent])
    }

    files.push([config.RUN, mainContent])
    

    let examples = [
      [config.DIR_EXAMPLES + 'input.py', inputExample],
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
    if (!await this.driver.exists(defaultConfig.PATH_CONFIG)){
      console.log("readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile(defaultConfig.PATH_CONFIG, false ) as string;
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

class ProjectConfig {
  RUN = "/main.py"
  DEBUG = false //TODO
  PROJECT_NAME="My solution" //TODO
  PREFERED_LANG="it"
  
  TAL_SERVERS = [ //TODO
    "ws://localhost:8008/",
    "wss://ta.di.univr.it/sfide",
    "wss://ta.di.univr.it/rtel",
  ]
  TAL_SERVER = "" //TODO
  TAL_PROBLEM = "" //TODO
  TAL_SERVICE = "" //TODO

  DIR_PROJECT = '/.talight/'
  DIR_ATTACHMENTS = '/data/'
  DIR_RESULTS = '/results/' //TODO
  DIR_ARGSFILE = '/files/' //TODO
  DIR_EXAMPLES = '/examples/'
  CREATE_EXAMPLES = true

  //TODO: hotkey manager service
  HOTKEY_RUN = "f8"
  HOTKEY_TEST = "f9"
  HOTKEY_SAVE = "ctrl+s"

  CONFIG_NAME = 'talight.json'
  PATH_CONFIG = this.DIR_PROJECT + this.CONFIG_NAME

  PIP_PACKAGES: string[] = []
}


export interface PythonCompiler{
  installPackages(packages: string[]): Promise<string>;

  executeCode(code: string): Promise<string>;

  executeFile(fullpath: string): Promise<string>;
}





