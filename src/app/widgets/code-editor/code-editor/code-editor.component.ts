import { Component, OnInit, ViewChild } from '@angular/core';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ApiService } from 'src/app/services/api-service/api.service';

import { FsService, FsNodeFile, Tar } from 'src/app/services/fs-service/fs.service';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';
import { PyodideDriver } from 'src/app/services/python-compiler-service/pydiode-driver';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { FileExplorerWidgetComponent } from 'src/app/widgets/code-editor/file-explorer-widget/file-explorer-widget.component';
import { ExecbarWidgetComponent } from '../execbar-widget/execbar-widget.component';
import { FileEditorWidgetComponent } from '../file-editor-widget/file-editor-widget.component';
import { OutputWidgetComponent } from '../output-widget/output-widget.component';
import { ProblemWidgetComponent } from '../problem-widget/problem-widget.component';

@Component({
  selector: 'tal-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  public selectedFile?: FsNodeFile;
  public selectedProblem?: ProblemDescriptor;
  public selectedService?: ServiceDescriptor;
  public driver;
  public cmdConnect?:Commands.Connect;

  @ViewChild("fileExplorer") public fileExplorer!: FileExplorerWidgetComponent;
  @ViewChild("fileEditor") public fileEditor!: FileEditorWidgetComponent;
  @ViewChild("execBar") public execBar!: ExecbarWidgetComponent;
  @ViewChild("problemWidget") public problemWidget!: ProblemWidgetComponent;
  @ViewChild("outputWidget") public outputWidget!: OutputWidgetComponent;
  
  constructor(
    private fs: FsService,
    private python:PythonCompilerService,
    private api:ApiService,
  ) {
    this.driver = python.driver
  }

  ngOnInit(): void {
    this.python.driver?.subscribeStdout(true,(msg)=>{this.onStdout(msg)})
    this.python.driver?.subscribeStderr(true,(msg)=>{this.onStderr(msg)})
  }
  

  
  public onStdout(data:string){
    this.outputWidget!.print(data);
    //TODO: if API connect then:
    if(!this.cmdConnect){return;}
    this.cmdConnect.sendBinary(data + "\n"); //lo \n va aggiunto all'output del bot python
  }


  public onStderr(data:string){
    //alert("STDERR: "+data)
    this.outputWidget.print(data)
  }

  public onStdin(msg:string){
    this.outputWidget.print(msg)
    this.python.driver?.sendStdin(msg)
  }

  public onProblemChanged(selectedProblem: ProblemDescriptor){
    console.log("onProblemChanged:",selectedProblem)
    this.selectedProblem=selectedProblem;
  }

  public onServiceChanged(selectedService: ServiceDescriptor){
    console.log("onServiceChanged:",selectedService)
    this.selectedService=selectedService;
    this.selectedProblem=selectedService.parent;
  }

  async onAttachments(data: ArrayBuffer){
    console.log("onAttachments:",data)
    if(!this.selectedProblem){return;}
    let name = this.selectedProblem.name

    if (!(data instanceof ArrayBuffer ) ) {return;}
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
      console.log("saveFile:\n", this.selectedFile.path, "\n", this.fileEditor)
      this.driver?.writeFile(this.selectedFile.path, this.selectedFile.content)
    } else {
      console.log("saveFile:failed")
    }
  }

  public async runProject(useAPI = false){
    this.outputWidget.clearOutput()
    
    let config = await this.python.readPythonConfig()
    if (!config){return false}

    this.outputWidget.print("RUN: "+config.MAIN)
    this.saveFile();
    
    this.python.runProject().then(()=>{
      this.fileExplorer.refreshRoot()
    })

    return true
  }


//-------------- API CONNECT
  public runConnectAPI(){
    this.outputWidget.clearOutput()
    this.saveFile();
    
 
    this.apiConnect().then(()=>{
      //TODO: on success, new files are downloaded 
      this.fileExplorer.refreshRoot()
    })
  }
  

  async apiConnect() {
    console.log("apiConnect")
    if(!this.selectedService){return false}
    console.log("apiConnect:service:OK")
    let config = await this.python.readPythonConfig()
    if (!config){return false}
    console.log("apiConnect:config:OK")

    let problem = this.selectedService.parent.name;
    let service = this.selectedService.name;
    let args = this.selectedService.exportArgs();
    let tty = undefined
    let token = undefined
    let files = this.selectedService.exportFiles();
    
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

    console.log("apiConnect:params:packages",config.PACKAGES)
    await this.python.installPackages(config.PACKAGES)
    this.outputWidget.print("TEST: "+config.MAIN)
    await this.driver?.executeFile(config.MAIN)
    
    
    console.log("apiConnect:DONE")
    

    return true
  }

  async didConnectError(error: string){
    console.log("apiConnect:didConnectError:",error)
    this.cmdConnect = undefined
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
    console.log("apiConnect:didConnectData:",data)
    this.onStdin(data)
  }


  //--------------




}
