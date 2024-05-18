import { Component, EventEmitter, Output, NgZone, Input, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService, ApiState } from 'src/app/services/api-service/api.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { MessageService, OverlayOptions } from 'primeng/api';
import { ServiceDescriptor, ProblemDescriptor, ArgsMap, FilesMap, FileDescriptor, ArgDescriptor } from 'src/app/services/problem-manager-service/problem-manager.types';
import { Dropdown } from 'primeng/dropdown';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { AutoComplete } from 'primeng/autocomplete';


export class ServiceMenuEntry {
  constructor(
    public name = "",
    public descriptor: ServiceDescriptor,
  ) { }
}

export class ProblemMenuEntry {
  constructor(
    public name = "",
    public descriptor: ProblemDescriptor,
  ) { }
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
  @ViewChild("statusDropdown") public statusDropdown!: ElementRef
  @ViewChild("urlInput") public urlInput?: AutoComplete;
  @ViewChild("statusDot") public statusDot?: ElementRef;
  @ViewChild("messageBox") public messageBox?: ElementRef;
  
  public dropdownOptions: OverlayOptions;

  problemsMenu = new Array<ProblemDescriptor>();
  servicesMenu = new Array<ServiceDescriptor>();

  selectedProblem?: ProblemDescriptor;
  selectedService?: ServiceDescriptor;
  selectedArgs?: ArgsMap;
  selectedFiles?: FilesMap;
  selectedFile?: FileDescriptor;

  filePathList = new Array<string>();
  urlCache: string[] = []

  urlInputClass = ""

  escapeRegEx = /[.*+?^${}()|[\]\\]/g

  url
  lastUrl: string| undefined;
  
  subApiState
  subProblemError

  regexFormat = true;
  showRegex = true;
  loading = false

  problemSub: Subscription
  isBlurred: boolean = false;

  constructor( public zone: NgZone,
               public api: ApiService,
               public pm: ProblemManagerService,
               private tutorialService: TutorialService,
               private messageService: MessageService,
               public pms: ProjectManagerService,
              )
  {
    this.urlCache = [...this.api.urlCache]
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) }),
    this.problemSub = this.pm.onProblemsChanged.subscribe((clear:boolean)=>{ this.problemsDidChange(clear) })
    this.subApiState = this.api.onApiStateChange.subscribe((state:ApiState)=>{this.updateState(state)})
    this.subProblemError = this.pm.onError.subscribe((_)=>{this.stateBad()})
    
    this.url = api.url;
    this.lastUrl = this.url + "";
    
    this.pms.currentProjectChanged.subscribe(() => {
      this.pms.getCurrentProject().onProjectConfigChanged.subscribe(() => {
        this.saveProblemServiceConfig();
      })
    })
    
    this.pm.onProblemsLoaded.subscribe((_) =>{ this.loadProblemServiceConfig() })
    this.pms.currentProjectChanged.subscribe(() =>{ this.updateCurrentTabInfo() })

    // https://primefaces.org/primeng/overlay
    //this.dropdownOptions = {appendTo:'body', mode: 'modal'}
    this.dropdownOptions = { appendTo: 'body' }
  }

  ngOnInit() {
    this.reloadProblemList();
    this.lastUrl = this.api.getLastInsertedUrl();
    this.url = this.lastUrl;
    this.isBlurred = true;

    if (this.urlInput) {
      this.urlInput.writeValue(this.url);
      //TODO Daniel this.projectConfig.TAL_SERVER = this.url;
    }
  }

  private isTutorialShown(tutorial?: any) {
    console.log("ProblemWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === "ProblemWidgetComponent")
      this.isBlurred = false
    else
      this.isBlurred = true
  }

  ngOnDestroy() {
    this.problemSub?.unsubscribe()
  }

  isLoading() {
    return this.loading;
  }

  refreshFilePathList() {
    this.filePathList = [...this.filePathList]
  }

  filterSuggestions(event: any) {
    let query = event.query.replace(this.escapeRegEx, '\\$&')
    let filter = new RegExp(".*" + query + ".*")
    let urlCache: string[] = []
    this.api.urlCache.forEach((url: string) => {
      if (url.match(filter)) {
        urlCache.push(url)
      }
    });
    this.urlCache = urlCache
  }

  public changeURL() {
    if(this.lastUrl == this.url){return}
    this.stateIdle()
    let dot = this.statusDot!.nativeElement as HTMLElement
    console.log("changeURL:dot:", dot)
    let url = this.url;
    console.log("changeURL:urlCache:before:",this.urlCache)
    if( !this.api.setUrl(url) ){
      this.stateBad()
      console.log("changeURL:setURL:failed")
    }else{
      this.url = this.api.url;
      console.log("changeURL:setURL:success")
      this.stateMaybe()
      this.pm.updateProblems()
    }
    console.log("changeURL:urlCache:after:", this.urlCache )
    console.log("changeURL:url:", this.url )
    this.lastUrl = this.url + ""

    // Daniel
    let project = this.pms.getCurrentProject();
    if (project != null) {
      project.config.TAL_SERVER = this.url;
      project.saveConfig(this.pms.getCurrentDriver());
    }
    //! Daniel

    console.log("changeURL:urlCache:after:", this.urlCache)
    console.log("changeURL:url:", this.url)
    this.lastUrl = this.url + ""
  }

  private updateCurrentTabInfo(){
    let currentProject = this.pms.getCurrentProject();
    console.log("updateCurrentTabInfo:url: url", this.url)
    console.log("updateCurrentTabInfo:url  TAL_SERVER", currentProject!.config.TAL_SERVER)
    this.url = currentProject!.config.TAL_SERVER
    this.changeURL()
  }


  public removeURL(url: string, event: Event) {
    if (event) { event.preventDefault(); event.stopPropagation(); event.stopImmediatePropagation(); }

    console.log("changeURL:urlCache:before:", this.urlCache)
    if (!this.api.removeFromCache(url)) {
      console.log("changeURL:removeURL:done")
    }
    this.urlCache = this.api.urlCache

    console.log("changeURL:urlCache:after:", this.urlCache)
    console.log("changeURL:url:", url)
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
    this.pm.onProblemSelected.subscribe(() => {
       //console.log('Problem selected: ', problem.name);
      this.updateProjectConfigProblemServiceProblem();

      this.pms.getCurrentProject().onProjectConfigChanged.subscribe(() => {
        //console.log('config pronto in problem');
        this.updateProjectConfigProblemServiceProblem();
      })
    })

    this.onServiceSelected.subscribe((service) => {
      //console.log('Service selected: ', service.name);
      this.updateProjectConfigProblemServiceProblem();

      this.pms.getCurrentProject().onProjectConfigChanged.subscribe((_) => {
        //console.log('config pronto in service');
        this.updateProjectConfigProblemServiceProblem();
      })
    })
  }

  private async updateProjectConfigProblemServiceProblem() {
    let project = this.pms.getCurrentProject();
    if (this.selectedProblem != undefined) {
      project.config.TAL_PROBLEM = this.selectedProblem.name
      if (this.selectedService != undefined)
        project.config.TAL_SERVICE = this.selectedService.name
      else
        project.config.TAL_PROBLEM = "";
    }
    //project.config.TAL_SERVER = this.url;
    await project.saveConfig(this.pms.getCurrentDriver());
  }

  public stateIdle() { this.updateState(ApiState.Idle); }
  public stateGood() { this.updateState(ApiState.Good); }
  public stateMaybe() { this.updateState(ApiState.Maybe); }
  public stateBad() { this.updateState(ApiState.Bad); }

  public updateState(state: ApiState) {
    let dot = this.statusDot!.nativeElement as HTMLElement
    switch (state) {
      case ApiState.Idle: dot.style.color = ""; break;
      case ApiState.Good: dot.style.color = "green"; break;
      case ApiState.Maybe: dot.style.color = "orange"; break;
      case ApiState.Bad: dot.style.color = "darkred"; break;
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

  cleanupName(name: string) {
    var pattern = new RegExp('[-_. ]+', 'g');
    name = name.replace(pattern, " ")
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name
  }

  readableRegex(re: RegExp) {
    let text = re + ""
    text = text.replace(/\/(.*)\//, '$1')
    text = text.replace(/\^(.*)\$/, '$1')
    text = text.replace(/\[([^\]]*)\]/, (match: string, content: string) => {
      if (content.startsWith('^')) {
        return ' invalid(' + content.slice(1) + ') '
      }
      return ' valid(' + content.slice(1) + ') '
    })
    text = text.replace(/\(([^|]+|)*([^|]+)*\)/g, (match: string, options: string, last: string) => {
      console.log('OROR:', match, options, last)
      return text.replace(/\((.*)\)/, '$1').replace(/\|/g, ' OR ')
    })
    return text
  }

  async argDidFocus(arg: ArgDescriptor, event: Event) {
    console.log('argDidFocus:', arg, event)
    let idPanel = 'args-regex-panel-' + arg.key
    let idRegex = 'args-regex-' + arg.key

    let panel = document.getElementById(idPanel)
    let regex = document.getElementById(idRegex)

    if (!(panel instanceof HTMLElement)) { return }
    if (!(regex instanceof HTMLElement)) { return }
    console.log('argDidFocus:show!')
    panel.style.display = "flex"
    if (regex.style.color == "red") {
      regex.style.color = "orange"
    } else {
      regex.style.color = ""
    }

  }

  async argDidChange(arg: ArgDescriptor, event: Event) {
    console.log('argDidChange:', arg, event)
    let idPanel = 'args-regex-panel-' + arg.key
    let idRegex = 'args-regex-' + arg.key

    let panel = document.getElementById(idPanel)
    let regex = document.getElementById(idRegex)

    if (!(panel instanceof HTMLElement)) { return }
    if (!(regex instanceof HTMLElement)) { return }

    console.log('argDidFocus:validate')
    let issues = this.pm.validateArg(arg)
    if (issues !== null) {
      regex.style.color = "red"
      panel.style.display = "flex"
    } else if (arg.value != arg.default) {
      regex.style.color = "green"
      panel.style.display = "flex"
    } else {
      regex.style.color = ""
      panel.style.display = "none"
    }
  }

  async argDidReset(arg: ArgDescriptor, event: Event) {
    console.log('argDidReset:', arg.key, event)
    arg.value = arg.default ?? ""
    this.argDidChange(arg, event)
  }

  async validateArgs() {
    let result = undefined;
    if (this.selectedService) { result = this.pm.validateArgs(this.selectedService); }

    return result;
  }

  //files

  async fileDidChange(file: FileDescriptor, event: { originalEvent: Event, value?: string }) {
    console.log('fileDidChange:', file.key, event)
    let path = event.value ?? ""

    let idDropdown = 'file-dropdown-' + file.key
    let dropdown = document.getElementById(idDropdown)
    if (!(dropdown instanceof HTMLElement)) { return }
    console.log('fileDidChange:dropdown:found', dropdown)

    if (path == "") {
      dropdown.style.color = ""
      //file.value = ""
      return
    }
    let pathExist = await this.pms.getCurrentDriver().exists(path)
    console.log('fileDidChange:pathExist:', pathExist)
    if (!pathExist) {
      dropdown.style.color = "red"
      //file.value = ""
    } else {
      dropdown.style.color = "green"
      //file.value = path
    }
  }

  async fileDidReset(file: FileDescriptor, event: Event) {
    console.log('fileDidReset:', file.key, event)
    let idDropdown = 'file-dropdown-' + file.key
    let dropdown = document.getElementById(idDropdown)
    console.log('fileDidReset:', dropdown)
    if (!(dropdown instanceof Dropdown)) { return }
    dropdown.clear(event)
    file.value = ""

    this.refreshFilePathList()
  }

  //UI
  async toggleShowRegex(arg: ArgDescriptor, event: Event) {
    let idPanel = 'args-regex-panel-' + arg.key
    let panel = document.getElementById(idPanel)
    if (!(panel instanceof HTMLElement)) { return }
    panel.style.display = panel.style.display == 'none' ? 'flex' : 'none';
  }

  async toggleRegexFormat(arg: ArgDescriptor, event: Event) {
    let idRegex = 'args-regex-' + arg.key;
    let regex = document.getElementById(idRegex)
    if (!(regex instanceof HTMLElement)) { return }

    if (regex.classList.contains('format-regex-simple')) {
      regex.classList.remove('format-regex-simple')
      regex.innerText = arg.regex + ""
    } else {
      regex.classList.add('format-regex-simple')
      regex.innerText = this.clenupRegex(arg.regex)
    }
  }

  async reloadProblemList() {
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

  async problemsDidChange(clear: boolean) {
    this.problemsMenu = []
    this.servicesMenu = []
    this.loading = true

    if (clear) return

    let problemsMenu = new Array<ProblemDescriptor>(); // [...this.pm.problemList] // ez ?
    this.pm.problemList.forEach((problemDesc) => {
      problemsMenu.push(problemDesc)
    })
    problemsMenu = problemsMenu.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
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
    if (!this.selectedProblem) { return }
    this.pm.selectProblem(this.selectedProblem)


    let servicesMenu = new Array<ServiceDescriptor>();
    this.selectedProblem.services.forEach((serviceDesc) => {
      servicesMenu.push(serviceDesc)
    })
    servicesMenu = servicesMenu.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
    this.servicesMenu = servicesMenu
    console.log('didSelectProblem:servicesMenu:', servicesMenu)
    this.servicesMenu = servicesMenu

    this.onProblemSelected.emit(this.selectedProblem)
  }

  async didSelectService() {
    console.log('didSelectService:', this.selectedService)
    if (!this.selectedService) { return }
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

      return
    }

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


