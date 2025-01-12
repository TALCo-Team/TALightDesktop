import { EventEmitter, Injectable } from '@angular/core';
import { ProjectDriver, ProjectEnvironment, ProjectLanguage } from '../project-manager-service/project-manager.types';
import { ProjectManagerService } from '../project-manager-service/project-manager.service';
import { PyodideDriver } from '../python-compiler-service/python-compiler.driver';

@Injectable({
  providedIn: 'root'
})
export class CompilerService {
  // Map of Language -> CompilerDriver
  private drivers = new Map<ProjectLanguage, ProjectDriver>();

  constructor() {
    this.drivers.set(ProjectLanguage.PY, new PyodideDriver()); 
    //TODO add other drivers
  }

  public get(language: ProjectLanguage): ProjectDriver {
    let driver = this.drivers.get(language);
    if (!driver) {
      console.error("CompilerService:getDriver:driver_not_found:", language)
      throw new Error("Driver not found")
    }
    return driver;
  }
}
