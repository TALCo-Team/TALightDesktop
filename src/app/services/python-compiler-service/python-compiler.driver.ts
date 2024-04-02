import { CompilerDriver } from '../compiler-service/compiler-service-driver';
import { CompilerState } from '../compiler-service/compiler-service.types';


export class PyodideDriver extends CompilerDriver {
  

  constructor(mountPoint:string, mountRoot:string) {
    let worker = new Worker( new URL( 'python-compiler.worker', import.meta.url), {type:'module'});
    super(mountPoint, mountRoot, worker);
    this.driverName = 'pyodide'
  }
  

}
  