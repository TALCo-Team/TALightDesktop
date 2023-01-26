import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerWidgetComponent } from './file-explorer-widget/file-explorer-widget.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitterModule } from 'primeng/splitter';
import { TooltipModule } from 'primeng/tooltip';
import { FileEditorWidgetComponent } from './file-editor-widget/file-editor-widget.component';
import { ExecbarWidgetComponent } from './execbar-widget/execbar-widget.component';
import { ProblemWidgetComponent } from './problem-widget/problem-widget.component';
import { DropdownModule } from 'primeng/dropdown';
import { MonacoEditorWidgetComponent } from './monaco-editor-widget/monaco-editor-widget.component';
import { OutputWidgetComponent } from './output-widget/output-widget.component';

@NgModule({
  declarations: [
    FileExplorerWidgetComponent,
    FileEditorWidgetComponent,
    CodeEditorComponent,
    ExecbarWidgetComponent,
    ProblemWidgetComponent,
    MonacoEditorWidgetComponent,
    OutputWidgetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    SplitterModule,
    SharedModule,
    TooltipModule,
    DropdownModule,
  ],
  exports: [
    FileExplorerWidgetComponent,
    CodeEditorComponent
  ],
  providers: [ ConfirmationService ],
})
export class CodeEditorModule { }
