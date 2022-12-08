import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
