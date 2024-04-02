import { Injectable } from '@angular/core';
import { PyodideDriver } from './python-compiler.driver';
import { FsService } from '../fs-service/fs.service';
import { ProjectConfig } from '../project-manager-service/project-manager.types';
import { PyodideProjectEnvironment } from './python-compiler.types';


@Injectable({
    providedIn: 'root'
})
export class PythonCompilerService {
    

    constructor( private fs:FsService ) { }

    createPythonProject(){
        console.log("PythonCompilerService:createPythonProject")
        let pyodideRoot = "/"
        let pyodideMount = "/TALight"
        let ppe = new PyodideProjectEnvironment(pyodideMount, pyodideRoot);
        return ppe;
    }
  

}


