import { ProjectEnvironment, ProjectLanguage } from "../project-manager-service/project-manager.types";
import { PyodideDriver } from "./python-compiler.driver";
import { PyodideExamples } from "./python-compiler.examples";

export class PyodideProjectEnvironment extends ProjectEnvironment{
    public override driver: PyodideDriver;


    constructor(){
        let pyodideRoot = "/"
        let pyodideMount = "/mnt"
        let driver = new PyodideDriver(pyodideRoot, pyodideMount);
        super(ProjectLanguage.PY, driver)
        this.driver = driver;
    }


    async loadProject() {
        if(!this.config){return false}
        let config = this.config;
        
        //Starter files
        let folders = [
            config.DIR_PROJECT,
            config.DIR_ATTACHMENTS,
        ]
        if(config.CREATE_EXAMPLES){ folders.push(config.DIR_EXAMPLES)}
        
        for(let i = 0; i < folders.length; i++){
            console.log("PyodideProjectEnvironment:loadProject:createDirectory:",folders[i])
            await this.driver?.createDirectory(folders[i]);
        }
        
        let files: string[][] = []
        
        let configContent = JSON.stringify(config, null, 4)
        files.unshift([config.CONFIG_PATH, configContent])
        
        let mainContent = `print("Hello World!")`;
        files.push([config.RUN, mainContent])
        

        if(config.CREATE_EXAMPLES){
            PyodideExamples.forEach((content:string, filename:string)=>{
                files.push([config!.DIR_EXAMPLES + filename, content])
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
            await this.driver?.writeFile(path, content);  
        }
        return true;
    }
}