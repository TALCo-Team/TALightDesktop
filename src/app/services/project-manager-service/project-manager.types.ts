import { CompilerDriver } from "../compiler-service/compiler-service.types";
import { FsNodeFile, FsNodeFolder, FsNodeList, FsServiceDriver as FsDriver, FsServiceDriver } from "../fs-service/fs.service.types"

export enum ProjectLang{
  PY='PY',
  C='C',
  CPP='CPP',
}

export class ProjectList extends Array<ProjectEnvironment>{};
export interface ProjectDriver extends FsServiceDriver, CompilerDriver{};


export class ProjectEnvironment{

  public config?: ProjectConfig;
  public isLoaded = false;
  
  //FS
  public fs?: FsDriver;
  public fsroot?:FsNodeFolder;
  public fslist?:FsNodeList;
  public fslistfiles?:Array<FsNodeFile>;

  //Compiler
  public compiler?: ProjectDriver;
  
  async load(){
    if(!this.fs){return false}
    let config = await ProjectConfig.load(this.fs)
    if(config){return false;}
    //load more
    return true;
  }

  public activate(){
    //subscribe
  }

  public deactivate(){
    //unsubscribe
  }
}


export class ProjectConfig {
  RUN = "/main.py"
  DEBUG = false //TODO
  PROJECT_NAME="My solution" //TODO
  PREFERED_LANG="it"
  
  TAL_SERVERS = [ //TODO
    'wss://ta.di.univr.it/algo',
    "wss://ta.di.univr.it/sfide",
    "ws://localhost:8008/",
  ]
  TAL_SERVER = "wss://ta.di.univr.it/algo" //TODO
  TAL_PROBLEM = "" //TODO
  TAL_SERVICE = "" //TODO
  TAL_TOKEN = "" //TODO

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
  CONFIG_PATH = this.DIR_PROJECT + this.CONFIG_NAME

  EXTRA_PACKAGES: string[] = []

  public static readonly defaultConfig = new ProjectConfig()

  static async load(fs:FsDriver, path?:string){
    if(!path){ path = ProjectConfig.defaultConfig.CONFIG_PATH }
    if (!await fs.exists(path)){
      console.log("ProjectConfig:LoadConfig: Config file doesn't exisit!")
      return null;
    }
    
    let configContent = await fs.readFile(path, false ) as string;
    let config = JSON.parse(configContent) as ProjectConfig
    return config
  }

  async save(fs:FsDriver){
    let content = JSON.stringify(this, null, 4)
    let res = await fs.writeFile(this.CONFIG_PATH, content); 
    return true
  }
}


