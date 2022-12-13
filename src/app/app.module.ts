import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ConnectViewComponent } from './views/connect-view/connect-view.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { ConsoleModule } from './widgets/console/console.module';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CodeEditorModule } from './widgets/code-editor/code-editor.module';
import { SelectProblemViewComponent } from './views/select-problem-view/select-problem-view.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ConnectViewComponent,
    SelectProblemViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MonacoEditorModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    InputTextModule,
    InputSwitchModule,
    DropdownModule,
    FileUploadModule,
    TooltipModule,
    ScrollPanelModule,
    SelectButtonModule,
    SplitterModule,
    RadioButtonModule,
    ConsoleModule,
    CodeEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
