import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ApiService } from 'src/app/services/api-service/api.service';

import { FsService, FsNodeFile, Tar, FsNodeFolder, FsNodeList } from 'src/app/services/fs-service/fs.service';
import { NotificationManagerService, NotificationType } from 'src/app/services/notification-mananger-service/notification-manager.service';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';
import { PyodideState } from 'src/app/services/python-compiler-service/pydiode-driver';
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
  
  public selectedFile?: FsNodeFile;
  public selectedProblem?: ProblemDescriptor;
  public selectedService?: ServiceDescriptor;
  public driver;
  public pyodideState = PyodideState.Unknown
  public pyodideStateContent? = ""

  public fsroot = FsService.EmptyFolder;
  public fslist: FsNodeList = [];
  public fslistfile: FsNodeFile[] = [];

  @ViewChild("fileExplorer") public fileExplorer!: FileExplorerWidgetComponent;
  @ViewChild("fileEditor") public fileEditor!: FileEditorWidgetComponent;
  @ViewChild("execBar") public execBar!: ExecbarWidgetComponent;
  @ViewChild("problemWidget") public problemWidget!: ProblemWidgetComponent;
  @ViewChild("outputWidget") public outputWidget!: OutputWidgetComponent;


  
  constructor(
    private fs: FsService,
    private python:PythonCompilerService,
    private api:ApiService,
    private nm: NotificationManagerService,
  ) {
    this.driver = python.driver
  }

  ngOnInit(): void {
    this.python.driver?.subscribeNotify(true,(msg)=>{this.didNotify(msg)})
    this.python.driver?.subscribeState(true,(state:PyodideState,content?:string)=>{this.didStateChange(state,content)})
    this.python.driver?.subscribeStdout(true,(msg)=>{this.didStdout(msg)})
    this.python.driver?.subscribeStderr(true,(msg)=>{this.didStderr(msg)})
  }

  ngAfterViewInit(){
    this.outputWidget.enableStdin(false); 
  }

  public onUpdateRoot(fsroot:FsNodeFolder){
    this.fsroot = fsroot;
    this.fslist = this.fs.treeToList(fsroot);
    this.fslistfile = this.fslist.filter( item=>"content" in item ) as FsNodeFile[]
    this.problemWidget.fslist = this.fslistfile
  }
  
  public didNotify(data:string){
    console.log("didNotify:")
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if(!this.cmdConnect){return;}
    this.cmdConnect.sendBinary(data + "\n"); //lo \n va aggiunto all'output del bot python
  }

  public didStateChange(state:PyodideState,content?:string){
    console.log("didStateChange:")
    //this.outputWidget!.print(state,OutputType.SYSTEM);
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
    this.nm.sendNotification("ERROR:",data,NotificationType.Error)
    this.outputWidget.print(data, OutputType.STDERR)
  }

  public sendStdin(msg:string, fromAPI=false){
    console.log("sendStdin:")
    let msgs = msg.split("\n");
    if(msgs[msgs.length - 1] === "") {msgs.pop();}
    console.log("sendStdin:split: ", msgs)

    for(let i = 0; i < msgs.length; i++){
      this.outputWidget.print(msgs[i],fromAPI?OutputType.STDINAPI:OutputType.STDIN)
      this.python.driver?.sendStdin(msgs[i])
    }
    if (fromAPI || this.pyodideState != PyodideState.Stdin ){
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
        await this.driver?.createDirectory(path)
      }
      console.log("extractTar:createDirectory:DONE")


      console.log("extractTar:unpack:files",files)
      for(var idx in files){
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = '/data/' + file.path
        let content = file.content
        console.log("extractTar:writeFile:",path,content)
        await this.driver?.writeFile(path, content)
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
      this.driver?.writeFile(this.selectedFile.path, this.selectedFile.content)
    } else {
      console.log("saveFile:failed")
    }
  }

  async stopAll(){
    console.log("stopAll:")

    if(this.cmdConnect){this.cmdConnect.tal.closeConnection()}
    console.log("stopAll:cmdConnect:DONE")
    await this.driver?.stopExecution()
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


  public runConnectAPI(){
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
    

    console.log("apiConnect:runProject")
    this.saveFile();
    await this.python.runProject()
    this.outputWidget.print("API: "+config.RUN, OutputType.SYSTEM)
    console.log("apiConnect:runProject:running")


    let problem = this.selectedService.parent.name;
    let service = this.selectedService.name;
    let args = this.selectedService.exportArgs();
    let tty = undefined
    let token = undefined
    let filePaths = this.selectedService.exportFilesPaths();
    let files =  new Array<string>();

    console.log("apiConnect:params:problem:items:", this.fslistfile)
    for(let idx in filePaths){
      let path = filePaths[idx];
      console.log("apiConnect:params:problem:path:", path)
      
      let found = this.fslistfile.find(item => item.path == path)
      console.log("apiConnect:params:problem:found:", found)
      let content = found ? found.content : ""

      if(content instanceof ArrayBuffer){
        content = this.binDecoder.decode(content)
      }
      files.push(content)
    }

    
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
      onData
    );
    this.cmdConnect.onError = (error)=>{this.didConnectError(error)};
    console.log("apiConnect:DONE")

    return true
  }

  async didConnectError(error: string){
    console.log("apiConnect:didConnectError:", error)
    this.outputWidget.print("API Error: "+error,OutputType.STDERR)
    this.cmdConnect = undefined
    this.outputWidget.enableStdin(false)

    
    this.python.driver?.stopExecution()
    
    
  }

  async didConnectStart(){
    console.log("apiConnect:didConnectStart")
  }

  async didConnectBegin(message: string[]){
    console.log("apiConnect:didConnectBegin:", message)
  }

  async didConnectClose(message: string[]){
    console.log("apiConnect:didConnectionClose:",message)
    this.cmdConnect = undefined
  }

  async didConnectData(data: string){
    console.log("apiConnect:didConnectData:", data)
    this.sendStdin(data, true)
  }
}
