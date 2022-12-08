import { NgModule } from 'node_modules/@angular/core';
import { FormsModule } from 'node_modules/@angular/forms';
import { BrowserModule } from 'node_modules/@angular/platform-browser';
import { RouterModule } from 'node_modules/@angular/router';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { TalCodeEditorModule } from './widgets/tal-code-editor/tal-code-editor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    TalCodeEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
