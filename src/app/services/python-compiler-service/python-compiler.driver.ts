import { EventEmitter } from '@angular/core';
import { CompilerDriver } from '../compiler-service/compiler-service-driver';

export class PyodideDriver extends CompilerDriver {
  constructor() {
    super(new Worker(new URL( 'python-compiler.worker', import.meta.url), {type:'module'}));
    this.driverName = 'pyodide'
  } 
}
  