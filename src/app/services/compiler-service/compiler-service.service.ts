import { Injectable } from '@angular/core';
import { CompilerDriver } from './compiler-service.types';

@Injectable({
  providedIn: 'root'
})
export class CompilerServiceService {

  public drivers = new Map<string,CompilerDriver>();
    
  constructor(){
  
  }

  registerDriver(name:string, driver: CompilerDriver):boolean{
    //if (name in this.drivers){return false;}
    //alert('register: '+driver)
    this.drivers.set(name, driver);
    //alert('register: '+driver.constructor.name+' | all: '+this.getDriverNames())
    return true;
  }

  getDriver(name:string): CompilerDriver | undefined{
    //alert(name + ' '  + this.getDriverNames() )
    if ( this.drivers.has(name) ){return this.drivers.get(name);}
    alert(name + ' NOT found in: '  + this.getDriverNames() + " | getDriver: undefined !!!" )
    return undefined
    
  }

  getDriverNames(){
    return Array.from(this.drivers.keys());
  }

}
