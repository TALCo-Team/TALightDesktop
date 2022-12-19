import { Injectable } from '@angular/core';
import { PyodideFsDriver, PyodideFsRequest } from './pydiode-fsdriver';
import { FsService } from '../fs-service/fs.service';


@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {
  public driverName = 'pyodide';
  public requests = new Map<string,PyodideFsRequest>();
  
  public fs;
  public driver?:PyodideFsDriver;
  public worker: Worker = new Worker(new URL('../../workers/python-compiler.worker', import.meta.url));

  constructor( private _fs:FsService ) { 
    this.fs = _fs;
    this.driver = new PyodideFsDriver();
    this.fs.registerDriver(this.driverName, this.driver); 
  }

}

export enum PythonCompilerMessageInterfaceType {
  PackageInstall = 'PackageInstall',
  ExecuteCode = 'ExecuteCode',
  // ExecuteCodeResult = 'ExecuteCodeResult',
}

export interface PythonCompilerMessageInterface {
  type: PythonCompilerMessageInterfaceType;
  packages?: string[];
  code?: string;
}

