import { Component, OnInit, ViewChild } from '@angular/core';

import { FsService, FsNodeFile, Tar } from 'src/app/services/fs-service/fs.service';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { FileExplorerWidgetComponent } from 'src/app/widgets/code-editor/file-explorer-widget/file-explorer-widget.component';
import { ExecbarWidgetComponent } from '../execbar-widget/execbar-widget.component';
import { FileEditorWidgetComponent } from '../file-editor-widget/file-editor-widget.component';
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
  public fs;

  @ViewChild("fileExplorer") public fileExplorer!: FileExplorerWidgetComponent;
  @ViewChild("fileEditor") public fileEditor!: FileEditorWidgetComponent;
  @ViewChild("execBar") public execBar!: ExecbarWidgetComponent;
  @ViewChild("problemWidget") public problemWidget!: ProblemWidgetComponent;
  
  constructor(
    private _fs: FsService,
    private python:PythonCompilerService,
  ) {
    this.fs = _fs;
    this.driver = this.fs.getDriver('pyodide')
  }

  ngOnInit(): void {
    this.python.driver?.subscribeStdout(true,(msg)=>{this.onStdout(msg)})
    this.python.driver?.subscribeStderr(true,(msg)=>{this.onStderr(msg)})
  }
  

  public onStdout(data:string){
    //alert("STDOUT: "+data)
    this.problemWidget.print(data)
  }

  public onStderr(data:string){
    //alert("STDERR: "+data)
    this.problemWidget.print(data)
  }

  public onStdin(msg:string){
    this.problemWidget.print(msg)
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

    /*
    let path = "/data/"+name+".tar"
    
    await this.driver?.writeFile(path,data)
    this.fileWidget.refreshRoot()    
    
    await this.extractTar(path)
  }

  async extractTar(path:string){
    let exists = await this.driver?.exists(path)
    let basedir = path.split("/").slice(0,-1).join("/") + "/"
    let filename = path.split("/").splice(-1)[0]
    let basename = filename.split(".").slice(0,-1).join('.')
    let extractdir = basedir + basename + "/"
    await this.driver?.createDirectory(extractdir)
    let data = await this.driver?.readFile(path, true)
    */
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

  public editorDidChange(event: Event){
    console.log("editorDidChange:")
    this.saveFile()
  }

  public editorDidInput(event: InputEvent){
    console.log("Input: ", this.fileEditor)
    this.saveFile()
  }

  public saveFile(){
    if ( this.selectedFile ){ // && this.needSave ){
      console.log("saveFile:\n", this.selectedFile.path, "\n", this.fileEditor)
      this.driver?.writeFile(this.selectedFile.path, this.selectedFile.content)
    }
  }

  public runProject(){
    this.problemWidget.print("python main.py\n")
    this.saveFile();
     
 
    this.python.runProject().then(()=>{

    })
  }

  public testConnectAPI(){
    this.problemWidget.print("python free_sum_mysimplebot.py\n")
    this.saveFile();
    
 
    this.python.testConnectAPI(this.problemWidget).then(()=>{

    })
  }
}
