import { Component, OnInit, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'codemirror-editor-widget',
  templateUrl: './codemirror-editor-widget.component.html',
  styleUrls: ['./codemirror-editor-widget.component.scss']
})



export class CodemirrorEditorWidgetComponent {
  /* codeMirrorOptions: any = {
    //theme: 'oneDark',
    mode: 'python',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };

  public code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  
  @ViewChild(CodemirrorComponent) public cmEditor?: CodemirrorComponent;

  constructor() { }

  setLanguage(lang_name:string){
    this.codeMirrorOptions.mode = lang_name;
  }

  ngOnInit(): void {
    if(this.cmEditor){
      //alert(this.cmEditor);
    }
  }


  ngAfterViewInit(): void {
    if(this.cmEditor){
      //alert(this.cmEditor.codeMirror);
      //this.code =" print(1); alert(1); "
    }
  }

  setEditorContent(event:any) {
    // console.log(event, typeof event);
    console.log(this.code);
  } */





}

