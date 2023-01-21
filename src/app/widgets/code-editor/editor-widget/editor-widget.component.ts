import { Component, OnInit, ViewChild } from '@angular/core';

import { FsService, Tar } from 'src/app/services/fs-service/fs.service';
import { ProblemDescriptor, ServiceDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { CodeEditorWidgetComponent } from 'src/app/widgets/code-editor/code-editor-widget/code-editor-widget.component';
import { EditorFilesWidgetComponent, TalFile } from 'src/app/widgets/code-editor/editor-files-widget/editor-files-widget.component';
import { ConsoleWidgetComponent } from 'src/app/widgets/console/console-widget/console-widget.component';

@Component({
  selector: 'tal-editor-widget',
  templateUrl: './editor-widget.component.html',
  styleUrls: ['./editor-widget.component.scss']
})
export class EditorWidgetComponent implements OnInit {
  public openedFile?: TalFile;

  public fs;
  public driver;
  public selectedProblem?: ProblemDescriptor;
  public selectedService?: ServiceDescriptor;

  @ViewChild("fileWidget") public fileWidget!: EditorFilesWidgetComponent;
  @ViewChild("editorWidget") public editorWidget!: CodeEditorWidgetComponent;
  @ViewChild("consoleWidget") public consoleWidget!: ConsoleWidgetComponent;
  

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
    this.consoleWidget.print(data)
  }

  public onStderr(data:string){
    //alert("STDERR: "+data)
    this.consoleWidget.print(data)
  }

  public onStdin(msg:string){
    this.consoleWidget.print(msg)
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
      console.log("extractTar:unpack:files",files)
      console.log("extractTar:unpack:folders",folders)
  
      for(var idx in folders){
        console.log("extractTar:createDirectory:")
        let folder = folders[idx]
        let path = '/data/' + folder.path
        console.log("extractTar:createDirectory:",path)
        await this.driver?.createDirectory(path)
      }
      console.log("extractTar:createDirectory:DONE")
      for(var idx in files){
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = '/data/' + file.path
        let content = file.content
        console.log("extractTar:writeFile:",path,content)
        await this.driver?.writeFile(path, content)
      }
      console.log("extractTar:writeFile:DONE")
      this.fileWidget.refreshRoot()
    });
   
  }

  public openFile(file: TalFile) {
    this.openedFile = file;
    
  }

  public editorDidChange(event: Event){
    console.log("editorDidChange:")
    this.saveFile()
  }

  public editorDidInput(event: InputEvent){
    console.log("Input: ", this.editorWidget.value)
    this.saveFile()
  }

  public saveFile(){
    if ( this.openedFile ){ // && this.needSave ){
      console.log("saveFile:\n", this.openedFile.path, "\n", this.editorWidget.value)
      this.driver?.writeFile(this.openedFile.path, this.editorWidget.value)
    }
  }

  public runProject(){
    this.consoleWidget.print("python main.py\n")
    this.saveFile();
     
 
    this.python.runProject().then(()=>{

    })
  }
}
