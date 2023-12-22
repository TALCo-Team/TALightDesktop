import { EventEmitter, Injectable, Input } from '@angular/core';
import { CompilerDriver } from "../compiler-service/compiler-service.types";
import { FsNodeFile, FsNodeFolder, FsNodeList, FsServiceDriver } from "../fs-service/fs.service.types"

export enum ProjectLanguage{
  PY='PY',
  C='C',
  CPP='CPP',
}

export class ProjectList extends Array<ProjectEnvironment>{};
export interface ProjectDriver extends FsServiceDriver, CompilerDriver{};



export abstract class ProjectEnvironment{
  
  public config: ProjectConfig | null  = null;
  public onProjectConfigChanged = new EventEmitter<void>();
    
  constructor(
    public laguange: ProjectLanguage,
    public driver: ProjectDriver
  ){
    console.log("ProjectEnvironment:constructor")
  }
  
  abstract loadProject(): Promise<boolean>;
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

  /*static async load(fs:FsServiceDriver, path?:string){
    console.log("ProjectConfig:load")
    if(!path){ path = ProjectConfig.defaultConfig.CONFIG_PATH }
    let config: ProjectConfig;
    if (!await fs.exists(path)){ return null }
    
    let configContent = await fs.readFile(path, false) as string;
    //(configContent);
    console.log("ProjectConfig:load:found:",configContent)
    
    try{
      config = JSON.parse(configContent) as ProjectConfig
    }catch{
      console.log("ProjectConfig:load:cofig:JSON:parse: failed")
      return null;
    }
    
    console.log("ProjectConfig:load:config:",config)
    return config
  }*/

  static async load (fs:FsServiceDriver, path?: string) {
    console.log("ProjectConfig:load");
    if (!path) {
      path = ProjectConfig.defaultConfig.CONFIG_PATH
    }
    let config: ProjectConfig;
    if (await fs.exists(path)) {
      return null
    }

    let configContent = await fs.readFile(path, false) as string;
    console.log("ProjectConfig:load:found.", configContent)

    try {
      config = JSON.parse(configContent) as ProjectConfig
      Object.setPrototypeOf(config, ProjectConfig.prototype)
    } catch {
      console.log("ProjectConfig:load:config:JSON:parse: failed")
      return null
    }

    console.log("ProjectConfig:load:config.", config)
    return config
  }

  async save(fs:FsServiceDriver){
    //alert('comincio il salvataggio');
    console.log('comincio il salvataggio');
    let content = JSON.stringify(this, null, 4)
    let res = await fs.writeFile(this.CONFIG_PATH, content);
    return true
  }
}


