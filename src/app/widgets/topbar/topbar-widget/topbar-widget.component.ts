import { Component, ElementRef, NgZone, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { ApiService, ApiState } from 'src/app/services/api-service/api.service';
import { NotificationManagerService, NotificationMessage, NotificationType } from 'src/app/services/notification-mananger-service/notification-manager.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'tal-topbar-widget',
  templateUrl: './topbar-widget.component.html',
  styleUrls: ['./topbar-widget.component.scss']
})
export class TopbarWidgetComponent implements OnInit {

  @ViewChild("urlInput") public urlInput?: AutoComplete;
  @ViewChild("statusDot") public statusDot?: ElementRef;
  @ViewChild("messageBox") public messageBox?: ElementRef;

  items!: MenuItem[];
  activeItem: any;

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

  constructor(public readonly themeService: ThemeService,
    public api: ApiService,
    public zone: NgZone,
    public pm: ProblemManagerService,
    public nm: NotificationManagerService,
    private tutorialService: TutorialService,
  ) {
    this.url = api.url;
    this.lastUrl = this.url + "";
    this.urlCache = [...this.api.urlCache]
    this.subApiState = this.api.onApiStateChange.subscribe((state: ApiState) => { this.updateState(state) })
    this.subProblemError = this.pm.onError.subscribe((_) => { this.stateBad() })
    this.subOnNotify = this.nm.onNotification.subscribe((msg: NotificationMessage): void => { this.showNotification(msg) })
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) }),
      this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
  }

  ngOnInit() {
    this.isBlurred = true;

    this.items = [
      { label: 'Progetto 1', icon: 'pi pi-fw pi-home' },
    ];
    this.activeItem = this.items[0]
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

aggiungiProgetto() {
  //   let temp = this.items
  //   temp = ( [
  //     { label: 'Home', icon: 'pi pi-fw pi-home' },
  //     { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
  //     { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
  //     { label: 'Documentation', icon: 'pi pi-fw pi-file' },
  //     { label: 'Settings', icon: 'pi pi-fw pi-cog' },
  //     { label: 'test', icon: 'pi pi-fw pi-cog' }
  // ])
    let temp = { label: 'test', icon: 'pi pi-fw pi-cog' }
    this.items.push( temp);
    this.activeItem = temp
    // this.items. = this.items
    //this.activeItem = this.items[this.items.length-1];
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
public testfunzione() {
  console.log("faciiamo un testooooooooooooooooooooooooooooone ")
}
  public stateIdle() { this.updateState(ApiState.Idle); }
  public stateGood() { this.updateState(ApiState.Good); }
  public stateMaybe() { this.updateState(ApiState.Maybe); }
  public stateBad() { this.updateState(ApiState.Bad); }

  public changeURL(event: Event) {
  if (this.lastUrl == this.url) { return }
  this.stateIdle()
  let dot = this.statusDot!.nativeElement as HTMLElement
  console.log("changeURL:dot:", dot)
  console.log("changeURL:event:", event)
  let url = this.url;
  console.log("changeURL:urlCache:before:", this.urlCache)
  if (!this.api.setUrl(url)) {
    this.stateBad()
    console.log("changeURL:setURL:failed")
  } else {
    this.url = this.api.url;
    console.log("changeURL:setURL:success")
    this.urlCache = this.api.urlCache
    this.stateMaybe()
    this.pm.updateProblems()
  }

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
