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
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { EditorModule } from './widgets/editor/editor.module';
import { TalCodeEditorModule } from './widgets/tal-code-editor/tal-code-editor.module';
import { TalConsoleModule } from './widgets/tal-console/tal-console.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    ConnectViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    EditorModule,
    InputTextModule,
    InputSwitchModule,
    DropdownModule,
    FileUploadModule,
    ConfirmPopupModule,
    TooltipModule,
    ScrollPanelModule,
    SelectButtonModule,
    SplitterModule,
    TalCodeEditorModule,
    TalConsoleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
