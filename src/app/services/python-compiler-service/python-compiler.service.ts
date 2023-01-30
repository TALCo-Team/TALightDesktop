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
    


    let configContent = JSON.stringify(new ProjectConfig(), null, 4)
    
    
    
    console.log("createPythonProject:project:",this.projectFolder)
    await this.driver?.createDirectory(this.projectFolder);
    console.log("createPythonProject:config:",this.configPath, configContent)
    await this.driver?.writeFile(this.configPath, configContent );
    let mainContent = `print("Hello World!")`;

    console.log("createPythonProject:content:", mainContent)
    await this.driver?.writeFile('/main.py', mainContent);
    console.log("createPythonProject:data:")
    await this.driver?.createDirectory('/data/');
    await this.driver?.createDirectory('/examples/');

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
await this.driver?.writeFile('/examples/input.py', inputExample);

    let sumExample = `# Example: sum -> free sum
while True:
    line = input()
    #print(f"# BOT: line={line}")
    if line[0] == '#':   # this is a commented line (sent by the service server)
        if '# WE HAVE FINISHED' == line:
            exit(0)   # exit upon termination of the service server
    else:
        n = int(line)
        print(f"{n} 0")
`

    await this.driver?.writeFile('/examples/sum.py', sumExample);
    return true
  }

  async readPythonConfig(){
    if (!this.driver) {return null}

    if (!await this.driver.exists(this.configPath)){
      console.log("readPythonConfig: config file doesn't exisit!")
      return null;
    }
    
    let configContent = await this.driver?.readFile(this.configPath, false ) as string;
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

  DIR_PROJECT = '/.talight/'
  DIR_ATTACHMENTS = '/data/'
  DIR_RESULTS = '/results/'
  DIR_ARGSFILE = '/files/'
  DIR_EXAMPLES = '/examples/'


  CONFIG_NAME = 'taglight.json'
  PATH_CONFIG = this.DIR_PROJECT + this.CONFIG_NAME

  PIP_PACKAGES: string[] = ["numpy"]
}


export interface PythonCompiler{
  installPackages(packages: string[]): Promise<string>;

  executeCode(code: string): Promise<string>;

  executeFile(fullpath: string): Promise<string>;
}





