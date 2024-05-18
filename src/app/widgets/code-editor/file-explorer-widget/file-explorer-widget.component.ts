import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { ConfirmationService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';
import { FsService, Tar } from 'src/app/services/fs-service/fs.service';
import { FsNodeFile, FsNodeFolder } from 'src/app/services/fs-service/fs.service.types';
import { GoogleLoginProvider, MicrosoftLoginProvider } from '@abacritt/angularx-social-login';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GithubApiService } from 'src/app/services/github-api-service/github-api.service';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { CompilerService } from 'src/app/services/compiler-service/compiler-service.service';
import { ProjectDriver, ProjectLanguage } from 'src/app/services/project-manager-service/project-manager.types';

@Component({
  selector: 'tal-file-explorer-widget',
  templateUrl: './file-explorer-widget.component.html',
  styleUrls: ['./file-explorer-widget.component.scss']
})
export class FileExplorerWidgetComponent implements OnInit {
  public rootDir = "/"
  public showHidden = false

  public editingValue: string = "";
  public editingItem: FsNodeFile | FsNodeFolder | null = null;
  public editingItemFolder: FsNodeFolder | null = null;
  public editingItemError: boolean = false;

  public newItemValue: string = "";
  public newItemType: "file" | "folder" = "file";
  public newItemFolder: FsNodeFolder | null = null;
  public newItemError: boolean = false;

  public selectedFile: FsNodeFile | null = null;
  public selectedFolder: FsNodeFolder | null = null;

  private accessToken = '';
  user: SocialUser | undefined;
  loggedIn: boolean = false;

  // TODO: decide if use only a variable or two
  private googleLogin = false;
  private microsoftLogin = false;

  /** Variables for Github import/export popup management **/
  public ExportItems: any;
  public ImportItems: any;
  public exportVisible: boolean = false;
  public importVisible: boolean = false;
  public reposList: any;
  public selectedRepo: any;
  public newRepoOwner: any;
  public newRepoName: any;
  public repoNameHelp: any;
  public exportDropDisabled: boolean = false;
  public exportButtonRepoDisabled: boolean = true;
  public importDropDisabled: boolean = false;
  public importButtonRepoDisabled: boolean = true;

  public driver: ProjectDriver | null = null;

  @ViewChild("nameEditing") public nameEditingElement?: ElementRef;
  @ViewChild("newItemName") public newItemNameElement?: ElementRef;

  @ViewChildren(OverlayPanel) public panels?: QueryList<OverlayPanel>;

  @Output("onUpdateRoot") public onUpdateRoot = new EventEmitter<FsNodeFolder>();
  @Output("onSelectFile") public onSelectFile = new EventEmitter<FsNodeFile>();
  @Output("showHiddenChanged") public showHiddenChanged = new EventEmitter<boolean>();
  @Output('onFileDeleted') public onFileDeleted = new EventEmitter<string>();
  @Output('onItemRenamed') public onItemRenamed = new EventEmitter();

  constructor(
    private confirmationService: ConfirmationService,
    private fs: FsService,
    public projectManagerService: ProjectManagerService,
    private authService: SocialAuthService,
    private messageService: MessageService,
    private githubService: GithubApiService,
    private tutorialService: TutorialService,
    public compiler: CompilerService,
  ) {
    this.projectManagerService.currentProjectChanged.subscribe(() => { this.didProjectChanged() })

    this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial) })
    this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown() })

    //TODO: fix the driver in file-explorer-widget.component.html
    // this is a bad solution but i don't have time to fix it
    this.driver = this.compiler.get(ProjectLanguage.PY);
  }

  private isTutorialShown(tutorial?: any) {

    console.log("FileExplorerWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === "FileExplorerWidgetComponent") {
      this.isBlurred = false
    }
    else {
      this.isBlurred = true
    }
  }

  ngOnInit() {
    this.bindCollapseEvent();
    this.isBlurred = true;

    // Setting import menù options
    this.ImportItems = [
      { label: 'Import from Github', icon: 'pi pi-cloud-download', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); this.downloadGithub(); } },
      { label: 'Import from local ', icon: 'pi pi-database', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); const fileUpload = document.getElementById('fileUpload'); fileUpload?.click(); } }
    ]

    // Setting export menù options
    this.ExportItems = [
      {
        label: 'Export on Github',
        icon: 'pi pi-github',
        items: [
          { label: 'Export as archive', icon: 'pi pi-folder-open', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); this.export('Github-archive') } },
          { label: 'Export code', icon: 'pi pi-code', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); this.export('Github-code'); /*this.visible = true;*/ } }
        ]
      },
      { label: 'Export on Google Drive', icon: 'pi pi-google', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); this.signIn() } },
      { label: 'Export on One Drive', icon: 'pi pi-microsoft', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); this.export('Microsoft') } },
      { label: 'Save locally ', icon: 'pi pi-download', command: (event: any) => { this.closeAllContextMenus(event.originalEvent); this.export('Local') } }
    ]

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      // User is logged. Now it's possible to proceed with token request
      // to access Drive API and then export/upload files on Google Drive
      if (this.googleLogin)
        this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken).then(() => this.export('Google'))
    });

  }

  protected isBlurred = false;

  public didProjectChanged() {
    let project = this.projectManagerService.getCurrentProject();
    let id = this.projectManagerService.getCurrentProjectId();
    console.log("FileExplorerWidgetComponent:didProjectChanged:id:", id, project)

    this.projectManagerService.getCurrentDriver().ready().then((ready) => {
      console.log("FileExplorerWidgetComponent:didProjectChanged:id:ready", id, project)
      this.refreshRoot();
    })
  }

  refreshRoot(onDone?: () => void) {
    let project = this.projectManagerService.getCurrentProject();
    let id = this.projectManagerService.getCurrentProjectId();
    let driver = this.projectManagerService.getCurrentDriver()

    console.log("FileExplorerWidgetComponent:refreshRoot:id", id, project)
    driver.scanDirectory(this.rootDir).then((folder) => {
      driver.fsRoot = folder ?? FsService.EmptyFolder

      this.bindCollapseEvent();

      this.onUpdateRoot?.emit(driver.fsRoot);
      if (onDone) { onDone() }
    });
  }

  private bindCollapseEvent() {
    setTimeout(() => {
      const rows = document.getElementsByClassName("collapse-toggle");
      for (let i = 0; i < rows.length; i++) {
        if (!rows[i].classList.contains("bound")) {
          let row = rows[i];
          row.addEventListener("click", (event) => { this.handleClickEvent(event) });
          row.classList.add("bound");
        }
      }
    }, 0);
  }

  public handleClickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const row = event.target as HTMLElement;
    let newParent: HTMLElement = row;
    let safeCount = 0;
    do {
      newParent = newParent.parentElement as HTMLElement;
      safeCount++;
    } while (!newParent.classList.contains("tal-folder-subtree") && safeCount < 10);

    if (safeCount < 10) {
      newParent.classList.toggle("collapsed");
    }
  }

  public closeAllContextMenus(event: Event) {
    event.preventDefault();
    console.log("EVENT: \n", event);
    if (this.panels) {
      this.panels.forEach(p => p.hide());
    }
  }

  public selectFile(file: FsNodeFile) {
    console.log('selectFile', file)
    this.projectManagerService.getCurrentDriver().readFile(file.path).then((content) => {
      file.content = content ?? "";
      console.log('ecco il file: \n' + content);
      this.selectedFile = file;
      this.onSelectFile?.emit(file);
    })
  }

  public selectFolder(folder: FsNodeFolder) {
    if (this.selectedFolder == folder) {
      this.selectedFolder == null;
    }
  }

  public openSettings() {
    if (!this.showHidden) {
      this.showHidden = true
      this.refreshRoot(() => { this.openSettings() })
    }

    console.log("openSettings")
    let project = this.projectManagerService.getCurrentProject();
    let driver = this.projectManagerService.getCurrentDriver()
   
    let projectFolder = driver.fsRoot.folders.find((item) => {
      return item.path + "/" == project.config.DIR_PROJECT
    });

    if (projectFolder == null) return 
    console.log("openSettings:projectFolder:", projectFolder)
    let configFile = projectFolder.files.find((file) => {
      return file.path == project!.config.CONFIG_PATH
    })
    if (configFile == null) return
    console.log("openSettings:configFile:", configFile)
    this.selectFile(configFile);
  }


  public toggleHidden() {
    this.showHidden = !this.showHidden;
    this.refreshRoot()
  }

  public isVisibile(fsitem: FsNodeFile | FsNodeFolder) {
    let isHidden = fsitem.name.startsWith('.');
    return this.showHidden || (!this.showHidden && !isHidden)
  }

  /** EDITING METHODS  **/
  public startEditing(folder: FsNodeFolder, item: FsNodeFile | FsNodeFolder) {

    console.log("START EDITING")

    console.log("FOLDER: ", folder)
    console.log("ITEM: ", item)
    this.editingItem = item;
    this.editingValue = item.name; //new_name
    this.editingItemFolder = folder;
    this.editingItemError = false;

    setTimeout(() => {
      if (this.nameEditingElement) {
        this.nameEditingElement.nativeElement.focus();
      }
    }, 0);
  }

  public saveEditing() {
    if (!this.editingItemError) {
      if (this.editingItem) {
        this.editingValue = this.editingValue.trim();
        if (this.editingValue.length > 0) {

          // change name item
          this.editingItem.name = this.editingValue;

          // create new path item
          const directoryList = this.editingItem.path.split('/');

          if (directoryList.length <= 1) {
            this.editingItem.path = "/" + this.editingValue;
          }

          const newpath = directoryList
            .slice(0, -1) // Remove last element ( previous name )
            .concat(this.editingValue) // Add new name at the end
            .join('/'); // Rebuild the path

          // Change path item in the FS
          let driver = this.projectManagerService.getCurrentDriver()
          driver.renameItem(this.editingItem.path, newpath).then(() => {
            this.refreshRoot();
          })

          this.onItemRenamed.emit({ "oldpath": this.editingItem.path });

          // Change path item
          this.editingItem.path = newpath;

          this.onUpdateRoot?.emit(driver.fsRoot);
        }
      }
    }
    this.cancelEditing();
  }

  public cancelEditing() {
    this.editingItem = null;
    this.editingValue = "";
    this.editingItemFolder = null;
  }

  public editItemChange() {
    this.editingItemError = false;

    if (this.editingItemFolder) {
      const existingFile = this.editingItemFolder.files.find(f => f.name === this.editingValue);
      const existingFolder = this.editingItemFolder.folders.find(f => f.name === this.editingValue);
      if (existingFile || existingFolder) {
        this.editingItemError = true;
      }
    }
  }
  /***************/

  /** DELETE METHODS **/
  public deleteFileClick(event: Event, file: FsNodeFile) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to delete this file?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFile(this.projectManagerService.getCurrentDriver().fsRoot, file);
        },
        reject: () => {
          //reject action
        },
        key: 'dialogDelete',
      });
    }
  }

  private deleteFile(currentFolder: FsNodeFolder, file: FsNodeFile) {
    this.projectManagerService.getCurrentDriver().delete(file.path).then(() => {
      this.refreshRoot();
      this.onFileDeleted.emit(file.path)
    })
  }

  public importGithubClick(event: Event) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to proceed with the import?\n\nNOTE: Make sure you have saved or exported the current project otherwise you will lose any changes.',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.downloadFiles();
        },
        reject: () => {
          //reject action
        },
        key: 'dialogImport'
      });
    }
  }

  public deleteFolderClick(event: Event, folder: FsNodeFolder) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to delete this folder? All files and folders it contains will be deleted.',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFolder(this.projectManagerService.getCurrentDriver().fsRoot, folder);
        },
        reject: () => {
          //reject action
        },
        key: 'dialogDelete',
      });
    }
  }

  private deleteFolder(currentFolder: FsNodeFolder, folder: FsNodeFolder) {
    let driver = this.projectManagerService.getCurrentDriver()
    //Delete all files in the folder
    folder.files.forEach(item => {
      driver.delete(item.path).then(() => {
        this.refreshRoot();
        this.onFileDeleted.emit(item.path)
      })
    });

    //Delete all subfolders recursively
    if (folder.folders.length !== 0) {
      folder.folders.forEach(item => {

        this.deleteFolder(item, item);

        driver.delete(folder.path).then(() => {
          this.refreshRoot();
        })
      });

    } else {
      driver.delete(folder.path).then(() => {
        this.refreshRoot();
      })
    }
  }
  /***************/

  /** CREATE METHODS **/
  public syncFilesystem() {
    setTimeout(() => {
      this.refreshRoot();
    }, 0);
  }


  public addNewItem(folder: FsNodeFolder | null, type: "file" | "folder") {
    if(folder == null)
      folder = this.projectManagerService.getCurrentDriver().fsRoot;

    this.newItemValue = "";
    this.newItemFolder = folder;
    this.newItemType = type;
    this.newItemError = false;

    setTimeout(() => {
      if (this.newItemNameElement) {
        this.newItemNameElement.nativeElement.focus();
      }
    }, 0);
  }

  public cancelNewItem() {
    this.newItemValue = "";
    this.newItemFolder = null;
  }

  public saveNewItem() {
    if (!this.newItemError) {
      this.newItemValue = this.newItemValue.trim();
      if (this.newItemValue.length > 0) {

        if (this.newItemFolder) {
          let driver = this.projectManagerService.getCurrentDriver()

          if (this.newItemType === "file") {
            let path = this.newItemFolder.path + "/" + this.newItemValue
            driver.writeFile(path, "").then(() => {
              this.refreshRoot()
            })
          } else {
            // Double slash on path when folder is created under root does not create problems
            let path = this.newItemFolder.path + "/" + this.newItemValue
            console.log(path)
            driver.createDirectory(path).then(() => {
              this.refreshRoot()
            })

            this.newItemFolder.folders.push({
              name: this.newItemValue,
              path: "./" + this.newItemValue,
              files: [],
              folders: []
            });
          }
        }
      }
    }

    this.newItemValue = "";
    this.newItemFolder = null;
  }

  public newItemChange() {
    this.newItemError = false;

    if (this.newItemFolder) {
      const existingFile = this.newItemFolder.files.find(f => f.name === this.newItemValue);
      const existingFolder = this.newItemFolder.folders.find(f => f.name === this.newItemValue);
      if (existingFile || existingFolder) {
        this.newItemError = true;
      }
    }
  }
  /***************/
  async upload(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) { return false; }
    let target = event.target as HTMLInputElement
    if (!target.files || target.files.length == 0) { return false; }

    if (target.files.length == 1 && target.files[0].name.endsWith('.tal.tar')) {
      let content = await target.files[0].arrayBuffer();
      await this.importProject(content)
    } else {
      for (let i = 0; i < target.files.length; i++) {
        let file = target.files[i]
        let content = await file.arrayBuffer();
        console.log("upload:content:", new Uint8Array(content))
        let path = (!this.selectedFolder ? "/" : this.selectedFolder.path) + file.name
        console.log('upload:', path, content)
        await this.projectManagerService.getCurrentDriver().writeFile(path, content)
      }
    }
    this.refreshRoot()
    return true;
  }

  async importProject(tarball: ArrayBuffer) {
    Tar.unpack(tarball, async (files, folders) => {
      console.log("extractTar:unpack:files", files)
      console.log("extractTar:unpack:folders", folders)

      let driver = this.projectManagerService.getCurrentDriver()

      for (var idx in folders) {
        console.log("extractTar:createDirectory:")
        let folder = folders[idx]
        let path = folder.path
        let pathMOD = path.substring(path.indexOf("/"));
        console.log("extractTar:createDirectory:", pathMOD)
        await driver.createDirectory(pathMOD)
      }
      console.log("extractTar:createDirectory:DONE")
      for (var idx in files) {
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = file.path
        let pathMOD = path.substring(path.indexOf("/"));
        let content = file.content
        console.log("extractTar:writeFile:", path, content)
        await driver.writeFile(pathMOD, content)
      }
      console.log("extractTar:writeFile:DONE")
      this.refreshRoot()
    })
    console.log("import:data:", tarball)

    return true
  }

  public export(mode: string) {
    if (mode != 'Github-code') {
      let items = this.fs.treeToList(
        this.projectManagerService.getCurrentDriver().fsRoot
      )
      
      if (items.length == 0) {
        console.log("export: No files found to be exported")
      }

      console.log("export:items:", items)
      Tar.pack(items, (tarball: ArrayBuffer) => {
        let tarname = "tal-project-" + Date.now() + ".tal.tar"
        console.log('export:tarball:', tarname, tarball)

        switch (mode) {
          case 'Local':
            this.triggerDownload(tarname, tarball, "application/x-tar");
            break;
          case 'Google':
            this.uploadGoogleDrive(tarname, tarball, "application/x-tar");
            break;
          case 'Microsoft':
            this.uploadOneDrive(tarname, tarball, "application/x-tar");
            break;
          case 'Github-archive':
            this.uploadGitHub('Github-archive', tarname, tarball, "application/x-tar");
            break;
          default:
            break;
        }
      })
    } else
      this.uploadGitHub('Github-code');
  }

  //----------------------------------------------//
  //------------------- GITHUB -------------------//
  //----------------------------------------------//

  private popupwindow(url: string, title: string, w: number, h: number) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);

    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  }


  public uploadGitHub(mode: string, filename?: string, content?: ArrayBuffer, mime = "application/octet-stream") {
    console.log("GitHub");

    var url = `https://github.com/login/oauth/authorize?client_id=8fd3343f822c2429ad95&scope=user%20repo`;
    var popupWindow = this.popupwindow(url, "GitHub Login", 400, 530);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");

    var codeParam: string | null = "";

    var self = this;
    const checkURLChange = setInterval(function () {
      if (!popupWindow || popupWindow.closed) {
        clearInterval(checkURLChange);
        console.log('Popup window closed.');

      } else if (popupWindow.location.href.indexOf("github.com") === -1) { //url does not contains "github.com"
        console.log('URL in popup window changed:', popupWindow.location.href);

        const queryString = popupWindow.location.search;
        const urlParams = new URLSearchParams(queryString);
        codeParam = urlParams.get("code");
        console.log("CODE:", codeParam)

        popupWindow.close();

        if (codeParam && (localStorage.getItem("accessToken") === null)) {

          if (mode === 'Github-archive') {

            self.githubService.getAccessToken(codeParam)
              .then(() => self.githubService.getUserData())
              .then(() => self.githubService.getRepository('TALightProject-Archives'))
              .then((data) => {

                if (data.message == "Not Found") {
                  self.githubService.createRepository('TALightProject-Archives').then(() => { if (filename && content) { self.uploadFile('TALightProject-Archives', filename, content, mime) } })
                } else {
                  if (filename && content) {
                    self.uploadFile('TALightProject-Archives', filename, content, mime);
                  }
                }
              });

          } else {
            self.githubService.getAccessToken(codeParam)
              .then(() => self.githubService.getUserData())
              .then(() => self.githubService.getRepoList())
              .then((data) => {

                let condition = (repo: { name: string; }) => repo.name == 'TALightProject-Archives';
                let isPresentRepo = data.findIndex(condition)

                if (isPresentRepo !== -1) { data.splice(isPresentRepo, 1); }

                self.reposList = data
              })
              .then(() => self.newRepoOwner = localStorage.getItem("username"))
              .then(() => {
                self.newRepoName = '';
                self.selectedRepo = undefined;
                self.exportVisible = true;
                self.detectInput()
              })
          }
        }
      }
    }, 1000); // Check every second until condition on the url is satisfied

  }

  public downloadGithub() {

    console.log("GitHub");

    var url = `https://github.com/login/oauth/authorize?client_id=8fd3343f822c2429ad95&scope=user%20repo`;
    var popupWindow = this.popupwindow(url, "GitHub Login", 400, 530);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");

    var codeParam: string | null = "";

    var self = this;
    const checkURLChange = setInterval(function () {
      if (!popupWindow || popupWindow.closed) {
        clearInterval(checkURLChange);
        console.log('Popup window closed.');

      } else if (popupWindow.location.href.indexOf("github.com") === -1) { //url does not contains "github.com"
        console.log('URL in popup window changed:', popupWindow.location.href);

        const queryString = popupWindow.location.search;
        const urlParams = new URLSearchParams(queryString);
        codeParam = urlParams.get("code");
        console.log("CODE:", codeParam)

        popupWindow.close();

        if (codeParam && (localStorage.getItem("accessToken") === null)) {

          self.githubService.getAccessToken(codeParam)
            .then(() => self.githubService.getUserData())
            .then(() => self.githubService.getRepoList())
            .then((data) => {

              let condition = (repo: { name: string; }) => repo.name == 'TALightProject-Archives';
              let isPresentRepo = data.findIndex(condition)

              if (isPresentRepo !== -1) { data.splice(isPresentRepo, 1); }

              self.reposList = data
            })
            .then(() => {
              self.selectedRepo = '';
              self.importButtonRepoDisabled = true;
              self.importVisible = true
            })
        }
      }
    }, 1000); // Check every second until condition on the url is satisfied

  }


  public uploadFiles() {
    this.exportVisible = false;
    let items = this.fs.treeToList(
      this.projectManagerService.getCurrentDriver().fsRoot
    )

    let tree: any = [];

    while (items.length !== 0) {
      let item = items.shift();
      let file = item as FsNodeFile;

      let content;

      if (file.content) {
        console.log("Process:file", file)
        if (file.content instanceof ArrayBuffer) {
          content = new TextDecoder().decode(file.content);
        } else {
          content = file.content
        }

        tree.push({
          path: file.path.slice(1),
          mode: '100644',
          type: 'blob',
          content: content
        })
      }
    }

    console.log("TREE: ", tree);
    let parentCommitsha: any;

    let repository: string;

    if (this.exportDropDisabled) {
      repository = this.newRepoName;

      this.githubService.createRepository(repository)
        .then(() => this.githubService.getReference(repository))
        .then((data) => { parentCommitsha = data.object.sha; })
        .then(() => this.githubService.createTree(repository, tree))
        .then((data) => this.githubService.createCommit(repository, data.sha, parentCommitsha))
        .then((data) => this.githubService.updateReference(repository, data.sha))
        .then((data) => {

          // Show notify on screen
          if (!data.error) {
            this.showToastMessage('success', 'Upload successful')
          } else {
            this.showToastMessage('error', 'Upload failed');
          }
        })

    } else {
      repository = this.selectedRepo.name;

      this.githubService.getReference(repository)
        .then((data) => { parentCommitsha = data.object.sha; })
        .then(() => this.githubService.createTree(repository, tree))
        .then((data) => this.githubService.createCommit(repository, data.sha, parentCommitsha))
        .then((data) => this.githubService.updateReference(repository, data.sha))
        .then((data) => {

          // Show notify on screen
          if (!data.error) {
            this.showToastMessage('success', 'Upload successful')
          } else {
            this.showToastMessage('error', 'Upload failed');
          }
        })
    }
  }


  public replaceProject(data: any) {
    // Before delete files and folders from root, then import project from Github
    let driver = this.projectManagerService.getCurrentDriver()

    driver.scanDirectory('/').then((folder) => {
      driver.fsRoot = folder ?? FsService.EmptyFolder;

      this.deleteFolder(driver.fsRoot, driver.fsRoot)

      this.refreshRoot();

    }).then(() => this.importProject(data))
  }


  public downloadFiles() {
    this.importVisible = false;

    this.githubService.getRepositoryAsTar(this.selectedRepo.name)
      .then((url) => this.githubService.getTar(url))
      .then(async (response) => {
        let data = await response.arrayBuffer();
        this.replaceProject(data);
      }
    )
  }


  private async uploadFile(repository: string, filename: string, content: ArrayBuffer, mime: string) {
    console.log("UPLOAD FILE")

    // Prepare data to upload on GitHub
    var binary = '';
    var bytes = new Uint8Array(content);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    var bodyObj = JSON.stringify({
      "content": binary
    });

    //TODO work just on local 
    await fetch("http://localhost:4000/uploadFile?username=" + localStorage.getItem("username") + "&filename=" + filename + "&repository=" + repository, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken"), // Bearer ACCESSTOKEN
        "Content-Type": "application/json"
      },
      body: bodyObj,
    }).then((response) => {

      return response.json();
    }).then((data) => {
      console.log("UPLOAD RESPONSE:", data);

      // Show notify on screen
      if (data.commit) {
        this.showToastMessage('success', 'Upload successful')
      } else {
        this.showToastMessage('error', 'Upload failed');
      }

    })
  }


  public enableButton(mode: any) {
    if (mode === 'export') 
      this.exportButtonRepoDisabled = false;
    else 
      this.importButtonRepoDisabled = false;
  }

  public detectInput() {

    this.repoNameHelp = "Enter new repository name.";
    setTimeout(() => {
      let repoLabel = document.getElementById('repoName-help') as HTMLElement;
      repoLabel.style.color = "black";
    }, 0)

    if (this.newRepoName.length > 0) {
      this.exportDropDisabled = true;

      let condition = (repo: any) => repo.name == this.newRepoName
      let repoFound = this.reposList.findIndex(condition);

      if (repoFound !== -1) {

        this.repoNameHelp = "The repository '" + this.newRepoName + "' already exists on this account.";
        setTimeout(() => {
          let repoLabel = document.getElementById('repoName-help') as HTMLElement;
          repoLabel.style.color = "red";
        }, 0)

        this.exportButtonRepoDisabled = true;

      } else if (this.newRepoName === 'TALightProject-Archives') {

        this.repoNameHelp = "The repository '" + this.newRepoName + "' is only for uploading archives.";
        setTimeout(() => {
          let repoLabel = document.getElementById('repoName-help') as HTMLElement;
          repoLabel.style.color = "red";
        }, 0)

        this.exportButtonRepoDisabled = true;

      } else {

        this.repoNameHelp = "Enter new repository name.";
        setTimeout(() => {
          let repoLabel = document.getElementById('repoName-help') as HTMLElement;
          repoLabel.style.color = "black";
        }, 0)

        this.exportButtonRepoDisabled = false;
      }
    } else {
      this.exportDropDisabled = false;

      if (this.selectedRepo == undefined) {
        this.exportButtonRepoDisabled = true;
      }
    }
  }


  public signIn() {

    // Google sign-in
    // asl-google-signin-button is a wrapper of a clickable div which is responsible to open sign-in popup

    this.googleLogin = true; // -> TODO: Verify when set tt/ff this flag
    let element: HTMLElement = document.getElementById("g_upload")?.children[0].children[0].children[0] as HTMLElement;
    element.click();

  }


  public async uploadGoogleDrive(filename: string, content: ArrayBuffer | string, mime = "application/octet-stream") {

    var folderId;
    var fileMetadata;
    var data;
    var response;

    // Search for TALightProjects Folder
    response = await fetch("https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.folder' and name='TALightProjects'", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.accessToken
      },
    });

    data = await response.json();

    if (data.files.length == 0) {

      // Create TALightProjects Folder
      fileMetadata = {
        name: 'TALightProjects',
        mimeType: 'application/vnd.google-apps.folder',
      };

      const response = await fetch("https://www.googleapis.com/drive/v3/files", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fileMetadata)
      });

      data = await response.json();
      folderId = data.id

    }
    else {
      folderId = data.files[0].id;
    }

    // Upload file under TALightProjects Folder on Drive
    var formData = new FormData();

    fileMetadata = {
      name: filename,
      parents: [folderId]
    };

    formData.append("metadata", new Blob([JSON.stringify(fileMetadata)], { type: "application/json" }));
    formData.append("data", new Blob([content], { type: mime }), filename);


    const res = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
      method: "POST",
      body: formData,
      headers: { Authorization: "Bearer " + this.accessToken },
    })

    data = await res.json();

    // Reset user connection params
    this.user = undefined;
    this.accessToken = '';

    // Show notify on screen
    if (!data.error) {
      this.showToastMessage('success', 'Upload successful')
    } else {
      this.showToastMessage('error', 'Upload failed');
    }

    this.googleLogin = false;

  }

  public showToastMessage(severity: string, detail: string) {
    this.messageService.add({
      key: 'tl',
      severity: severity,
      summary: 'Info',
      detail: detail,
    });
  }

  public async uploadOneDrive(filename: string, content: ArrayBuffer | string, mime = "application/octet-stream") {

    this.microsoftLogin = true;

    const response = await this.authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
    var res;

    var accessToken = response.authToken;

    // NOTE: With OneDrive it is not necessary to check if the TALightsProjects folder
    // exists and possibly create it because this is done automatically by the service

    // Prepare data for request
    var formData = new FormData();

    var fileMetadata = {
      name: filename,
    };

    formData.append("metadata", new Blob([JSON.stringify(fileMetadata)], { type: "application/json" }));
    formData.append("content", new Blob([content], { type: mime }), filename);

    res = await fetch("https://graph.microsoft.com/v1.0/me/drive/root:/TALightsProjects/" + filename + ":/content", {
      method: "PUT",
      body: content,
      headers: {
        Authorization: "Bearer " + accessToken,
        'Content-Type': mime
      },
    });

    const data = await res.json();

    this.microsoftLogin = false;

    // Show notify on screen
    if (!data.error) {
      this.showToastMessage('success', 'Upload successful')
    } else {
      this.showToastMessage('error', 'Upload failed');
    }

  }

  public triggerDownload(filename: string, content: ArrayBuffer | string, mime = "application/octet-stream") {
    let a = document.createElement("a");

    const blob = new Blob([content], { type: mime });
    let url = window.URL.createObjectURL(blob);

    a.style.display = "none";
    a.download = filename;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
