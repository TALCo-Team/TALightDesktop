import { Injectable } from '@angular/core';
import { PyodideDriver } from './python-compiler.driver';
import { FsService } from '../fs-service/fs.service';
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
        console.log("PythonCompilerService:createPythonProject:setRoot: ", pyodideRoot)
        console.log("PythonCompilerService:createPythonProject:setMount: ", pyodideMount)
        return new PyodideProjectEnvironment(pyodideMount, pyodideRoot);
    }
}


