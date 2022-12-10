import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorWidgetComponent } from './code-editor-widget/code-editor-widget.component';
import { EditorFilesWidgetComponent } from './editor-files-widget/editor-files-widget.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
  ],
  exports: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent
  ]
})
export class CodeEditorModule { }
