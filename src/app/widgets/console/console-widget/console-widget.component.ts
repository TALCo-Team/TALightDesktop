import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { TerminalService } from 'primeng/terminal';

@Component({
  selector: 'tal-console-widget',
  templateUrl: './console-widget.component.html',
  styleUrls: ['./console-widget.component.scss'],
  providers: [TerminalService]
})
export class ConsoleWidgetComponent {

  @Output('input') public onInput = new EventEmitter<InputEvent>();

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe(command => {

      // EXAMPLE //
      let response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
      this.terminalService.sendResponse(response);
      // -- //

    });
  }

  print(content:string){
    this.terminalService.sendResponse(content);
  }


}