import { Injectable } from '@angular/core';
import { FsService } from '../fs-service/fs.service';
import { PyodideProjectEnvironment } from './python-compiler.types';

@Injectable({
    providedIn: 'root'
})
export class PythonCompilerService {

    constructor(private fs: FsService) { }

    loadPythonProject() {
        return new PyodideProjectEnvironment(false);
    }

    createPythonExample() {
        return new PyodideProjectEnvironment(true);
    }

}