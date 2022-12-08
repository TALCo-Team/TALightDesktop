import { Component, OnInit } from 'node_modules/@angular/core';


@Component({
  selector: 'monaco-editor-widget',
  templateUrl: './monaco-editor-widget.component.html',
  styleUrls: ['./monaco-editor-widget.component.scss']
})
export class MonacoEditorWidgetComponent implements OnInit {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  
  options = {
    theme: 'vs-dark'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}