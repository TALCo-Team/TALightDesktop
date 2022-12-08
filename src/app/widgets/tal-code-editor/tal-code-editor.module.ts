import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from 'node_modules/@angular/common';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { FormsModule } from 'node_modules/@angular/forms';



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
