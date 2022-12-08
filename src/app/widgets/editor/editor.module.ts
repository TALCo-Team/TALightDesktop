import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { MatTreeModule }  from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon'

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
