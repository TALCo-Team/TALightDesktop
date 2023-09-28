import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerWidgetComponent } from './file-explorer-widget/file-explorer-widget.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, SharedModule } from 'primeng/api';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitterModule } from 'primeng/splitter';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FileEditorWidgetComponent } from './file-editor-widget/file-editor-widget.component';
import { ExecbarWidgetComponent } from './execbar-widget/execbar-widget.component';
import { ProblemWidgetComponent } from './problem-widget/problem-widget.component';
import { TerminalWidgetComponent } from './terminal-widget/terminal-widget.component';
import { DropdownModule } from 'primeng/dropdown';
import { MonacoEditorWidgetComponent } from './monaco-editor-widget/monaco-editor-widget.component';
import { OutputWidgetComponent } from './output-widget/output-widget.component';
import { LogApiWidgetComponent } from './log-api-widget/log-api-widget.component';
import {TabViewModule} from 'primeng/tabview';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { TerminalModule, TerminalService } from 'primeng/terminal';

import { GoogleLoginProvider, MicrosoftLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    FileExplorerWidgetComponent,
    FileEditorWidgetComponent,
    CodeEditorComponent,
    ExecbarWidgetComponent,
    ProblemWidgetComponent,
    MonacoEditorWidgetComponent,
    OutputWidgetComponent,
    TerminalWidgetComponent,
    LogApiWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonacoEditorModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    TieredMenuModule,
    DialogModule,
    InputTextModule,
    SplitterModule,
    SharedModule,
    TooltipModule,
    ToastModule,
    DropdownModule,
    TabViewModule,
    ScrollPanelModule,
    SocialLoginModule,
    TerminalModule
  ],
  exports: [
    FileExplorerWidgetComponent,
    CodeEditorComponent
  ],
  providers: [ ConfirmationService,
    TerminalService,
    MessageService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('317384189263-2l11jni1gvvfc71paoo2m6mkincms264.apps.googleusercontent.com',
            {
              scopes : 'https://www.googleapis.com/auth/drive',
              prompt : '',   // '' | 'none' | 'consent' |  'select_account'
              oneTapEnabled: false,
            }),
          },
          {
            id: MicrosoftLoginProvider.PROVIDER_ID,
            provider: new MicrosoftLoginProvider('a1d6b14c-7b0c-45fe-afaf-63173ac453f9',
            {
              scopes : ["offline_access files.readwrite.all files.readwrite,"],
              prompt : '',   // '' | 'none' | 'consent' |  'select_account'
              //oneTapEnabled: false,
            }),
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class CodeEditorModule { }
