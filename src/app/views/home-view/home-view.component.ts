import { Component, OnInit, ViewChild } from '@angular/core';
import { FsService } from 'src/app/services/fs-service/fs.service';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { CodeEditorWidgetComponent } from 'src/app/widgets/code-editor/code-editor-widget/code-editor-widget.component';
import { TalFile } from 'src/app/widgets/code-editor/editor-files-widget/editor-files-widget.component';

@Component({
  selector: 'tal-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  public openedFile?: TalFile;

  public fs;
  public driver;
  //public needSave = false;

  @ViewChild("editorwideget") public editorWidget!: CodeEditorWidgetComponent;

  constructor(
    private _fs: FsService,
    private python:PythonCompilerService,
  ) {
    this.fs = _fs;
    this.driver = this.fs.getDriver('pyodide')
  }

  ngOnInit(): void {
    
  }

  public openFile(file: TalFile) {
    this.openedFile = file;
    
  }

  public editorDidChange(event: Event){
    console.log("editorDidChange:")
    this.saveFile()
  }

  public editorDidInput(event: InputEvent){
    //this.needSave = true;
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
    this.saveFile();
    this.python.runProject();
  }
}
