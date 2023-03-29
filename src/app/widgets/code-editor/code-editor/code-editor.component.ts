import { Component, OnInit, ViewChild } from '@angular/core';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ApiService } from 'src/app/services/api-service/api.service';
import { CompilerState } from 'src/app/services/compiler-service/compiler-service.types';

import { FsService, Tar } from 'src/app/services/fs-service/fs.service';
import { FsNodeFile, FsNodeFolder, FsNodeList } from 'src/app/services/fs-service/fs.service.types';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.types';

import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { ProjectEnvironment } from 'src/app/services/project-manager-service/project-manager.types';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';

import { FileExplorerWidgetComponent } from 'src/app/widgets/code-editor/file-explorer-widget/file-explorer-widget.component';
import { ExecbarWidgetComponent } from '../execbar-widget/execbar-widget.component';
import { FileEditorWidgetComponent } from '../file-editor-widget/file-editor-widget.component';
import { OutputType, OutputWidgetComponent } from '../output-widget/output-widget.component';
import { ProblemWidgetComponent } from '../problem-widget/problem-widget.component';

@Component({
  selector: 'tal-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  public cmdConnect?:Commands.Connect;
  
  public project:ProjectEnvironment | null = null;

  public selectedFile?: FsNodeFile;
  public selectedProblem?: ProblemDescriptor;
  public selectedService?: ServiceDescriptor;
  public pyodideState = CompilerState.Unknown
  public pyodideStateContent? = ""

  public fsroot = FsService.EmptyFolder;
  public fslist: FsNodeList = [];
  public fslistfile: FsNodeFile[] = [];

  @ViewChild("fileExplorer") public fileExplorer!: FileExplorerWidgetComponent;
  @ViewChild("fileEditor") public fileEditor!: FileEditorWidgetComponent;
  @ViewChild("execBar") public execBar!: ExecbarWidgetComponent;
  @ViewChild("problemWidget") public problemWidget!: ProblemWidgetComponent;
  @ViewChild("outputWidget") public outputWidget!: OutputWidgetComponent;

  private output_files:string[]|undefined = undefined;
  private current_output_file:string|undefined = undefined;
  
  constructor(
    private fs: FsService,
    private python:PythonCompilerService,
    private api:ApiService,
    private pm: ProjectManagerService,
  ) {
    console.log("CodeEditorComponent:constructor", this.pm)
    //TODO: add switch python/cpp
    
   
    
  }

  ngOnInit(): void {
    this.setPythonProject()
    this.project?.driver.subscribeNotify(true,(msg:string)=>{this.didNotify(msg)})
    this.project?.driver.subscribeState(true,(state:CompilerState,content?:string)=>{this.didStateChange(state,content)})
    this.project?.driver.subscribeStdout(true,(msg:string)=>{this.didStdout(msg)})
    this.project?.driver.subscribeStderr(true,(msg:string)=>{this.didStderr(msg)})
  }

  ngAfterViewInit(){
    this.outputWidget.enableStdin(false); 
  }

  public didStateChangeReady(content?:string){
    if(this.project){
      console.log("didStateChange:Ready:loadProject")
      this.project.loadProject();
    }
  }

  public setPythonProject(forceCreate:boolean=false){
    console.log("CodeEditorComponent:constructor:createPythonProject")
    if( forceCreate || !this.pm.getCurrentProject() ){
      console.log("CodeEditorComponent:constructor:createPythonProject:do!")
      let project = this.python.createPythonProject()
      this.pm.setCurrentProject(project);
    }
    this.project = this.pm.getCurrentProject();
    console.log("CodeEditorComponent:constructor:createPythonProject:",this.project)
  }


  public onUpdateRoot(fsroot:FsNodeFolder){
    this.fsroot = fsroot;
    this.fslist = this.fs.treeToList(fsroot);
    this.fslistfile = this.fslist.filter( item=>"content" in item ) as FsNodeFile[]
    let filePathList = new Array<string>()
    this.fslistfile.forEach(item=>filePathList.push(item.path))
    this.problemWidget.filePathList = filePathList
  }
  
  public didNotify(data:string){
    console.log("didNotify:")
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if(!this.cmdConnect){return;}
    this.cmdConnect.sendBinary(data + "\n"); //lo \n va aggiunto all'output del bot python
  }

  public didStateChange(state:CompilerState,content?:string){
    console.log("didStateChange:", state)
    //this.outputWidget!.print(state,OutputType.SYSTEM);
    if (state == CompilerState.Ready){
      this.didStateChangeReady(content)
    }
    this.pyodideState=state
    this.pyodideStateContent=content
    this.outputWidget.didStateChange(state,content)
  }

  public didStdout(data:string){
    console.log("onStdout:")
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if(!this.cmdConnect){return;}
    this.cmdConnect.sendBinary(data + "\n"); //lo \n va aggiunto all'output del bot python
  }

  public didStderr(data:string){
    console.log("onStderr:")
    //alert("STDERR: "+data)
    //this.nm.sendNotification("ERROR:",data,NotificationType.Error)
    this.outputWidget.print(data, OutputType.STDERR)
  }

  public sendStdin(msg:string, fromAPI=false){
    console.log("sendStdin:")
    let msgs = msg.split("\n");
    if(msgs[msgs.length - 1] === "") {msgs.pop();}
    console.log("sendStdin:split: ", msgs)

    for(let i = 0; i < msgs.length; i++){
      this.outputWidget.print(msgs[i],fromAPI?OutputType.STDINAPI:OutputType.STDIN)
      this.project?.driver.sendStdin(msgs[i])
    }
    if (fromAPI || this.pyodideState != CompilerState.Stdin ){
      this.outputWidget.enableStdin(false)
    }
  }

  public onProblemChanged(selectedProblem: ProblemDescriptor){
    console.log("onProblemChanged:",selectedProblem)
    this.selectedProblem=selectedProblem;
    this.selectedService=undefined;
  }

  public onServiceChanged(selectedService: ServiceDescriptor){
    console.log("onServiceChanged:",selectedService)
    this.selectedService=selectedService;

  }

  async onAttachments(data: ArrayBuffer){
    console.log("onAttachments:",data)
    if(!this.selectedProblem){return;}
    console.log("onAttachments:selectedProblem:",this.selectedProblem)
    if (!(data instanceof ArrayBuffer ) ) {return;}
    console.log("onAttachments:data:",data)

    console.log("extractTar:unpack:")
    Tar.unpack(data, async (files,folders) => {
      console.log("extractTar:unpack:folders",folders)
      for(var idx in folders){
        console.log("extractTar:createDirectory:")
        let folder = folders[idx]
        let path = '/data/' + folder.path
        console.log("extractTar:createDirectory:",path)
        await this.project?.driver.createDirectory(path)
      }
      console.log("extractTar:createDirectory:DONE")


      console.log("extractTar:unpack:files",files)
      for(var idx in files){
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = '/data/' + file.path
        let content = file.content
        console.log("extractTar:writeFile:",path,content)
        await this.project?.driver.writeFile(path, content)
      }
      console.log("extractTar:writeFile:DONE")
      
      
      this.fileExplorer.refreshRoot()
    });
    
  }

  public selectFile(file: FsNodeFile) {
    console.log('selectFile',file)
    this.selectedFile = file;
    this.execBar.selectedFile = this.selectedFile
    this.fileEditor.selectedFile = this.selectedFile 
  }

  public editorDidChange(file: FsNodeFile){
    console.log("editorDidChange:")
    this.saveFile()
  }

  public editorDidInput(event: InputEvent){
    console.log("Input: ", this.fileEditor)
    this.saveFile()
  }

  public saveFile(){
    if ( this.selectedFile ){ 
      console.log("saveFile:", this.selectedFile.path, this.fileEditor)
      this.project?.driver.writeFile(this.selectedFile.path, this.selectedFile.content)
    } else {
      console.log("saveFile:failed")
    }
  }

  async stopAll(){
    console.log("stopAll:")

    if(this.cmdConnect){this.cmdConnect.tal.closeConnection()}
    console.log("stopAll:cmdConnect:DONE")
    await this.project?.driver.stopExecution()
    console.log("stopAll:cmdConnect:DONE")
  }
  
  //-------------- API CONNECT
  public async runProject(useAPI = false){
    console.log("runProject:")
    this.outputWidget.clearOutput()
    
    let config = await this.python.readPythonConfig()
    if (!config){return false}
    console.log("runProject:config:ok")


    console.log("runProject:main:", config!.RUN)
    let mainFile = this.fslistfile.find( item => item.path == config!.RUN)
    if (!mainFile){return false}
    console.log("runProject:main:ok")
    this.fileExplorer.selectFile(mainFile)

    this.outputWidget.print("RUN: "+config.RUN, OutputType.SYSTEM)
    this.saveFile();
    
    await this.python.runProject()
    return true
  }


  public async runConnectAPI(){
    this.outputWidget.clearOutput()
    this.saveFile();
    
    
    this.apiConnect().then(()=>{
      //TODO: on success, new files are downloaded 
      //this.fileExplorer.refreshRoot()
    })
  }
  
  
  async apiConnect(){
    console.log("apiConnect")

    if(!this.selectedService){
      this.outputWidget.print("No problem selected", OutputType.STDERR)
      return false
    }
    console.log("apiConnect:service:ok")
    

    let config = await this.python.readPythonConfig()
    if (!config){return false}
    console.log("apiConnect:config:ok")

    //Run MAIN
    console.log("apiConnect:runProject")
    this.saveFile();
    await this.python.runProject()
    this.outputWidget.print("API: "+config.RUN, OutputType.SYSTEM)
    console.log("apiConnect:runProject:running")

    //Open Connection
    let problem = this.selectedService.parent.name;
    let service = this.selectedService.name;
    let args = this.selectedService.exportArgs();
    let tty = false //true: bash code coloring, backspaces, etc
    let token =  (config.TAL_TOKEN && config.TAL_TOKEN!=""?config.TAL_TOKEN:undefined)
    let filePaths = this.selectedService.exportFilesPaths();
    let files =  new Map<string,string>();

    filePaths.forEach((fileArgPath, fileArgName)=>{
      console.log("apiConnect:params:problem:path:", fileArgName, fileArgPath)
      let found = this.fslistfile.find(item => item.path == fileArgPath)
      console.log("apiConnect:params:problem:found:", found)
      if(!found){return}
      let content = found.content
      if(content instanceof ArrayBuffer){
        content = this.binDecoder.decode(content)
      }
      files.set(fileArgName, content)
    })

    
    console.log("apiConnect:params:problem",problem)
    console.log("apiConnect:params:service",service)
    console.log("apiConnect:params:args",args)
    console.log("apiConnect:params:tty",tty)
    console.log("apiConnect:params:token",token)
    console.log("apiConnect:params:files",files)

    
    let onConnectionStart = () => {this.didConnectStart()};
    let onConnectionBegin = (msg: string[]) => {this.didConnectBegin(msg)};
    let onConnectionClose = (msg: string[]) => {this.didConnectClose(msg)};
    let onData = (data: string)=>{ this.didConnectData(data)};
    let onBinaryHeader = (msg: any)=>{ this.didRecieveBinaryHeader(msg)};

    this.cmdConnect = await this.api.Connect(
      problem, 
      service, 
      args,
      tty,
      token,
      files,
      onConnectionBegin,
      onConnectionStart,
      onConnectionClose,
      onData,
      onBinaryHeader
    );
    console.log("apiConnect:DONE")
       
    
    return true
  }

  async didConnectError(error: string){
    console.log("apiConnect:didConnectError:", error)
    this.outputWidget.print("API Error: "+error,OutputType.STDERR)
    this.cmdConnect = undefined
    this.outputWidget.enableStdin(false)

    this.project?.driver.stopExecution()
  }

  async didConnectStart(){
    console.log("apiConnect:didConnectStart")
  }

  async didConnectBegin(message: string[]){
    console.log("apiConnect:didConnectBegin:", message)
  }

  async didConnectClose(message: string[]){
    console.log("apiConnect:didConnectionClose:",message)

    if(message && message.length > 0 && message[0] !== "") {
      this.output_files = message;
    }
    else {
      this.cmdConnect = undefined;
      console.log("apiConncect:cmdConnect:value:", this.cmdConnect);
    }
  }

  async didConnectData(data: string){
    console.log("apiConnect:didConnectData:", data)
    if(this.output_files && this.current_output_file){
      if(this.current_output_file){
        this.project?.driver.writeFile("/" + this.current_output_file, data)
      };
      if(this.current_output_file === this.output_files[this.output_files.length - 1]){
        this.cmdConnect = undefined;
      }
      console.log("apiConncect:cmdConnect:value:", this.cmdConnect);
    }
    else {
      this.sendStdin(data, true);
    }
  }

  async didRecieveBinaryHeader(message: any){
    console.log("apiConnect:didRecieveBinaryHeader:", message)

    this.current_output_file = message.name;
    if(this.current_output_file){this.project?.driver.writeFile("/" + this.current_output_file, "")};
  }
}
