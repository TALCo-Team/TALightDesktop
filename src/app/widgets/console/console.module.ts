import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleWidgetComponent } from './console-widget/console-widget.component';
import { TerminalModule } from 'primeng/terminal';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    ConsoleWidgetComponent
  ],
  imports: [
    CommonModule,
    TerminalModule,
    DropdownModule,
    SplitterModule
  ],
  exports: [
    ConsoleWidgetComponent
  ]
})
export class ConsoleModule { }
