import { Component, ElementRef, NgZone, OnInit, ViewChild, HostListener } from '@angular/core';
import { NotificationManagerService, NotificationMessage, NotificationType } from 'src/app/services/notification-mananger-service/notification-manager.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';
import { ProjectConfig } from 'src/app/services/project-manager-service/project-manager.types';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { MenuItem } from 'primeng/api';
import { FsService } from 'src/app/services/fs-service/fs.service';
import { ConfigService } from 'src/app/services/config-service/config.service';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';

@Component({
  selector: 'tal-topbar-widget',
  templateUrl: './topbar-widget.component.html',
  styleUrls: ['./topbar-widget.component.scss']
})
export class TopbarWidgetComponent implements OnInit {
  @ViewChild("statusDot") public statusDot?: ElementRef;
  @ViewChild("messageBox") public messageBox?: ElementRef;

  disableDelete: boolean = false;
  items!: MenuItem[];
  activeItem: any = undefined;

  urlInputClass = ""

  subOnNotify
  currentNotification?: NotificationMessage
  isBlurred: boolean = false;
  isTutorialButtonVisible: boolean = false;
  scrollable_prop = false;
  disabilita_bottone = false;

  larghezzaFinestra: number | undefined;

  constructor( public readonly themeService: ThemeService,
               public zone: NgZone,
               public pm: ProblemManagerService,
               public nm: NotificationManagerService,
               private fsService: FsService,
               private configService: ConfigService,
               private tutorialService: TutorialService,
               public pms: ProjectManagerService,
             )
  {
    // prendi le dimensioni della finestra
    this.getDimensions();

    this.subOnNotify = this.nm.onNotification.subscribe((msg:NotificationMessage): void=>{this.showNotification(msg)})

    this.pms.projectManagerServiceListChanged.subscribe(() => {
      this.setTabsNumber();
    })

    this.pms.currentProjectChanged.subscribe(() => {
      let id = this.pms.getCurrentProjectId()
      console.log("TopbarWidgetComponent:setCurrentTab:id:", id)
      this.activeItem = this.items[id]
    });

    // roba per il tutorial
    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) }),
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })
  }

  //Old ngOnInit
  ngOnInit(): void {
    // all'inizio deve essere blurrato per via del tutorial
    this.isBlurred = true;
  }

  // calcola la lunghezza delle tab
  totalTabsCalc():number{
    return this.getDimensions()-this.pms.getProjectsId().length*101;
  }

  // aggiorna le dimensioni della finestra quando viene ridimensionata in modo da gestire lo scrollable per via delle tabs
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.getDimensions();
    //se le tab sono piú larghe della dimensione della finestra-400-18.58, allora attiva lo scrollable.
    this.totalTabsCalc()<=0? this.scrollable_prop=true : this.scrollable_prop=false;
  }

  // semplice funzione per il calcolo della larghezza della finestra per vedere quante tab ci stanno
  getDimensions(): number {
    this.larghezzaFinestra = window.innerWidth;
    console.log('Larghezza finestra:', this.larghezzaFinestra-400-18.58);
    return this.larghezzaFinestra-400-18.58;
  }

  showTutorial() {
    localStorage.setItem("tutorialCached", "false")
    this.tutorialService.nextTutorial(-1)
  }

  // cambia l'icona del bottone per cambiare il tema
  public get changeThemIcon(): string {
    return this.themeService.currentTheme == AppTheme.dark ? 'pi-sun' : 'pi-moon';
  }

  // switcha il tema
  public toggleTheme() {
    this.themeService.toggleTheme();
  }

  // controlla se mostrare questa parte oppure tenerla blurrata
  private isTutorialShown(tutorial?: any) {
    console.log("TopbarWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === this.constructor.name) {
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

  // imposta il numero della tab appena creata e crea una nuova tab
  setTabsNumber(){
    let tmp : MenuItem[] = [];
    let projectName, ids = this.pms.getProjectsId()

    console.log("TopbarWidgetComponent:setTabs:ids:", ids)

    for (let i = 0; i < ids.length; i++){
      projectName = ProjectConfig.defaultConfig.PROJECT_NAME + ' ' + i; //default name

      tmp.push({ label: projectName , icon: 'pi pi-fw pi-times' , id : i.toString()})
    }

    this.items = tmp
    this.disableDelete = (ids.length <= 1)
  }

  // aggiungi un progetto controllando ed in caso le schede fossero troppe, attiva lo scrollable
  addProject() {
    this.pms.addProject()
    this.disabilita_bottone = true;

    this.pms.currentProjectChanged.subscribe(() => this.disabilita_bottone = false )

    this.totalTabsCalc()<=0? this.scrollable_prop=true : this.scrollable_prop=false;
  }

  // Set current tab of an exsisting project
  setCurrentTab(item : any) {
    this.pms.setCurrent(parseInt(item.id))
    this.activeItem = item;
  }
}
