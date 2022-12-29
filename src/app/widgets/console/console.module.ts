import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleWidgetComponent } from './console-widget/console-widget.component';
import { TerminalModule } from 'primeng/terminal';

@NgModule({
  declarations: [
    ConsoleWidgetComponent
  ],
  imports: [
    CommonModule,
    TerminalModule
  ],
  exports: [
    ConsoleWidgetComponent
  ]
})
export class ConsoleModule { }
