import { EventEmitter } from '@angular/core';
import { CompilerDriver } from "../compiler-service/compiler-service.types";
import { FsNodeFile, FsServiceDriver } from "../fs-service/fs.service.types"

export enum ProjectLanguage {
  PY = 'PY',
  C = 'C',
  CPP = 'CPP',
}

export interface ProjectDriver extends FsServiceDriver, CompilerDriver {
  onWorkerReady: EventEmitter<void>;//First Event
  isWorkerReady: boolean;

  eventsSubscribed: boolean

  root: string;
  mountPoint: string;

  onMountChanged: EventEmitter<void>;
  onUnmountChanged: EventEmitter<void>;

  mountRoot(): Promise<boolean>;

  mountByProjectId(projectId: number): Promise<boolean>;

  unmountByProjectId(projectId: number): Promise<boolean>;

};

export abstract class ProjectEnvironment {
  public language: ProjectLanguage
  public config: ProjectConfig = ProjectConfig.defaultConfig;

  public onProjectConfigChanged = new EventEmitter<void>();
  public onLoaded = new EventEmitter<void>();
  public isLoaded = false;

  public files: FsNodeFile[] = [];

  constructor(language : ProjectLanguage){
    this.language = language;
  }

  public async load(driver : ProjectDriver): Promise<boolean> {
    console.log("ProjectEnvironment:mounted")
    console.log("ProjectEnvironment:load")

    //wait until the config is loaded
    if (!await this.loadConfig(driver)){
      console.log("ProjectEnvironment:load:config:not_found")
      this.config.CREATE_EXAMPLES = true
    }

    await console.log("ProjectEnvironment:load:config:done:", this.config)

    let res = true;
    if (this.config.CREATE_EXAMPLES) {
      console.log("ProjectEnvironment:createExample")
      res = await this.createExample(driver)
    }
    else
      console.log("ProjectEnvironment:loadProject")

    this.config.CREATE_EXAMPLES = false
    this.saveConfig(driver)

    console.log("ProjectEnvironment:load:done")
    this.onLoaded.emit()

    return res;
  }

  protected abstract createExample(driver : ProjectDriver): Promise<boolean>;

  async saveConfig(driver : ProjectDriver): Promise<boolean> {
    console.log("ProjectEnvironment:saveConfig:")

    //TODO search were was: compilerService.getDriver(this.laguange).installPackages(this.config.EXTRA_PACKAGES)

    let res = await this.config.save(driver)
    if (res == true)
      console.log("ProjectEnvironment:saveConfig: done")
    else
      console.log("ProjectEnvironment:saveConfig: failed")

    this.onProjectConfigChanged.emit();

    return res
  }

  async loadConfig(driver : ProjectDriver): Promise<boolean> {
    console.log("ProjectConfig:load");
    let path = ProjectConfig.defaultConfig.CONFIG_PATH

    console.log("ProjectConfig:load:path:", path)
    if (!await driver.exists(path))
      return false

    let configContent = await driver.readFile(path, false) as string;
    console.log("ProjectConfig:load:found.", configContent)

    let config = null
    try {
      config = JSON.parse(configContent) as ProjectConfig
      Object.setPrototypeOf(config, ProjectConfig.prototype)
    } catch {
      console.log("ProjectConfig:load:config:JSON:parse: failed")
      return false
    }

    this.config = config
    console.log("ProjectConfig:load:config.", this.config)

    return true
  }
}


export class ProjectConfig {
  RUN = "/main.py"
  DEBUG = false //TODO
  PROJECT_NAME = "Project"
  PREFERED_LANG = "it"

  TAL_SERVERS = [ //TODO
    'wss://ta.di.univr.it/algo',
    "wss://ta.di.univr.it/sfide",
    "wss://localhost:8008/",
  ]
  TAL_SERVER = "" //TODO
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
  HOTKEY_RUN = { "Control": false, "Alt": false, "Shift": false, "Key": 'F8' }
  HOTKEY_TEST = { "Control": false, "Alt": false, "Shift": false, "Key": 'F9' }
  HOTKEY_SAVE = { "Control": true, "Alt": false, "Shift": false, "Key": 's' }
  HOTKEY_EXPORT = { "Control": true, "Alt": false, "Shift": false, "Key": 'e' }

  CONFIG_NAME = 'talight.json'
  CONFIG_PATH = this.DIR_PROJECT + this.CONFIG_NAME

  EXTRA_PACKAGES: string[] = []

  public static readonly defaultConfig = new ProjectConfig()

  async save(fs: FsServiceDriver) {
    console.log('ProjectConfig:save');
    let content = JSON.stringify(this, null, 4)
    let res = await fs.writeFile(this.CONFIG_PATH, content);
    return true
  }

  public isDefaultProjectName() {
    return this.PROJECT_NAME == ProjectConfig.defaultConfig.PROJECT_NAME
  }
}


