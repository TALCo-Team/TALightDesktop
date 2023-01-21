import { Component, EventEmitter, Output, ViewChild, NgZone, ElementRef } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { Terminal, TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { ProblemManagerService, ServiceDescriptor, ProblemDescriptor, ArgsMap, ArgDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';


export class ServiceMenuEntry {
  constructor(
    public problem = "",
    public service = "",
    public descriptor: ServiceDescriptor,
  ){}
}



@Pipe({name: 'cleanupName'})
export class CleanUpNamePipe implements PipeTransform {
    transform(name:string): string {
        name = name.replace(new RegExp('[-_ ]+','g'), " ") 
        name = name.replace("[^a-zA-Z0-9 ]+", "") 
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return name
    }
}




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
  @Output('problemListUpdate') public onProblemListUpdate = new EventEmitter<Map<string, Meta>>();
  @Output('problemChanged') public onProblemSelected = new EventEmitter<ProblemDescriptor>();
  @Output('serviceChanged') public onServiceSelected = new EventEmitter<ServiceDescriptor>();
  @Output('attachments') public onAttachments = new EventEmitter<ArrayBuffer>();

  @ViewChild("terminal") public terminal!: Terminal;
  @ViewChild("output") public output!: ElementRef;
  @ViewChild("sdtinInput") public sdtinInput!: ElementRef;



  public outputText: string = "";


  commandSub: Subscription
  servicesMenu = new Array<ServiceMenuEntry>();
  selectedProblem?: ProblemDescriptor;
  selectedService?: ServiceMenuEntry;
  selectedArgs?: ArgsMap;



  constructor( public terminalService: TerminalService,
               public zone: NgZone,
               public api: ApiService,
               public pm: ProblemManagerService
             )
  {
    this.commandSub = this.terminalService.commandHandler.subscribe(command => { this.execCommand(command) });

  }
  ngOnInit() {
    this.apiProblemList();
  }
  ngOnDestroy() {
    this.commandSub.unsubscribe();
  }


  clearOutput() {
    this.zone.run(() => this.outputText = "")
  }

  print(content: string, end = "\n") {
    this.zone.run(() => this.outputText += content + end);

    // Scroll #console-bottom-scroll to bottom
    setTimeout(() => {
      const scrollEl = document.getElementById("console-bottom-scroll");
      if (scrollEl) {
        scrollEl.scrollTop = scrollEl.scrollHeight;
        console.log(scrollEl.scrollTop, scrollEl.scrollHeight)
      }
    });
  }

  async onApiError(message: string) {
    console.log("API Error: ", message)
  }
  
  async argDidChange(key:string,event:Event){
    console.log('argDidChange:',key,event)
  }

  async argDidReset(key:string,event:Event){
    console.log('argDidReset:',key,event)
    if(!this.selectedArgs){return}
    let arg = this.selectedArgs.get(key)
    if (!arg){return}
    arg.value = arg.default
  }

  async reloadProblemList(){
    this.apiProblemList()
  }

  async updateProblemsUI() {
    let menuServices = new Array<ServiceMenuEntry>();
    this.pm.problemList.forEach((problemDesc)=>{      
      problemDesc.services.forEach((serviceDesc)=>{
        var pattern = new RegExp('[-_ ]+','g');
        var serviceLabel = serviceDesc.name.replace(pattern, " ")
        let serviceEntry = new ServiceMenuEntry(problemDesc.name,serviceLabel,serviceDesc)
        menuServices.push(serviceEntry)
      })
    })

    console.log('updateProblemsUI:menuServices:', menuServices)
    
    this.zone.run(() => { 
      this.servicesMenu = menuServices
    })
    
  }

  
  async apiProblemList() {
    let req = this.api.problemList(async (problemList) => {
      console.log('apiProblemList:problemList:', problemList)
      this.pm.updateProblems(problemList)
      this.onProblemListUpdate.emit(problemList)
      await this.updateProblemsUI()
    });
    req.onError = (error) => { this.onApiError(error) };
  }

  

  async didSelectProblem() {
    console.log('didSelectProblem:', this.selectedProblem)
    if (!this.selectedProblem){return}
    this.pm.selectProblem(this.selectedProblem)
    this.onProblemSelected.emit(this.selectedProblem)
  }

  async didSelectService() {
    console.log('didSelectService:', this.selectedService)
    if (!this.selectedService){return}
    let serviceDesc = this.selectedService!.descriptor
    this.pm.selectService(serviceDesc)
    this.selectedArgs = serviceDesc.args
    console.log('didSelectService:selectedArgs:', this.selectedArgs)
    
    this.onServiceSelected.emit(serviceDesc)
  }

  async apiDownloadAttachment() {
    console.log('apiDownloadAttachment', this.selectedProblem?.name)

    if (!this.selectedProblem) { return }
    let problem_name = this.selectedProblem.name;

    let onAttachment = () => { console.log("Attachment packet received") };
    let onAttachmentInfo = (info: any) => { console.log('apiDownloadAttachment:info:', info) };

    let onData = (data: ArrayBuffer) => {
      console.log("apiDownloadAttachment:onData:", data);
      this.onAttachments.emit(data);
    };

    let req = this.api.GetAttachment(problem_name, onAttachment, onAttachmentInfo, onData);
    req.onError = (error) => { this.onApiError(error) };

  }


  public testOutput() {
    this.print("python main.py\n")
    this.apiProblemList()
  }


  public sendStdin() {
    let msg = this.sdtinInput.nativeElement.value ?? ""
    msg = msg.trim()
    console.log("sendStdin:", this.sdtinInput)
    if (msg == "") { return }

    this.sdtinInput.nativeElement.value = ""
    this.onStdin.emit(msg);
  }

  public sendOnEnter(event: KeyboardEvent) {
    if (event.key == 'Enter') { this.sendStdin(); }
  }


  injectCommand(command: string) {

    let event = new KeyboardEvent('keydown', { 'key': 'Enter' })
    // https://stackoverflow.com/a/44190874/320926
    // https://stackoverflow.com/a/30003941/320926
    // console.log(this.terminal.el)

    var enterKey = new KeyboardEvent('keydown', {
      code: 'Enter',
      key: 'Enter',
      charCode: 13,
      keyCode: 13
    });

    this.zone.run(() => {
      let term = this.terminal.el.nativeElement.children[0];
      this.terminal.focus(term);
      this.terminalService.sendCommand(command)
      this.terminal.command = command


      this.terminal.handleCommand(enterKey);

      //this.terminal.el.nativeElement.dispatchEvent(enterKey);
    })


  }

  execCommand(command: string) {
    let params = command.split(" ")
    let operation = params.splice(0, 1)[0]
    console.log('tokens: ', params)
    console.log('command: ', command)
    let response = 'Unknown command: ' + command;
    switch (operation) {
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


