import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalCodeEditorWidgetComponent } from './tal-code-editor-widget/tal-code-editor-widget.component';
import { TalEditorFilesWidgetComponent } from './tal-editor-files-widget/tal-editor-files-widget.component';



@NgModule({
  declarations: [
    TalCodeEditorWidgetComponent,
    TalEditorFilesWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TalCodeEditorModule { }
