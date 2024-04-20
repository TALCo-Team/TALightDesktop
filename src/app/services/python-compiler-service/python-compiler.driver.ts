import { CompilerDriver } from '../compiler-service/compiler-service-driver';
import { CompilerState } from '../compiler-service/compiler-service.types';


export class PyodideDriver extends CompilerDriver {
  
  constructor(mountPoint:string, mountRoot:string) {
    console.log("PyodideDriver:constructor:setRoot: ", mountRoot)
    console.log("PyodideDriver:constructor:setMount: ", mountPoint);
    
    let worker = new Worker( new URL( 'python-compiler.worker', import.meta.url), {type:'module'});
    super(mountPoint, mountRoot, worker);
    this.driverName = 'pyodide'
  }
  
}
  