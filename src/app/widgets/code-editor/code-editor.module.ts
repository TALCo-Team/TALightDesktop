import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorWidgetComponent } from './code-editor-widget/code-editor-widget.component';
import { EditorFilesWidgetComponent } from './editor-files-widget/editor-files-widget.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ConfirmDialogModule,
    OverlayPanelModule
  ],
  exports: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent
  ],
  providers: [ConfirmationService],
})
export class CodeEditorModule { }
