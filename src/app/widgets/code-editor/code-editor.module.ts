import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorWidgetComponent } from './code-editor-widget/code-editor-widget.component';
import { EditorFilesWidgetComponent } from './editor-files-widget/editor-files-widget.component';
import { EditorWidgetComponent } from './editor-widget/editor-widget.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitterModule } from 'primeng/splitter';
import { ConsoleModule } from '../console/console.module';


@NgModule({
  declarations: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent,
    EditorWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    SplitterModule,
    SharedModule,
    ConsoleModule
  ],
  exports: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent,
    EditorWidgetComponent
  ],
  providers: [ConfirmationService],
})
export class CodeEditorModule { }
