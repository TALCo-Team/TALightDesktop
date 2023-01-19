import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, NgZone, ElementRef } from '@angular/core';
import { Terminal, TerminalService } from 'primeng/terminal';
import { Subscription } from 'rxjs';
import { ApiService, Meta, ProblemDescriptor } from 'src/app/services/api-service/api.service';
//import { Terminal } from 'xterm';

export class ProblemMenuEntry {
  label = ""
  value = ""
  problem?: ProblemDescriptor
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
  @Output('attachments') public onAttachments = new EventEmitter<ArrayBuffer>();

  @ViewChild("terminal") public terminal!: Terminal;
  @ViewChild("output") public output!: ElementRef;
  @ViewChild("sdtinInput") public sdtinInput!: ElementRef;



  public outputText: string = "";



  commandSub: Subscription
  problemList = new Map<string, Meta>()
  problems = new Array<ProblemMenuEntry>();
  selectedName = "";
  selectedProblem?: ProblemDescriptor;


  constructor(private terminalService: TerminalService, private zone: NgZone, private api: ApiService) {
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

  async updateProblemsUI() {

    let problemList = Array.from(this.problemList.entries())

    let menu = new Array<ProblemMenuEntry>();
    for (var idx in problemList) {
      let name = problemList[idx][0];
      let metadata = problemList[idx][1];
      //console.log("updateProblemsUI:metadata:",name,metadata)
      if (!metadata) { continue }
      let menuEntry = new ProblemMenuEntry()
      menuEntry.value = name
      menuEntry.label = name.replace(/[_-]+/g, " ")
      menuEntry.problem = new ProblemDescriptor(name, metadata)
      menu.push(menuEntry)
      //console.log('updateProblemsUI:problem:',menu)
    }
    console.log('updateProblemsUI:problems:', menu)
    menu = menu.sort((a, b) => {
      if (a.value == b.value) return 0
      if (a.value > b.value) return 1
      if (a.value < b.value) return -1
      return 0
    })
    this.zone.run(() => { this.problems = menu })
  }

  async reloadProblemList(){
    this.apiProblemList()
  }
  
  async apiProblemList() {
    let req = this.api.problemList(async (problemList) => {
      console.log('apiProblemList:problemList:', problemList)
      this.problemList = problemList
      this.onProblemListUpdate.emit(problemList)
      await this.updateProblemsUI()
    });
    req.onError = (error) => { this.onApiError(error) };
  }

  async didSelectProblem() {
    let name = this.selectedName;
    console.log('didSelectProblem', name)
    let meta = this.problemList.get(name)
    if (!meta) { return }
    this.selectedProblem = new ProblemDescriptor(name, meta)
    this.onProblemSelected.emit(this.selectedProblem)
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


