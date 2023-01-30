import { Component, EventEmitter, Output, NgZone, Input, ViewChild, ElementRef } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { Subscription } from 'rxjs';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { FsNodeFolder, FsNodeFile, FsService } from 'src/app/services/fs-service/fs.service';
import { ProblemDescriptor, ServiceDescriptor, ArgsMap, ArgDescriptor, FilesMap, ProblemManagerService, FileDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';
import { PyodideDriver } from 'src/app/services/python-compiler-service/pydiode-driver';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { OverlayOptions } from 'primeng/api';
import { A } from '@tauri-apps/api/path-e12e0e34';


export class ServiceMenuEntry {
  constructor(
    public name = "",
    public descriptor: ServiceDescriptor,
  ){}
}


export class ProblemMenuEntry {
  constructor(
    public name = "",
    public descriptor: ProblemDescriptor,
  ){}
}

@Component({
  selector: 'tal-problem-widget',
  templateUrl: './problem-widget.component.html',
  styleUrls: ['./problem-widget.component.scss'],
})
export class ProblemWidgetComponent {
  @Output('onProblemChanged') public onProblemSelected = new EventEmitter<ProblemDescriptor>();
  @Output('onServiceChanged') public onServiceSelected = new EventEmitter<ServiceDescriptor>();
  @Output('onAttachments') public onAttachments = new EventEmitter<ArrayBuffer>();
  
  @Input('fslist') public fslist!: Array<FsNodeFile|FsNodeFolder>;

  @ViewChild("problemDropdown") public problemDropdown!: ElementRef
  @ViewChild("serviceDropdown") public serviceDropdown!: ElementRef
  public dropdownOptions: OverlayOptions;

  problemsMenu = new Array<ProblemDescriptor>();
  servicesMenu = new Array<ServiceDescriptor>();

  selectedProblem?: ProblemDescriptor;
  selectedService?: ServiceDescriptor;
  selectedArgs?: ArgsMap;
  selectedFiles?: FilesMap;
  selectedFile?: FileDescriptor;

  driver?:PyodideDriver
  
  regexFormat = true;
  showRegex = true;
  loading = false

  problemSub: Subscription

  constructor( public zone: NgZone,
               public api: ApiService,
               public pm: ProblemManagerService,
               public python: PythonCompilerService,)
  {
    this.driver = python.driver;
    this.problemSub = this.pm.onProblemsChanged.subscribe((clear:boolean)=>{ this.problemsDidChange(clear) })

    // https://primefaces.org/primeng/overlay
    //this.dropdownOptions = {appendTo:'body', mode: 'modal'}
    this.dropdownOptions = {appendTo:'body'}
  }
  
  ngOnInit() {
    this.reloadProblemList();
  }

  ngOnDestroy() {
    this.problemSub?.unsubscribe()
  }

  isLoading(){
    return this.loading;
  }

//args
  clenupRegex(re:RegExp){
    let text = re+""
    text = text.replace(/\/(.*)\//,'$1')
    text = text.replace(/\^(.*)\$/,'$1')
    text = text.replace(/\((.*)\)/,'$1')
    text = text.replace(/\|/g,' OR ')
    return text;
  }

  cleanupName(name:string){
    var pattern = new RegExp('[-_. ]+','g');
    return name.replace(pattern, " ")
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


//files
  async fileDidFocus(file:FileDescriptor,event:Event){
    console.log('fileDidFocus:',file.key,event)
  }

  async fileDidChange(file:FileDescriptor,event:any){
    console.log('fileDidChange:',file.key,event)

    if(!("value" in event)){return;}
    console.log('fileDidChange:value:found',event.value)
    let value = event.value
    if(!("path" in value )){return;}
    console.log('fileDidChange:path:found',value.path)
    let path = value.path
    
    
    let idDropdown = 'file-dropdown-' + file.key
    let dropdown = document.getElementById(idDropdown)
    if(!(dropdown instanceof HTMLElement)) {return}
    console.log('fileDidChange:dropdown:found',dropdown)
    
    if (path == ""){
      dropdown.style.color = ""
      file.value = ""
      return
    }

    let pathExist = await this.driver?.exists(path)
    console.log('fileDidChange:pathExist:',pathExist)
    if(!pathExist){
      dropdown.style.color = "red"
      file.value = ""
    }else{
      dropdown.style.color = "green"
      file.value = path
    }
  }
  
  async fileDidReset(file:FileDescriptor,event:Event){
    console.log('fileDidReset:',file.key,event)
    let idDropdown = 'file-dropdown-' + file.key
    let dropdown = document.getElementById(idDropdown)
    if(!(dropdown instanceof HTMLInputElement)) {return}
    dropdown.value = ""
    dropdown.style.color = ""
  }

//UI
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
    this.selectedFiles = undefined;
    

    this.problemsMenu = []
    this.servicesMenu = []
    this.loading = true


    console.log
    this.pm.updateProblems()
  }

  async problemsDidChange(clear:boolean) {

    this.problemsMenu = []
    this.servicesMenu = []
    this.loading = true


    if(clear) return
    
    let problemsMenu = new Array<ProblemDescriptor>(); // [...this.pm.problemList] // ez ?
    this.pm.problemList.forEach((problemDesc)=>{      
      problemsMenu.push(problemDesc)
    })
    problemsMenu = problemsMenu.sort((a,b)=>a>b?1:a<b?-1:0)
    console.log('updateProblemsUI:problemsMenu:', problemsMenu)
    
    this.problemsMenu = problemsMenu
    this.loading = false

  }



//API 
  async onApiError(message: string) {
    console.log("API Error: ", message)
  }

  async didSelectProblem() {
    console.log('didSelectProblem:', this.selectedProblem)
    if (!this.selectedProblem){return}
    this.pm.selectProblem(this.selectedProblem)
    

    let servicesMenu = new Array<ServiceDescriptor>();
    this.selectedProblem.services.forEach((serviceDesc)=>{
      servicesMenu.push(serviceDesc)
    })
    servicesMenu = servicesMenu.sort((a,b)=>a>b?1:a<b?-1:0)
    this.servicesMenu = servicesMenu
    console.log('didSelectProblem:servicesMenu:', servicesMenu)
    this.servicesMenu = servicesMenu
    

    //this.onProblemSelected.emit(this.selectedProblem)
  }

  async didSelectService() {
    console.log('didSelectService:', this.selectedService)
    if (!this.selectedService){return}
    this.pm.selectService(this.selectedService)
    this.selectedArgs = this.selectedService.args
    this.selectedFiles = this.selectedService.files
    console.log('didSelectService:selectedArgs:', this.selectedArgs)
    this.onServiceSelected.emit(this.selectedService)
  }

  async apiDownloadAttachment() {
    console.log('apiDownloadAttachment:', this.selectedProblem)
    if (!this.selectedProblem) { return }

    let onAttachment = () => { console.log("Attachment packet received") };
    let onAttachmentInfo = (info: any) => { console.log('apiDownloadAttachment:info:', info) };

    let onData = (data: ArrayBuffer) => {
      console.log("apiDownloadAttachment:onData:", data);
      this.onAttachments.emit(data);
    };

    let req = this.api.GetAttachment(this.selectedProblem.name, onAttachment, onAttachmentInfo, onData);
    req.onError = (error) => { this.onApiError(error) };

  }

}


