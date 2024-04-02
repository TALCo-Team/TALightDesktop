import { Component, ElementRef, NgZone, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { ApiService, ApiState } from 'src/app/services/api-service/api.service';
import { NotificationManagerService, NotificationMessage, NotificationType } from 'src/app/services/notification-mananger-service/notification-manager.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';
import { ProjectConfig, ProjectEnvironment } from 'src/app/services/project-manager-service/project-manager.types';
import { FsNodeFile, FsNodeFolder, FsNodeList, FsServiceDriver as FsDriver, FsServiceDriver } from "src/app/services/fs-service/fs.service.types"
import { IndexeddbFsDriver } from 'src/app/services/fs-service/fs.service.test';
import { FsService } from 'src/app/services/fs-service/fs.service';
import { ConfigService } from 'src/app/services/config-service/config.service';
import { switchMap } from 'rxjs';
import { take } from 'rxjs';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { MenuItem } from 'primeng/api';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';

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

  projectConfig = new ProjectConfig;

  constructor( public readonly themeService: ThemeService, 
               public api: ApiService,
               public zone: NgZone,
               public pm: ProblemManagerService,
               public nm: NotificationManagerService,
               private fsService: FsService,
               private configService: ConfigService,
               private tutorialService: TutorialService,
               // Aggiungere project manager
               // il current project mi da accesso al config e da lì al driver
               public prj: ProjectManagerService,
               private tutorialService: TutorialService,
             ) 
{
    this.url = api.url;
    this.lastUrl = this.url + "";
    this.urlCache = [...this.api.urlCache]
    this.subApiState = this.api.onApiStateChange.subscribe((state:ApiState)=>{this.updateState(state)})
    this.subProblemError = this.pm.onError.subscribe((_)=>{this.stateBad()})
    this.subOnNotify = this.nm.onNotification.subscribe((msg:NotificationMessage): void=>{this.showNotification(msg)})
    this.prj.onProjectChanged.subscribe((_) => {
        let project = this.prj.getCurrentProject()
        project?.onProjectConfigChanged.subscribe((_) => {
          //alert('config pronto in topbar');
          this.writeTofile(project);
        })
    })
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) }),
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
    this.prj.onProjectListChanged.subscribe(() => this.setTabsNumber())
  }

  ngOnInit(): void {
    this.isBlurred = true;

    this.setTabsNumber()
    this.activeItem = this.items[0]

    this.lastUrl = this.api.getLastInsertedUrl();
    this.url = this.lastUrl;
    this.projectConfig.TAL_SERVER = this.url;
    
    //this.pm.updateProblems();

    // controllare prima che esista
    /*let project = this.prj.getCurrentProject()
    if (project != null) {
      alert('non è null');
      if (project != null && project.config != null) {
        project.config.TAL_SERVER = 'ciao';
        project.config.save(project.driver);
      }
    }*/
    if (this.urlInput) {
      this.urlInput.writeValue(this.url);
      this.projectConfig.TAL_SERVER = this.url;
    }
  }

  ngAfterViewInit(): void {
    let project = this.prj.getCurrentProject()
    //console.log(project);
    /*if (project != null && project.config != null) {
      project.config.TAL_SERVER = 'ciao';
      project.config.save(project.driver);
    }*/
  }

  public async writeTofile(project: ProjectEnvironment | null) {
    //alert('write to file')
    if (project != null && project.config != null) {
      //alert(str);
      project.config.TAL_SERVER = this.url;
      //alert(project.config.TAL_SERVER);
      await project.config.save(project.driver);
    }
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
  for (let i = 0; i < this.prj.listProject().length; i++){
    tmp.push({ label: 'TAB-' + i, icon: 'pi pi-fw pi-times' , id : i.toString()})

    this.activeItem = tmp
  }

  this.items = tmp
  this.disableDelete = (this.prj.listProject().length <= 1)
  this.activeItem = this.items[0];
}

addProject() {
  this.prj.addProject()
}

deleteProject(id : string) {
  this.prj.closeProject(parseInt(id))
}

setCurrentTab(item : any) {
  this.activeItem = item;
  console.log("current active : id ", item)
  console.log("current active : tab ", this.activeItem)

  this.prj.setCurrentProject(parseInt(item.id))
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
    let project = this.prj.getCurrentProject();
    //alert('hai cambiato url!');
    this.writeTofile(project);
    //alert("il server ora è: " + project?.config?.TAL_SERVER);

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
