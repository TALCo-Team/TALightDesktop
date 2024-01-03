import { Component, EventEmitter, Output, NgZone, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';

import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';
import { MessageService, OverlayOptions } from 'primeng/api';
import { ServiceDescriptor, ProblemDescriptor, ArgsMap, FilesMap, FileDescriptor, ArgDescriptor } from 'src/app/services/problem-manager-service/problem-manager.types';
import { Dropdown } from 'primeng/dropdown';
import { CompilerDriver } from 'src/app/services/compiler-service/compiler-service-driver';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { ProjectEnvironment } from 'src/app/services/project-manager-service/project-manager.types';


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
  @Output('onProblemListChanged') public onProblemListChanged = new EventEmitter();
  
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

  filePathList = new Array<string>();

  project: ProjectEnvironment | null = null;

  
  regexFormat = true;
  showRegex = true;
  loading = false

  problemSub: Subscription

  constructor( public zone: NgZone,
               public api: ApiService,
               public pm: ProblemManagerService,
               public prj: ProjectManagerService,
               private messageService: MessageService,)
  {
    this.problemSub = this.pm.onProblemsChanged.subscribe((clear:boolean)=>{ this.problemsDidChange(clear) })
    this.prj.onProjectChanged.subscribe((_) => {
      this.project = prj.getCurrentProject();
      this.saveProblemServiceConfig();
    })

    this.pm.onProblemsLoaded.subscribe((_) =>{
      this.loadProblemServiceConfig();
    })

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

  refreshFilePathList(){
    this.filePathList = [...this.filePathList]
  }


  private loadProblemServiceConfig() {
    this.selectedProblem = this.pm.getProblem(localStorage.getItem("problema") || "");
    this.callDidSelectProblem();
    this.selectedService = this.pm.getService(localStorage.getItem("servizio") || "");
    this.callDidSelectService();
  }

  public async callDidSelectProblem () {
    this.didSelectProblem();
  }

  public async callDidSelectService () {
    this.didSelectService();
  }

  private saveProblemServiceConfig() {
    this.pm.onProblemSelected.subscribe((problem) => {
       //alert('ricevuto problem selected: '+ problem.name);
      this.writeTofile(this.project);
      this.project?.onProjectConfigChanged.subscribe((_) => {
        //alert('config pronto in problem');
        this.writeTofile(this.project);
      })
    })
    //Daniel
    this.onServiceSelected.subscribe((service) => {
      //alert('ricevuto service selected: '+ service.name);
      this.writeTofile(this.project);
      this.project?.onProjectConfigChanged.subscribe((_) => {
        //alert('config pronto in service');
        this.writeTofile(this.project);
      })
    })//!Daniel
  }

  public async writeTofile(project: ProjectEnvironment | null) {
    //alert('write to file')
    project?.config?.parseFile(project.config);
    if (project != null && project.config != null) {
      if (this.selectedProblem != undefined) {
        project.config.TAL_PROBLEM = this.selectedProblem.name
        if (this.selectedService != undefined)
          project.config.TAL_SERVICE = this.selectedService.name
        else
          project.config.TAL_PROBLEM = "";
      }
      //project.config.TAL_SERVER = this.url;
      //alert(project.config.TAL_SERVER);
      //alert('scrivo sul file il problema');
      await project.config.save(project.driver);
    }
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
    name = name.replace(pattern, " ")
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name
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

  async validateArgs() {
    let result = undefined;
    if (this.selectedService) { result = this.pm.validateArgs(this.selectedService); }

    return result;
  }


//files

  async fileDidChange(file:FileDescriptor,event:{ originalEvent: Event, value?: string }){
    console.log('fileDidChange:',file.key,event)
    let path = event.value ?? ""

    let idDropdown = 'file-dropdown-' + file.key
    let dropdown = document.getElementById(idDropdown)
    if(!(dropdown instanceof HTMLElement)) {return}
    console.log('fileDidChange:dropdown:found',dropdown)
    
    if (path == ""){
      dropdown.style.color = ""
      //file.value = ""
      return
    }

    let pathExist = await this.project?.driver.exists(path)
    console.log('fileDidChange:pathExist:',pathExist)
    if(!pathExist){
      dropdown.style.color = "red"
      //file.value = ""
    }else{
      dropdown.style.color = "green"
      //file.value = path
    }
  }
  
  async fileDidReset(file:FileDescriptor,event:Event){
    console.log('fileDidReset:',file.key,event)
    let idDropdown = 'file-dropdown-' + file.key
    let dropdown = document.getElementById(idDropdown)
    console.log('fileDidReset:', dropdown)
    if(!(dropdown instanceof Dropdown)) {return}
    dropdown.clear(event)
    file.value = ""
    
    this.refreshFilePathList()
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
    problemsMenu = problemsMenu.sort((a,b)=>a.name.toLowerCase()>b.name.toLowerCase()?1:a.name.toLowerCase()<b.name.toLowerCase()?-1:0)
    console.log('updateProblemsUI:problemsMenu:', problemsMenu)
    
    this.problemsMenu = problemsMenu
    this.loading = false

    this.onProblemListChanged.emit();

  }



//API 
  async onApiError(message: string) {
    console.log("API Error: ", message)
  }

  async didSelectProblem() {
    this.selectedService = undefined;
    this.selectedArgs = undefined;
    this.selectedFiles = undefined;
    
    console.log('didSelectProblem:', this.selectedProblem)
    if (!this.selectedProblem){return}
    this.pm.selectProblem(this.selectedProblem)
    

    let servicesMenu = new Array<ServiceDescriptor>();
    this.selectedProblem.services.forEach((serviceDesc)=>{
      servicesMenu.push(serviceDesc)
    })
    servicesMenu = servicesMenu.sort((a,b)=>a.name.toLowerCase()>b.name.toLowerCase()?1:a.name.toLowerCase()<b.name.toLowerCase()?-1:0)
    this.servicesMenu = servicesMenu
    console.log('didSelectProblem:servicesMenu:', servicesMenu)
    this.servicesMenu = servicesMenu

    this.onProblemSelected.emit(this.selectedProblem)
  }

  async didSelectService() {
    console.log('didSelectService:', this.selectedService)
    if (!this.selectedService){return}
    this.pm.selectService(this.selectedService)
    this.selectedArgs = this.selectedService.args
    this.selectedFiles = this.selectedService.files
    console.log('didSelectService:selectedArgs:', this.selectedArgs)
    this.onServiceSelected.emit(this.selectedService)   

    this.refreshFilePathList()
  }

  async apiDownloadAttachment() {
    console.log('apiDownloadAttachment:', this.selectedProblem)
    if (!this.selectedProblem) { 
      this.messageService.add({
        key: 'br',
        severity: 'error',
        summary: 'Error',
        detail: 'No problem selected',
    });

      return }

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


