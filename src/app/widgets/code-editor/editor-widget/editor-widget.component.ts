import { Component, OnInit, ViewChild } from '@angular/core';
import { ProblemDescriptor } from 'src/app/services/api-service/api.service';
import { FsService } from 'src/app/services/fs-service/fs.service';
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

  async onAttachments(data: ArrayBuffer){
    console.log("onAttachments:",data)
    if(!this.selectedProblem){return;}
    let name = this.selectedProblem.name
    let path = "/data/"+name+".tar"
    await this.driver?.writeFile(path,data)
    this.fileWidget.refreshRoot()
    
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

  public testConnectAPI(){
    this.consoleWidget.print("python free_sum_mysimplebot.py\n")
    this.saveFile();
    
 
    this.python.testConnectAPI(this.consoleWidget).then(()=>{

    })
  }
}
