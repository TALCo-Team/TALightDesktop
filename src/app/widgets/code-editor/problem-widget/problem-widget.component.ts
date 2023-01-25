import { Component, EventEmitter, Output, ViewChild, NgZone, ElementRef } from '@angular/core';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { ProblemDescriptor, ServiceDescriptor, ArgsMap, ArgDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';


export class ServiceMenuEntry {
  constructor(
    public problem = "",
    public service = "",
    public descriptor: ServiceDescriptor,
  ){}
}

@Component({
  selector: 'tal-problem-widget',
  templateUrl: './problem-widget.component.html',
  styleUrls: ['./problem-widget.component.scss'],
})
export class ProblemWidgetComponent {

  @Output('input') public onInput = new EventEmitter<InputEvent>();
  @Output('stdin') public onStdin = new EventEmitter<string>(); 
  @Output('problemListUpdate') public onProblemListUpdate = new EventEmitter<Map<string, Meta>>();
  @Output('problemChanged') public onProblemSelected = new EventEmitter<ProblemDescriptor>();
  @Output('serviceChanged') public onServiceSelected = new EventEmitter<ServiceDescriptor>();
  @Output('attachments') public onAttachments = new EventEmitter<ArrayBuffer>();

  @ViewChild("output") public output!: ElementRef;
  @ViewChild("sdtinInput") public sdtinInput!: ElementRef;

  public outputText: string = "";

  servicesMenu = new Array<ServiceMenuEntry>();
  selectedProblem?: ProblemDescriptor;
  selectedService?: ServiceMenuEntry;
  selectedArgs?: ArgsMap;
  regexFormat = true;
  showRegex = true;


  constructor( public zone: NgZone,
               public api: ApiService,
               public pm: ProblemManagerService){}
  
  ngOnInit() {
    this.apiProblemList();
  }

  ngOnDestroy() {}


  clearOutput() {
    this.zone.run(() => this.outputText = "")
  }

  clenupRegex(re:RegExp){
    let text = re+""
    text = text.replace(/\/(.*)\//,'$1')
    text = text.replace(/\^(.*)\$/,'$1')
    text = text.replace(/\((.*)\)/,'$1')
    text = text.replace(/\|/g,' OR ')
    return text;
  }

  readableRegex(re:RegExp){
    let text = re+""
    text = text.replace(/\/(.*)\//,'$1')
    text = text.replace(/\^(.*)\$/,'$1')
    text = text.replace(/\[([^\]]*)\]/, (match:string, content:string)=>{
      if ( content.startsWith('^') ){
        return ' invalid('+content.slice(1)+') '
      }
      return ' valid('+content.slice(1)+') '
    })
    text = text.replace(/\(([^|]+|)*([^|]+)*\)/g,(match:string, options:string, last:string)=>{
      console.log('OROR:',match, options, last)
      return text.replace(/\((.*)\)/,'$1').replace(/\|/g,' OR ')
    })
    return text
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
  
  async argDidFocus(arg:ArgDescriptor,event:Event){
    console.log('argDidFocus:',arg,event)
    let idPanel = 'args-regex-panel-' + arg.key
    let idRegex = 'args-regex-' + arg.key
    
    let panel = document.getElementById(idPanel)
    let regex = document.getElementById(idRegex)
    
    if(!(panel instanceof HTMLElement)) {return}
    if(!(regex instanceof HTMLElement)) {return}
    console.log('argDidFocus:show!')
    panel.style.display = "flex"
    if(regex.style.color == "red"){
      regex.style.color = "orange"
    }else{
      regex.style.color = ""
    }
    
  }

  async argDidChange(arg:ArgDescriptor,event:Event){
    console.log('argDidChange:',arg,event)
    let idPanel = 'args-regex-panel-' + arg.key
    let idRegex = 'args-regex-' + arg.key
    
    let panel = document.getElementById(idPanel)
    let regex = document.getElementById(idRegex)
    
    if(!(panel instanceof HTMLElement)) {return}
    if(!(regex instanceof HTMLElement)) {return}

    console.log('argDidFocus:validate')
    let issues = this.pm.validateArg(arg)
    if(issues !== null){
      regex.style.color = "red"
      panel.style.display = "flex"
    }else if(arg.value != arg.default){
      regex.style.color = "green"
      panel.style.display = "flex"
    }else{
      regex.style.color = ""
      panel.style.display = "none"
    }
  }

  async argDidReset(arg:ArgDescriptor,event:Event){
    console.log('argDidReset:',arg.key,event)
    arg.value = arg.default ?? ""
    this.argDidChange(arg,event)
  }

  async toggleShowRegex(arg:ArgDescriptor,event:Event){
    let idPanel = 'args-regex-panel-' + arg.key
    let panel = document.getElementById(idPanel)
    if(!(panel instanceof HTMLElement)) {return}
    panel.style.display = panel.style.display == 'none' ? 'flex' : 'none';
  }

  async toggleRegexFormat(arg:ArgDescriptor,event:Event){
    let idRegex = 'args-regex-'+arg.key;
    let regex = document.getElementById(idRegex)
    if(!(regex instanceof HTMLElement)) {return}
    let content;
    if(regex.classList.contains('format-regex-simple')){
      regex.classList.remove('format-regex-simple')
      regex.innerText = arg.regex + ""
    }else{
      regex.classList.add('format-regex-simple')
      regex.innerText = this.clenupRegex(arg.regex)
    }
  }

  async reloadProblemList(){
    this.selectedProblem = undefined;
    this.selectedService = undefined;
    this.selectedArgs = undefined;
    this.servicesMenu = []
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
    console.log('apiDownloadAttachment:', this.selectedService)
    if (!this.selectedService) { return }
    let problem = this.selectedService.descriptor.parent;
    if(!problem) {return;}
    
    let onAttachment = () => { console.log("Attachment packet received") };
    let onAttachmentInfo = (info: any) => { console.log('apiDownloadAttachment:info:', info) };

    let onData = (data: ArrayBuffer) => {
      console.log("apiDownloadAttachment:onData:", data);
      this.onAttachments.emit(data);
    };

    let req = this.api.GetAttachment(problem.name, onAttachment, onAttachmentInfo, onData);
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

}


