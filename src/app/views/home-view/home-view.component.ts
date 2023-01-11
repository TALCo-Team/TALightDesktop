import { Component, OnInit, ViewChild } from '@angular/core';
import { FsService } from 'src/app/services/fs-service/fs.service';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { CodeEditorWidgetComponent } from 'src/app/widgets/code-editor/code-editor-widget/code-editor-widget.component';
import { TalFile } from 'src/app/widgets/code-editor/editor-files-widget/editor-files-widget.component';
import { ConsoleWidgetComponent } from 'src/app/widgets/console/console-widget/console-widget.component';

@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public openedFile?: TalFile;

  public fs;
  public driver;

  @ViewChild("editorWideget") public editorWidget!: CodeEditorWidgetComponent;
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
