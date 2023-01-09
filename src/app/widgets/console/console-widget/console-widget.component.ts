import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, NgZone, ElementRef } from '@angular/core';
import { Terminal, TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
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
  @Output('stdin') public onStdin = new EventEmitter<string>();

  @ViewChild("terminal") public terminal!: Terminal;
  @ViewChild("output") public output!: ElementRef;
  @ViewChild("sdtinInput") public sdtinInput!: ElementRef;
  

  public outputText = ""


  commandSub: Subscription

  
  constructor(private terminalService: TerminalService, private zone: NgZone, private api: ApiService) {
    this.commandSub = this.terminalService.commandHandler.subscribe(command => {this.execCommand(command)});
  }

  ngOnDestroy() {
    this.commandSub.unsubscribe();
  }


  clearOutput(){
    this.zone.run(() => this.outputText = "")
  }

  print(content:string, end="\n"){
    this.zone.run(() => this.outputText += content+end)
  }
    
  async onApiError(message: string){
    alert("API Error: "+message)
  }

  async apiProblemList() {
    let onSuccess = (problemList:Map<string, Meta>)=>{ 
      console.log(problemList);
    }
    let req = this.api.problemList( onSuccess );
    req.onError = (error) =>{ this.onApiError(error) };
  }
  

  
  public testOutput(){
    this.print("python main.py\n")
  }
  

  public sendStdin(){
    let msg = this.sdtinInput.nativeElement.value ?? ""
    msg = msg.trim()
    console.log("sendStdin:",this.sdtinInput)
    if(msg == ""){return}
    
    this.sdtinInput.nativeElement.value=""
    this.onStdin.emit(msg);
  }
  
  public sendOnEnter(event:KeyboardEvent){
    if ( event.key == 'Enter' ) { this.sendStdin(); }
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

  execCommand(command:string){
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


