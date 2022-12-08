import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from 'node_modules/@angular/common';
import { FormsModule } from 'node_modules/@angular/forms';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { MonacoEditorModule } from 'node_modules/ngx-monaco-editor';
import { MatTreeModule }  from 'node_modules/@angular/material/tree';
import { MatIconModule } from 'node_modules/@angular/material/icon'

import { EditorWidgetComponent } from './editor-widget/editor-widget.component';
import { MonacoEditorWidgetComponent } from './monaco-editor-widget/monaco-editor-widget.component';
import { CodemirrorEditorWidgetComponent } from './codemirror-editor-widget/codemirror-editor-widget.component';
import { EditorFilesWidgetComponent } from './editor-files-widget/editor-files-widget.component';



@NgModule({
  declarations: [
    EditorWidgetComponent,
    MonacoEditorWidgetComponent,
    CodemirrorEditorWidgetComponent,
    EditorFilesWidgetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule.forRoot(), // use forRoot() in main app module only.
    CodemirrorModule,
    MatTreeModule,
    MatIconModule
  ],
  exports:[
    EditorWidgetComponent,
    MonacoEditorWidgetComponent,
    CodemirrorEditorWidgetComponent,
    EditorFilesWidgetComponent
  ]
})
export class EditorModule { }
