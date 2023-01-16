import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleWidgetComponent } from './console-widget/console-widget.component';
import { TerminalModule } from 'primeng/terminal';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    ConsoleWidgetComponent
  ],
  imports: [
    CommonModule,
    TerminalModule,
    DropdownModule,
    SplitterModule,
    FormsModule,
    //OverlayPanelModule,
    ConfirmDialogModule,
    TooltipModule
  ],
  exports: [
    ConsoleWidgetComponent
  ],
  //providers: [ConfirmationService],
})
export class ConsoleModule { }
