import { Component, ElementRef, NgZone, OnInit, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { ApiService, ApiState } from 'src/app/services/api-service/api.service';
import { NotificationManagerService, NotificationMessage, NotificationType } from 'src/app/services/notification-mananger-service/notification-manager.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';
import { ProjectConfig } from 'src/app/services/project-manager-service/project-manager.types';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { MenuItem } from 'primeng/api';
import { FsService } from 'src/app/services/fs-service/fs.service';
import { ConfigService } from 'src/app/services/config-service/config.service';
import { ProjectsManagerService } from 'src/app/services/project-manager-service/projects-manager.service';

@Component({
  selector: 'tal-topbar-widget',
  templateUrl: './topbar-widget.component.html',
  styleUrls: ['./topbar-widget.component.scss']
})
export class TopbarWidgetComponent implements OnInit {

  @ViewChild("urlInput") public urlInput?: AutoComplete;
  @ViewChild("statusDot") public statusDot?: ElementRef;
  @ViewChild("messageBox") public messageBox?: ElementRef;

  disableDelete: boolean = false;
  items!: MenuItem[];
  activeItem: any = undefined;

  url;
  lastUrl;
  urlCache: string[] = []
  escapeRegEx = /[.*+?^${}()|[\]\\]/g
  urlInputClass = ""
  subApiState
  subProblemError
  subOnNotify
  currentNotification?: NotificationMessage
  isBlurred: boolean = false;
  isTutorialButtonVisible: boolean = false;
  scrollable_prop = false;
  disabilita_bottone = false;

  larghezzaFinestra: number | undefined;

  constructor( public readonly themeService: ThemeService,
               public api: ApiService,
               public zone: NgZone,
               public pm: ProblemManagerService,
               public nm: NotificationManagerService,
               private fsService: FsService,
               private configService: ConfigService,
               private tutorialService: TutorialService,
               public pms: ProjectsManagerService,
             )
  {
    this.getDimensions();
    this.url = api.url;
    this.lastUrl = this.url + "";
    this.urlCache = [...this.api.urlCache]
    this.subApiState = this.api.onApiStateChange.subscribe((state:ApiState)=>{this.updateState(state)})
    this.subProblemError = this.pm.onError.subscribe((_)=>{this.stateBad()})
    this.subOnNotify = this.nm.onNotification.subscribe((msg:NotificationMessage): void=>{this.showNotification(msg)})

    this.pms.projectManagerServiceListChanged.subscribe(() => this.setTabsNumber())
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) }),
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
  }

  //Old ngOnInit
  ngOnInit(): void {
    this.isBlurred = true;
    this.lastUrl = this.api.getLastInsertedUrl();
    this.url = this.lastUrl;
    //TODO Daniel this.projectConfig.TAL_SERVER = this.url;
    //Write the url to the file

    //this.pm.updateProblems();

    if (this.urlInput) {
      this.urlInput.writeValue(this.url);
      //TODO Daniel this.projectConfig.TAL_SERVER = this.url;
    }

    // devo dargli un timeout dal momento che ci mette del tempo a caricare i files per via di pydiode
    setTimeout(() => {
      this.setCurrentTab(this.items[0]);
    }, 3000);

  }

  /*
  ngOnInit(): void {
    this.isBlurred = true;
  }
  */

  //calcola la lunghezza delle tab
  totalTabsCalc():number{
    return this.getDimensions()-this.pms.getProjectsId().length*101;
  }

  // Aggiorna le dimensioni della finestra quando viene ridimensionata in modo da gestire lo scrollable per via delle tabs
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getDimensions();
    //se le tab sono piú larghe della dimensione della finestra-400-18.58, allora attiva lo scrollable.
    this.totalTabsCalc()<=0? this.scrollable_prop=true : this.scrollable_prop=false;
  }

  //semplice funzione per il calcolo della larghezza della finestra per vedere quante tab ci stanno
  getDimensions(): number {
    this.larghezzaFinestra = window.innerWidth;
    console.log('Larghezza finestra:', this.larghezzaFinestra-400-18.58);
    return this.larghezzaFinestra-400-18.58;
  }

  showTutorial() {
    localStorage.setItem("tutorialCached", "false")
    this.tutorialService.nextTutorial(-1)
  }

  public get changeThemIcon(): string {
    return this.themeService.currentTheme == AppTheme.dark ? 'pi-sun' : 'pi-moon';
  }

  private isTutorialShown(tutorial?: any) {
    console.log("TopbarWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === "TopbarWidgetComponent") {
      this.isBlurred = false
    }
    else {
      this.isBlurred = true
    }
    // Se la card è già stata mostrata oppure sta venendo mostrata, non mostrare il pulsante..
    if (typeof tutorial !== 'undefined' && localStorage.getItem("tutorialCached") !== "true") {
      this.isTutorialButtonVisible = false;
    }
    //..altrimenti mostralo
    else {
      this.isTutorialButtonVisible = true;
    }
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }

  public iconForNotification() {
    let icon = "pi-info"
    switch (this.currentNotification?.type) {
      default:
      case NotificationType.System:
      case NotificationType.Debug:
      case NotificationType.Info:
        icon = "pi-info"
        break;
      case NotificationType.Warning:
      case NotificationType.Error:
        icon = "pi-error"
    }
    return icon
  }

  showNotification(msg: NotificationMessage, timeout = 3) {
    let box = this.messageBox?.nativeElement as HTMLElement
    box.style.display = "flex"
    this.currentNotification = msg
    setTimeout(() => { this.hideNotification() }, timeout * 1000)
  }

  hideNotification() {
    let box = this.messageBox?.nativeElement as HTMLElement
    box.style.display = "none"
    this.currentNotification = undefined
  }

  setTabsNumber(){
    let tmp : MenuItem[] = [];

    let projectConfig, projectName, projects = this.pms.getProjects();
    for (let i = 0; i < projects.length; i++){
      projectConfig = projects[i].config;

      if(!projectConfig.isDefaultProjectName())
        projectName = projectConfig.PROJECT_NAME;// If there is a custom name
      else
        projectName = ProjectConfig.defaultConfig.PROJECT_NAME + ' ' + i; //default name

      tmp.push({ label: projectName , icon: 'pi pi-fw pi-times' , id : i.toString()})

      this.activeItem = tmp
    }

    this.items = tmp
    this.disableDelete = (projects.length <= 1)
    //this.activeItem = this.items[0];
  }
  // aggiungi un progetto controllando ed in caso le schede fossero troppe, attiva lo scrollable
  addProject() {
    this.pms.addProject()
    this.disabilita_bottone = true;
    //é un timer perché ci mette tanto a caricare pydiode
    setTimeout(() => {
      this.disabilita_bottone = false;
      this.setCurrentTab((this.items as MenuItem[])[(this.items as MenuItem[]).length - 1])
    }, 3000);

    this.totalTabsCalc()<=0? this.scrollable_prop=true : this.scrollable_prop=false;
  }

  setCurrentTab(item : any) {
    this.activeItem = item;
    this.pms.setCurrentProjectManagerService(parseInt(item.id))
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

  public updateState(state: ApiState) {
    let dot = this.statusDot!.nativeElement as HTMLElement
    switch (state) {
      case ApiState.Idle: dot.style.color = ""; break;
      case ApiState.Good: dot.style.color = "green"; break;
      case ApiState.Maybe: dot.style.color = "orange"; break;
      case ApiState.Bad: dot.style.color = "darkred"; break;
    }
  }

  public stateIdle() { this.updateState(ApiState.Idle); }
  public stateGood() { this.updateState(ApiState.Good); }
  public stateMaybe() { this.updateState(ApiState.Maybe); }
  public stateBad() { this.updateState(ApiState.Bad); }

  public changeURL(event:Event) {
    if(this.lastUrl == this.url){return}
    this.stateIdle()
    let dot = this.statusDot!.nativeElement as HTMLElement
    console.log("changeURL:dot:", dot)
    console.log("changeURL:event:", event)
    let url = this.url;
    console.log("changeURL:urlCache:before:",this.urlCache)
    if( !this.api.setUrl(url) ){
      this.stateBad()
      console.log("changeURL:setURL:failed")
    }else{
      this.url = this.api.url;
      console.log("changeURL:setURL:success")
      this.urlCache = this.api.urlCache
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
      project.saveConfig();
    }
    //! Daniel

    console.log("changeURL:urlCache:after:", this.urlCache)
    console.log("changeURL:url:", this.url)
    this.lastUrl = this.url + ""
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

}
