import { EventEmitter, Injectable, Input } from '@angular/core';
import { CompilerDriver } from "../compiler-service/compiler-service.types";
import { FsNodeFile, FsNodeFolder, FsNodeList, FsServiceDriver } from "../fs-service/fs.service.types"

export enum ProjectLanguage{
  PY='PY',
  C='C',
  CPP='CPP',
}

export interface ProjectDriver extends FsServiceDriver, CompilerDriver{
  mountByProjectId(projectId: number): Promise<boolean>;
  onMountChanged : EventEmitter<any>;
};

export abstract class ProjectEnvironment{

  public config: ProjectConfig | null  = null;
  public onProjectConfigChanged = new EventEmitter<void>();

  constructor(
    public laguange: ProjectLanguage,
    public driver: ProjectDriver,
  ){
    console.log("ProjectEnvironment:constructor")
  }

  abstract loadProject(): Promise<boolean>;
}


export class ProjectConfig {
  RUN = "/main.py"
  DEBUG = false //TODO
  PROJECT_NAME="Project"
  PREFERED_LANG="it"

  TAL_SERVERS = [ //TODO
    'wss://ta.di.univr.it/algo',
    "wss://ta.di.univr.it/sfide",
    "wss://localhost:8008/",
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
  HOTKEY_RUN = {"Control": false, "Alt" : false, "Shift": false, "Key": 'F8'}
  HOTKEY_TEST = {"Control": false, "Alt" : false, "Shift": false, "Key": 'F9'}
  HOTKEY_SAVE = {"Control": true, "Alt" : false, "Shift": false, "Key": 's'}
  HOTKEY_EXPORT = {"Control": true, "Alt" : false, "Shift": false, "Key": 'e'}

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
    
    if (!await fs.exists(path)) {
      return null
    }

    let configContent = await fs.readFile(path, false) as string;
    console.log("ProjectConfig:load:found.", configContent)

    let config: ProjectConfig;
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
    console.log('ProjectConfig:save');
    let content = JSON.stringify(this, null, 4)
    let res = await fs.writeFile(this.CONFIG_PATH, content);
    return true
  }

  parseFile (obj: any): string {
    for (var key in obj) {
      console.log("ProjectConfig:parseFile:key: " + key + ", value: " + obj[key])
      if (key == "TAL_SERVER") {
        return obj[key];
      }
      if (obj[key] instanceof Object) {
        this.parseFile(obj[key]);
      }
    }
    return "";
  }

  public isDefaultProjectName(){
    return this.PROJECT_NAME == ProjectConfig.defaultConfig.PROJECT_NAME
  }
}


