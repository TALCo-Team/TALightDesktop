import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, NgZone } from '@angular/core';
import { Terminal, TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
//import { Terminal } from 'xterm';

@Component({
  selector: 'tal-console-widget',
  templateUrl: './console-widget.component.html',
  styleUrls: ['./console-widget.component.scss'],
  //encapsulation: ViewEncapsulation.None,
  providers: [TerminalService]
})
export class ConsoleWidgetComponent {

  @Output('input') public onInput = new EventEmitter<InputEvent>();
  @ViewChild("terminal") public terminal!: Terminal;
  @ViewChild("output") public output!: HTMLPreElement;

  public outputText = ""
  
  
  public testOutput(){
    this.print("python main.py\n")
  }
  

  subscr: Subscription

  
  constructor(private terminalService: TerminalService, private zone: NgZone) {
    this.subscr = this.terminalService.commandHandler.subscribe(command => {
      
      let params = command.split(" ") 
      let operation = params.splice(0,1)[0]
      console.log('tokens: ',params)
      console.log('command: ',command)
      let response = 'Unknown command: ' + command;
      switch(operation){
        case "echo": response = params.join(" "); break;
        case "date": response = new Date().toDateString(); break;
      }
      
      this.terminalService.sendResponse(response);
    });
    
  }

  injectCommand(command:string){
    
    let event = new KeyboardEvent('keydown', {'key': 'Enter'})
    // https://stackoverflow.com/a/44190874/320926
    // https://stackoverflow.com/a/30003941/320926
    // console.log(this.terminal.el)
    
    var enterKey = new KeyboardEvent('keydown', {
      code: 'Enter',
      key: 'Enter',
      charCode: 13,
      keyCode: 13
    });
    
    this.zone.run(()=>{
      let term = this.terminal.el.nativeElement.children[0];
      this.terminal.focus(term);
      this.terminalService.sendCommand(command)
      this.terminal.command = command
      
      
      this.terminal.handleCommand(enterKey);
      
      //this.terminal.el.nativeElement.dispatchEvent(enterKey);
    })


  }
  
  print(content:string){
    this.injectCommand("echo "+content);
    
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
  }
  
  /*
  public term: Terminal;
  container?: HTMLElement | null;

  constructor() {
    this.term = new Terminal();
  }

  ngOnInit(){
    this.container = document.getElementById('xterm-container');
    if (this.container){
      this.term.open(this.container);
      this.term.writeln('Welcome to xterm.js');

      let myBuffer:string[] = [];

      // This is an xterm.js instance
      this.term.onKey(( {key, domEvent} ) => {
        myBuffer.push(key);
        this.term.write(key)
      });
      
      this.term.onLineFeed(() => {
        let command = myBuffer.join('');  // Or something like that
        myBuffer = [];  // Empty buffer
        //this.term.write(command)
        this.execCommand(command)
        return false
      });



    }
  }

  public execCommand(command:string){
    alert(command)
  }



  print(content:string){
    this.term.writeln(content);
  }

  */
  

}


