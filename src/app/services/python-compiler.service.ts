import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PythonCompilerService {

  public worker: Worker = new Worker(new URL('../workers/python-compiler.worker', import.meta.url));
  constructor() { 
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