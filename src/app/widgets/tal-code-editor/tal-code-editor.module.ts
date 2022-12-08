import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CodeEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TalCodeEditorModule { }
