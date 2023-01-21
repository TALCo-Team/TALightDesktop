import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarWidgetComponent } from './topbar-widget/topbar-widget.component';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopbarWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AutoCompleteModule,
    InputTextModule,
    TooltipModule,
    ButtonModule,
  ],exports:[
    TopbarWidgetComponent
  ]
})
export class TopbarModule { }
