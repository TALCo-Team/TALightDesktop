import { Component, EventEmitter, Output, NgZone, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { ArgDescriptor, ParamsMap, ProblemDescriptor, ProblemList, ProblemMap, ServiceDescriptor, ServiceMap } from '../../../services/problem-manager-service/problem-manager.types';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ProjectEnvironment } from 'src/app/services/project-manager-service/project-manager.types';
import { FsNodeFile, FsNodeList } from 'src/app/services/fs-service/fs.service.types';
import { CompilerService } from 'src/app/services/compiler-service/compiler-service.service';
import { TerminalApiService } from 'src/app/services/terminal-api-service/terminal-api.service';
import { Meta } from 'src/app/services/api-service/api.service';
import { Packets } from 'src/app/services/api-service/api.packets';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';

@Component({
  selector: 'tal-terminal-widget',
  templateUrl: './terminal-widget.component.html',
  styleUrls: ['./terminal-widget.component.scss']
})
export class TerminalWidgetComponent implements OnInit {
  @Output('onAttachments') public onAttachments = new EventEmitter<ArrayBuffer>();
  @Output('onProblemChanged') public onProblemSelected = new EventEmitter<ProblemDescriptor>();

  public selectedProblem?: ProblemDescriptor
  public selectedService?: ServiceDescriptor

  public problemList=new ProblemList();
  public problems=new ProblemMap();
  public services=new ServiceMap();
  public savedParams=new ParamsMap();
  public response!: string;
  
  public onError = new EventEmitter<any>();
  public onProblemsChanged = new EventEmitter();
  public onResponseComplete = new EventEmitter();

  public terminalHistory:string[] = [];
  public terminalHistoryIndex: number = -1;

  public prompt: string = "TALight>";
  public commandConnectState: boolean = false;


  ////////////////////////////////////////////////////////////////////////

  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  public cmdConnect?:Commands.Connect;
  
  public project:ProjectEnvironment | null = null;

  public selectedFile?: FsNodeFile;
  public apiRun = false

  public fslistfile: FsNodeFile[] = [];

  private output_files:string[]|undefined = undefined;
  private current_output_file:string|undefined = undefined;

  private problemSearch!: string;
  private command!: string;
  private url!: string;
  private commandSplit!:string[];
  private connectParams = {};
  isBlurred: boolean = false;
  
  ////////////////////////////////////////////////////////////////////////


  constructor(  
    public zone: NgZone,
    private terminalService: TerminalService,
    public api: TerminalApiService,
    private compiler:CompilerService,
    private tutorialService : TutorialService,
    ) {
      this.tutorialService.onTutorialChange.subscribe( (tutorial)=>{this.isTutorialShown(tutorial)} ),
      this.tutorialService.onTutorialClose.subscribe( ()=>{this.isTutorialShown()} ) 
    }
  
  ngOnInit() {

    this.terminalService.commandHandler.subscribe(command => {
      
      this.onResponseComplete.subscribe({
        next: (payload:any)=>{ this.terminalService.sendResponse(this.response) }
      })
      
      // Prepare command string to analysis
      command = command.trim();
      this.commandSplit = command.split(' ');
      console.log("CommandSplit: ", this.commandSplit);

      // When 'rtal connect' is running
      if (this.commandConnectState) {
        if(!this.cmdConnect){return;}
        this.cmdConnect.sendBinary(command + "\n");
        this.response = '';
        
      }
      else {

        // save command in terminal history/cache
        this.terminalHistory.push(command)
        this.terminalHistoryIndex = this.terminalHistory.length;

        if (this.commandSplit[0] === 'rtal') {

          if (this.commandSplit.length == 1) {
            this.response = this.HelpMessage();
            this.onResponseComplete.emit();
          } else {
  
            switch(this.commandSplit[1]) {
              case 'help':
              case '--help':
              case '-h':
                this.response = this.HelpMessage();
                this.onResponseComplete.emit();
                break;
              case '-s':
              case '--server-url':

                if (this.commandSplit.length == 2) {
                  this.response = this.ErrorMessage02();
                  this.onResponseComplete.emit();
                } else {
                  this.url = this.commandSplit[2];
                  
                  if (this.commandSplit.length == 3) {
                    this.response = this.HelpMessage();
                    this.onResponseComplete.emit();
                  } else {
                    
                    
                    if (this.commandSplit[3] == 'get') {

                      if (this.commandSplit.length === 5) {
                        this.problemSearch = this.commandSplit[4]
                        this.onGetCommand();
                      } else {
                        this.response = this.ErrorMessage07(this.commandSplit[5]);
                        this.onResponseComplete.emit();
                      }
                      
                      
                    } else if (this.commandSplit[3] == 'list') {
                    
                      this.command = 'list';
                      this.getListProblems(this.url);

                    }
                    else if (this.commandSplit[3] == "connect") {

                      this.onConnectCommand();

                    } else {
                      this.response = this.ErrorMessage03(this.commandSplit[3]);
                      this.onResponseComplete.emit();
                    }
                  }
                  
                }
                break;
              case '-V':
              case '--version':
                this.response = "rtal 0.2.5";
                this.onResponseComplete.emit();
                break;
              default:
                this.response = this.ErrorMessage01(this.commandSplit[1]);
                this.onResponseComplete.emit();
            }
          }
        } else if (this.commandSplit[0] === 'clear' && this.commandSplit.length === 1) {
          
          let terminalContent: HTMLElement = document.getElementsByClassName('p-terminal-content')[0] as HTMLElement;
          let children = terminalContent.children;
          
          setTimeout(() => {
            let length = children.length;
            for(let index=0; index < length; index++) { terminalContent. removeChild(children[0]) }
          }, 0);
          
        }
        else {
          this.response = "Unknown command: '" + command + "'";
          this.onResponseComplete.emit();
        }
      }
    });
  }

  private isTutorialShown(tutorial? : any){

    console.log("TerminalWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === "TerminalWidgetComponent"){
      this.isBlurred = false
    }
    else{
      this.isBlurred = true
    }
  }

  ngOnDestroy() {}


  onGetCommand() {

    this.apiDownloadAttachment();
    this.response = '';
    this.selectedProblem = new ProblemDescriptor(this.problemSearch, new Meta(''));
    this.onProblemSelected.emit(this.selectedProblem);
    
    this.onResponseComplete.emit();
  }

  pressedCtrlC() {
    this.prompt = "TALight> ";
    this.commandConnectState = false;
    this.cmdConnect?.sendConnectStop();
  }

  onConnectCommand() {

    switch (this.api.setUrl(this.url)) {
      case 0:
        this.selectedService = undefined
        this.response = "";
    
        this.selectedService = new ServiceDescriptor('', new Packets.Service(''), new ProblemDescriptor('', new Meta('')))
    
        let condition = (sub:string) => sub == '-a';
        let isPresentArg = this.commandSplit.findIndex(condition)
    
        if (isPresentArg != -1) {
    
          let problem;
          let service;
    
          if(isPresentArg === 4) { problem = this.commandSplit[this.commandSplit.length-2]; service = this.commandSplit[this.commandSplit.length-1]}
          else if(isPresentArg === 5) {problem = this.commandSplit[4]; service = this.commandSplit[this.commandSplit.length-1]}
          else if(isPresentArg === 6) {problem = this.commandSplit[4]; service = this.commandSplit[5]}
          else { 
            this.response = "Syntax Error"
            this.onResponseComplete.emit();
            break;
          }

          let params = new Map<string, string>();
    
         // rtal connect -a param1=value -a param2=value
          for (let index = isPresentArg; index < this.commandSplit.length; index++) { 
    
            if (this.commandSplit[index] === '-a' && index < this.commandSplit.length-1) {
              index = index + 1;
    
              if (this.commandSplit[index].includes('=')) {
                let paramAssignment = this.commandSplit[index].split('=');
                if (paramAssignment.length === 2) {
                  params.set(paramAssignment[0], paramAssignment[1])
                }
              }
            } else {
              this.response = this.ErrorMessage08();
              this.onResponseComplete.emit();
              return;
            }
    
          }
    
          if (problem!= undefined && service != undefined) {
            this.selectedService.parent.name = problem;
            this.selectedService.name = service;
            this.connectParams = Object.fromEntries(params);
          }
    
        } else {
    
          this.selectedService.parent.name = this.commandSplit[4];
          this.selectedService.name = this.commandSplit[5];
          this.connectParams = {};
    
        }
    
        this.prompt = "";
        this.runConnectAPI();
        break;

      case -1:
        this.response = this.ErrorMessage04();
        this.onResponseComplete.emit();
        break;
  
      case -2:
        this.response = this.ErrorMessage05();
        this.onResponseComplete.emit();
        break;

    }

    this.onResponseComplete.emit();
  }


  public async apiDownloadAttachment() {

    switch (this.api.setUrl(this.url)) {
      case 0:
        let onAttachment = () => { console.log("Attachment packet received") };
        let onAttachmentInfo = (info: any) => { console.log('apiDownloadAttachment:info:', info) };
    
        let onData = (data: ArrayBuffer) => {
          console.log("apiDownloadAttachment:onData:", data);
          this.onAttachments.emit(data);
        };
    
        let req = this.api.GetAttachment(this.problemSearch, onAttachment, onAttachmentInfo, onData);
        req.onError = (error) => {
          this.response = "ERROR Cannot download attachment: Problem '" + this.problemSearch + "' does not exists"
          this.onResponseComplete.emit();
        };
        break;

      case -1:
        this.response = this.ErrorMessage04();
        this.onResponseComplete.emit();
        break;

      case -2:
        this.response = this.ErrorMessage05();
        this.onResponseComplete.emit();
         break;
    }

  }
  
  public async getListProblems(url:string) {
    this.selectedProblem=undefined;
    this.selectedService=undefined;
    this.problemList=[];
    this.problems.clear();
    this.services.clear();

    switch(this.api.setUrl(url)) {
      case 0:
        let req = this.api.problemList((problemMap) => {

          console.log('apiProblemList:problemList:', problemMap)
          problemMap.forEach(( problem, name )=>{
            let problemDesc = new ProblemDescriptor(name, problem)
            this.problemList.push(problemDesc)
            this.problems.set(problemDesc.key,problemDesc);
            problemDesc.services.forEach((serviceDesc)=>{
              this.services.set(serviceDesc.key, serviceDesc)
            })
          })

          this.onListCommand();
        });
        
      
        req.onError = (error) => { 
          this.response = "ERROR: Cannot connect to '" + this.url + "'";
          this.onResponseComplete.emit();
        };

        break;
      case -1:
        this.response = this.ErrorMessage04();
        this.onResponseComplete.emit();
        
        break;
      case -2:
        this.response = this.ErrorMessage05();
        this.onResponseComplete.emit();

        break;
    }
  }


  onListCommand() {

    if (this.commandSplit.length == 4) {

      // eg. rtal -s <server-url> list
      this.problemList.sort((a, b) => a.name.localeCompare(b.name));

      this.response = "";
      this.problemList.forEach(problem => this.response += "- " + problem.name + "\n")

    }
    else if (this.commandSplit.length == 5) {

      if(this.commandSplit[4] == '-v' || this.commandSplit[4] == '--verbose') { 

        // eg. rtal -s <server-url> list -v
        
        this.problemList.sort((a, b) => a.name.localeCompare(b.name));

        this.response = "";

        this.problemList.forEach(problem => {
          this.response += "- " + problem.name + "\n";

          var ArrayService:ServiceDescriptor[] = [];
          problem.services.forEach(service => ArrayService.push(service))

          ArrayService.sort((a, b) => a.name.localeCompare(b.name));

          ArrayService.forEach(service => {
            this.response += "  * " + service.name + "\n";

            var ArrayArg:ArgDescriptor[] = [];
            service.args.forEach(arg => ArrayArg.push(arg))

            ArrayArg.sort((a, b) => a.name.localeCompare(b.name));

            ArrayArg.forEach(arg => {
              this.response += "    # " + arg.name + " [" + arg.default + "]\n";
            })

            service.files.forEach(file => {
              this.response += "    \u{00A7} " + file.name + "\n";
            })
          })
        })

      } else {

        // eg. rtal -s <server-url> list problem_name

        this.problemList.sort((a, b) => a.name.localeCompare(b.name));

        this.response = "";
        
        let condition = (problem:any) => problem.name == this.commandSplit[4];
        let problemFound = this.problemList.find(condition);

        if (problemFound  != undefined) {

          var ArrayService:ServiceDescriptor[] = [];
          problemFound.services.forEach(service => ArrayService.push(service))

          ArrayService.sort((a, b) => a.name.localeCompare(b.name));

          ArrayService.forEach(service => {
            this.response += "  * " + service.name + "\n";

            var ArrayArg:ArgDescriptor[] = [];
            service.args.forEach(arg => ArrayArg.push(arg))

            ArrayArg.sort((a, b) => a.name.localeCompare(b.name));

            ArrayArg.forEach(arg => {
              this.response += "    # " + arg.name + " [" + arg.default + "]\n";
            })

            service.files.forEach(file => {
              this.response += "    \u{00A7} " + file.name + "\n";
            })
          })
        
        } else {
          this.response = "ERROR: Problem '" + this.commandSplit[4] + "' does not exists\n";
        }
      
      }

    }
    else if (this.commandSplit.length == 6) {
      
      this.response = "";

      let condition = undefined;

      if(this.commandSplit[4] == '-v' || this.commandSplit[4] == '--verbose') { condition = (problem:any) => problem.name == this.commandSplit[5]; } 
      if(this.commandSplit[5] == '-v' || this.commandSplit[5] == '--verbose') { condition = (problem:any) => problem.name == this.commandSplit[4]; }

      if (condition  != undefined) {
        let problemFound = this.problemList.find(condition);

        if (problemFound  != undefined) {
          // eg. rtal -s <server-url> list -v problem_name OR rtal -s <server-url> list problem_name -v

          var ArrayService:ServiceDescriptor[] = [];
          problemFound.services.forEach(service => ArrayService.push(service))

          ArrayService.sort((a, b) => a.name.localeCompare(b.name));

          ArrayService.forEach(service => {
            this.response += "  * " + service.name + "\n";

            var ArrayArg:ArgDescriptor[] = [];
            service.args.forEach(arg => ArrayArg.push(arg))

            ArrayArg.sort((a, b) => a.name.localeCompare(b.name));

            ArrayArg.forEach(arg => {
              this.response += "    # " + arg.name + " [" + arg.default + "] " + arg.regex + "\n";
            })

            service.files.forEach(file => {
              this.response += "    \u{00A7} " + file.name + "\n";
            })
          })
        }
        else
        { 
          this.response = "ERROR: Problem '" + this.commandSplit[4] + "' does not exists\n";
        }
      }
      else {
        
        if (this.commandSplit[4].startsWith('-')) {this.response = this.ErrorMessage01(this.commandSplit[4])}
        else if (this.commandSplit[5].startsWith('-')) {this.response = this.ErrorMessage01(this.commandSplit[5])}
        else { this.response = this.ErrorMessage06(this.commandSplit[5]) }
        
      }

    } else {
      this.response = this.ErrorMessage06(this.commandSplit[6]);
    }

    this.onResponseComplete.emit();
  }

  ErrorMessage01(option: string): string {
    
    var res = 
      "ERROR: Found argument '" + option + "' which wasn't expected, or isn't valid in this context" +
      "\n\n\tIf you tried to supply '" + option + "' as a value rather than a flag, use '-- " + option + "'" +
      "\n\n USAGE: \n \trtal [OPTIONS] <SUBCOMMAND> \n\n For more information try --help";

    return res;
  }

  ErrorMessage02(): string {
    
    var res = 
      "ERROR: The argument '--server-url <SERVER_URL>' requires a value but none was supplied" +
      "\n\nFor more information try --help";

    return res;
  }

  ErrorMessage03(subcommand: string): string {
    
    var res = 
      "ERROR: The subcommand '" + subcommand + "' wasn't recognized" +
      "\n\n USAGE: \n \trtal [OPTIONS] <SUBCOMMAND> \n\n For more information try --help";

    return res;
  }

  ErrorMessage04(): string {
    
    var res = 
      "ERROR: Cannot connect to '"  + this.url + "': HTTP format error: invalid format";

    return res;
  }


  ErrorMessage05(): string {
    
    var res = 
      "ERROR: Cannot connect to '"  + this.url + "': URL error: URL scheme not supported";

    return res;
  }

  ErrorMessage06(argument: string): string {
    
    var res = 
      "ERROR: Found argument '" + argument + "' which wasn't expected, or isn't valid in this context" +
      "\n\n USAGE: \n \trtal list [OPTIONS] <SUBCOMMAND> \n\n For more information try --help";

    return res;
  }

  ErrorMessage07(argument: string): string {
    
    var res = 
      "ERROR: Found argument '" + argument + "' which wasn't expected, or isn't valid in this context" +
      "\n\n USAGE: \n \trtal get [OPTIONS] <PROBLEM> \n\n For more information try --help";

    return res;
  }

  ErrorMessage08(): string {
    
    var res = 
      "ERROR: The argument '--service-arg <SERVICE_ARG>' requires a value but none was supplied" +
      "\n\n For more information try --help";

    return res;
  }

  HelpMessage(): string {
    
    var res = 
      "rtal 0.2.5" +
      "\n\nUSAGE:\n\trtal [OPTIONS] <SUBCOMMAND>" +
      "\n\nOPTIONS:"+
      "\n\t-h, --help\t\t\tPrint help information" +
      "\n\t-s, --server-url <SERVER_URL>\tServer URL [default ws://127.0.0.1:8008/]" +
      "\n\t-V, --version\t\t\tPrint version information" +
      "\n\nSUBCOMMANDS:" +
      "\n\tconnect\tConnect to problem evaluator" +
      "\n\tget\tDownload problem attachments" +
      "\n\thelp\tPrint this message or the help of the given subcommand(s)" +
      "\n\tlist\tList available problems";
    return res;
  }


  UndoHistory() {

    if (this.terminalHistory.length > 0) {
      if (this.terminalHistoryIndex == -1) {
        this.terminalHistoryIndex = this.terminalHistory.length - 1;
      }
      else {
        if (this.terminalHistoryIndex >= 1) {
          this.terminalHistoryIndex -= 1;
        }
      }

      var my_obj = document.querySelectorAll('.p-terminal-input')[0] as HTMLInputElement;
      my_obj.value = this.terminalHistory[this.terminalHistoryIndex];

      var event = document.createEvent('Event');
      event.initEvent('input', true, true);
      my_obj.dispatchEvent(event);
    }
  }


  RedoHistory() {

    if (this.terminalHistory.length > 0) {

      var my_obj = document.querySelectorAll('.p-terminal-input')[0] as HTMLInputElement;

      if (this.terminalHistoryIndex == -1) { return }
      else {
        if (this.terminalHistoryIndex < this.terminalHistory.length - 1) {
          this.terminalHistoryIndex += 1;
          my_obj.value = this.terminalHistory[this.terminalHistoryIndex];
        }
        else {
          my_obj.value = "";
        }
      }

      var event = document.createEvent('Event');
      event.initEvent('input', true, true);
      my_obj.dispatchEvent(event);
    }
  }


  public async runConnectAPI(){
    this.apiRun = true
    await this.apiConnect()
    this.apiRun = false
  }
  
  async apiConnectReset(){
    this.current_output_file = undefined;
    this.cmdConnect = undefined;

    console.log("apiConnect:didConnectData:cmdConnect:", this.cmdConnect);
  }

  
  async apiConnect(){
    console.log("apiConnect")
    
    if(!this.selectedService){ return false }
    
    console.log("apiConnect:service:ok")

    let config = await this.compiler.readConfig()
    if (!config){return false}
    console.log("apiConnect:config:ok")

    //Open Connection
    let problem = this.selectedService.parent.name;
    let service = this.selectedService.name;
    let args = this.connectParams;
    let tty = false //true: bash code coloring, backspaces, etc
    let token =  (config.TAL_TOKEN && config.TAL_TOKEN!=""?config.TAL_TOKEN:undefined)
    let files =  new Map<string,string>();
    
    console.log("apiConnect:params:problem",problem)
    console.log("apiConnect:params:service",service)
    console.log("apiConnect:params:args",args)
    console.log("apiConnect:params:tty",tty)
    console.log("apiConnect:params:token",token)
    console.log("apiConnect:params:files",files)
    
    let onConnectionStart = () => {this.didConnectStart()};
    let onConnectionBegin = (msg: string[]) => {this.didConnectBegin(msg)};
    let onConnectionClose = (msg: string[]) => {this.didConnectClose(msg)};
    let onData = (data: string)=>{ this.didConnectData(data)};
    let onBinaryHeader = (msg: any)=>{ this.didRecieveBinaryHeader(msg)};
    let onError = (msg: any)=>{ this.didError(msg)};

    this.cmdConnect = await this.api.Connect(
      problem, 
      service, 
      args,
      tty,
      token,
      files,
      onConnectionBegin,
      onConnectionStart,
      onConnectionClose,
      onData,
      onBinaryHeader,
      onError
    );
    console.log("apiConnect:DONE")
       
    return true
  }
  
  async didError(msg:string) {
    this.cmdConnect = undefined

    this.project?.driver.stopExecution()

    this.prompt = "TALight> ";
    this.commandConnectState = false;

    this.response = "ERROR: " + msg;
    this.onResponseComplete.emit();
  }

  async didConnectStart(){
    console.log("apiConnect:didConnectStart")
  }

  async didConnectBegin(message: string[]){
    console.log("apiConnect:didConnectBegin:", message)
  }

  async didConnectClose(message: string[]){
    console.log("apiConnect:didConnectionClose:",message)

    if(message && message.length > 0 && message[0] !== "") {
      this.output_files = message;
    }
    else {
      this.apiConnectReset();
      console.log("apiConnect:didConnectClose:cmdConnect:", this.cmdConnect);
    }

    this.prompt = "TALight> ";
    this.commandConnectState = false;
  }

  async didConnectData(data: string){
    console.log("apiConnect:didConnectData:", data)
    
    if(this.output_files && this.current_output_file){

      if(this.current_output_file){
        this.project?.driver.writeFile("/" + this.current_output_file, data)
      };
      if(this.current_output_file === this.output_files[this.output_files.length - 1]){
        this.apiConnectReset();
      }
      console.log("apiConnect:didConnectData:cmdConnect:", this.cmdConnect);

      this.response = "RESULTS:\n\n" + data;
      this.onResponseComplete.emit();
    }
    else {
      this.sendStdin(data, true);
    }
  }

  async didRecieveBinaryHeader(message: any){
    console.log("apiConnect:didRecieveBinaryHeader:", message)

    this.current_output_file = message.name;
    if(this.current_output_file){ this.project?.driver.writeFile("/" + this.current_output_file, "")};
  }

  public sendStdin(msg:string, fromAPI=false){
    console.log("sendStdin:")

    this.response += msg;
    this.onResponseComplete.emit();
    this.commandConnectState = true;
  }

}