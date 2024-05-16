import { ProjectDriver, ProjectEnvironment, ProjectLanguage } from "../project-manager-service/project-manager.types";
import { PyodideDriver } from "./python-compiler.driver";
import { PyodideExamples } from "./python-compiler.examples";

export class PyodideProjectEnvironment extends ProjectEnvironment{

    public laguange: ProjectLanguage = ProjectLanguage.PY
    public driver: ProjectDriver = new PyodideDriver()

    protected async createExample(): Promise<boolean> {
        console.log("PyodideProjectEnvironment:createExample")
        //Starter files
        let folders = [
            this.config.DIR_PROJECT,
            this.config.DIR_ATTACHMENTS,
        ]
        if(this.config.CREATE_EXAMPLES)
            folders.push(this.config.DIR_EXAMPLES)

        for(let i = 0; i < folders.length; i++){
            console.log("PyodideProjectEnvironment:createExample:createDirectory:",folders[i])
            await this.driver.createDirectory(folders[i]);
            console.log("PyodideProjectEnvironment:createExample:createDirectory:OK:",folders[i])
        }
        
        let files: string[][] = []
        
        let configContent = JSON.stringify(this.config, null, 4)

        files.unshift([this.config.CONFIG_PATH, configContent])
        
        let mainContent = `print("Hello World!")`;
        files.push([this.config.RUN, mainContent])
        
        if(this.config.CREATE_EXAMPLES){
            PyodideExamples.forEach((content:string, filename:string)=>{
                files.push([this.config!.DIR_EXAMPLES + filename, content])
            })
        }    
        
        for(let i=0; i < files.length; i++){
            let path = files[i][0]
            let content = files[i][1]
            console.log("PyodideProjectEnvironment:loadProject:files:", path, content)
            if(await this.driver.exists(path)){
                console.log("PyodideProjectEnvironment:loadProject:files:SKIP:", path)
                continue;
            }
            await this.driver.writeFile(path, content);  
        }     
        return true;        
    }
}