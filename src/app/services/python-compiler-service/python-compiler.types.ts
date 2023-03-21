import { ProjectEnvironment } from "../project-manager-service/project-manager.types";

export class PyodideProjectEnvironment extends ProjectEnvironment{
    loadProject(): boolean {
        return true;
    }

}