import { Component, AfterViewInit } from '@angular/core';
import { TerminalService } from 'primeng/terminal';

@Component({
  selector: 'tal-console-widget',
  templateUrl: './console-widget.component.html',
  styleUrls: ['./console-widget.component.scss'],
  providers: [TerminalService]
})
export class ConsoleWidgetComponent {

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {

      // EXAMPLE //
      let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
      this.terminalService.sendResponse(response);
      // -- //

    });
  }


}