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
import { TooltipModule } from 'primeng/tooltip';
import { FileViewerWidgetComponent } from './file-viewer-widget/file-viewer-widget.component';


@NgModule({
  declarations: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent,
    EditorWidgetComponent,
    FileViewerWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    SplitterModule,
    SharedModule,
    ConsoleModule,                                      
    TooltipModule
  ],
  exports: [
    CodeEditorWidgetComponent,
    EditorFilesWidgetComponent,
    EditorWidgetComponent
  ],
  providers: [ConfirmationService],
})
export class CodeEditorModule { }
