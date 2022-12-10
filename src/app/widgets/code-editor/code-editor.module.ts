import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorWidgetComponent } from './code-editor-widget/code-editor-widget.component';
import { EditorFilesWidgetComponent } from './editor-files-widget/editor-files-widget.component';



@NgModule({
  declarations: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent
  ]
})
export class CodeEditorModule { }
