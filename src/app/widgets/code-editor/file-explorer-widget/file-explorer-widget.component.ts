import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { ConfirmationService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FsService, Tar } from 'src/app/services/fs-service/fs.service';
import { FsNodeFile, FsNodeFolder, FsServiceDriver } from 'src/app/services/fs-service/fs.service.types';
import { ProjectManagerService } from 'src/app/services/project-manager-service/project-manager.service';
import { ProjectEnvironment } from 'src/app/services/project-manager-service/project-manager.types';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';


@Component({
  selector: 'tal-file-explorer-widget',
  templateUrl: './file-explorer-widget.component.html',
  styleUrls: ['./file-explorer-widget.component.scss']
})
export class FileExplorerWidgetComponent implements OnInit {
  public project: ProjectEnvironment | null = null;
  public rootDir = "/"
  public showHidden = false
  public fsroot = FsService.EmptyFolder
  
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
  

  @ViewChild("nameEditing") public nameEditingElement?: ElementRef;
  @ViewChild("newItemName") public newItemNameElement?: ElementRef;

  @ViewChildren(OverlayPanel) public panels?: QueryList<OverlayPanel>;

  @Output("onUpdateRoot") public onUpdateRoot = new EventEmitter<FsNodeFolder>();

  @Output("onSelectFile") public onSelectFile = new EventEmitter<FsNodeFile>();
  
  
  @Output("showHiddenChanged") public showHiddenChanged = new EventEmitter<boolean>(); 

  constructor(
    private confirmationService: ConfirmationService, 
    private fs:FsService,
    private pm: ProjectManagerService,
  ) {
    this.pm.onProjectChanged.subscribe( (project)=>{this.didProjectChanged(project)} )  
  }


  ngOnInit() {
    this.bindCollapseEvent();
    //alert('init!');
    /*
    let project = this.pm.getCurrentProject()
    if(project){
      this.didProjectChanged(project)
    }
    */
    
  }
  
  public didProjectChanged(project:ProjectEnvironment){
    console.log("FileExplorerWidgetComponent:didProjectChanged")
    this.project = project;
    this.project?.driver.ready().then((ready)=>{
      this.refreshRoot();
    })
  }

  refreshRoot(onDone?:()=>void){
    this.project?.driver.scanDirectory(this.rootDir).then((folder)=>{
      this.fsroot = folder ?? FsService.EmptyFolder

      this.bindCollapseEvent();
      this.onUpdateRoot?.emit(this.fsroot);
      if(onDone){onDone()}
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

  public handleClickEvent(event:Event){
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
    if (this.panels) {
      this.panels.forEach(p => p.hide());
    }
  }

  public selectFile(file: FsNodeFile) {
    console.log('selectFile',file)
    this.project?.driver.readFile(file.path).then((content)=>{
      file.content = content ?? "";
      this.selectedFile = file;
      this.onSelectFile?.emit(file);
    })
    
  }

  public selectFolder(folder: FsNodeFolder) {
    if (this.selectedFolder == folder){
      this.selectedFolder == null;
    }
  }

  public openSettings(){
    if(!this.showHidden){
      this.showHidden = true
      this.refreshRoot(()=>{this.openSettings()})
    }

    console.log("openSettings")
    let projectFolder = this.fsroot.folders.find((item)=>{
      return item.path + "/" == this.project?.config?.DIR_PROJECT
    })
    if(!projectFolder){return}
    console.log("openSettings:projectFolder:",projectFolder)
    let configFile = projectFolder.files.find((file)=>{
      return file.path == this.project?.config?.CONFIG_PATH
    })
    if(!configFile){return}
    console.log("openSettings:configFile:",configFile)
        
    this.selectFile(configFile);
        
  }
  

  public toggleHidden(){
    this.showHidden = !this.showHidden;
    this.refreshRoot()
  }

  public isVisibile(fsitem: FsNodeFile|FsNodeFolder){
    let isHidden = fsitem.name.startsWith('.');
    return this.showHidden || ( !this.showHidden && !isHidden ) 
  }

  /** EDITING METHODS  **/
  public startEditing(folder: FsNodeFolder, item: FsNodeFile | FsNodeFolder) {
    this.editingItem = item;
    this.editingValue = item.name;
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
          this.editingItem.name = this.editingValue;
          this.onUpdateRoot?.emit(this.fsroot);
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
    if(!this.fsroot){return}
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Sei sicuro di voler eliminare questo file?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFile(this.fsroot, file);
        },
        reject: () => {
          //reject action
        }
      });
    }
  }

  private deleteFile(currentFolder: FsNodeFolder, file: FsNodeFile) {
    this.project?.driver.delete(file.path).then(()=>{
      this.refreshRoot();
    })
    /*
    if (currentFolder.files.indexOf(file) >= 0) {
      currentFolder.files.splice(currentFolder.files.indexOf(file), 1);
      this.change?.emit(this.root);
    } else {
      for (let i = 0; i < currentFolder.folders.length; i++) {
        const folder: TalFolder = currentFolder.folders[i];
        this.deleteFile(folder, file);
      }
    }
    */
  }

  public deleteFolderClick(event: Event, folder: FsNodeFolder) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Sei sicuro di voler eliminare questa cartella? Tutti i file e le cartelle contenute verranno eliminate.',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFolder(this.fsroot, folder);
        },
        reject: () => {
          //reject action
        }
      });
    }
  }

  private deleteFolder(currentFolder: FsNodeFolder, folder: FsNodeFolder) {
    this.project?.driver.delete(folder.path).then(()=>{
      this.refreshRoot();
    })
    /*
    if (currentFolder.folders.indexOf(folder) >= 0) {
      currentFolder.folders.splice(currentFolder.folders.indexOf(folder), 1);
      this.change?.emit(this.root);
    } else {
      for (let i = 0; i < currentFolder.folders.length; i++) {
        const subFolder: TalFolder = currentFolder.folders[i];
        this.deleteFolder(subFolder, folder);
      }
    }
    */
  }
  /***************/

  /** CREATE METHODS **/
  public syncFilesystem(folder: FsNodeFolder) {
    setTimeout(() => { 
      this.refreshRoot();
    }, 0);
  }


  public addNewItem(folder: FsNodeFolder, type: "file" | "folder") {
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
          if (this.newItemType === "file") {
            let path = this.newItemFolder.path + "/" + this.newItemValue
            this.project?.driver.writeFile(path, "").then(()=>{
              this.refreshRoot()
            })
            /*
            this.newItemFolder.files.push({
              name: this.newItemValue,
              content: ""
            } as TalFile );
            */
          } else {
            this.project?.driver.createDirectory("./"+this.newItemValue).then(()=>{
              this.refreshRoot()
            })
            
            this.newItemFolder.folders.push({
              name: this.newItemValue,
              path: "./"+this.newItemValue,
              files: [],
              folders: []
            });

            //this.bindCollapseEvent();
          }
          //this.refreshRoot()
          //this.change?.emit(this.root);
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
  async upload(event:Event) {
    if (!( event.target instanceof HTMLInputElement )){ return false; }
    let target = event.target as HTMLInputElement
    if(!target.files || target.files.length == 0){ return false; }

    if(target.files.length == 1 && target.files[0].name.endsWith('.tal.tar') ){
      let content = await target.files[0].arrayBuffer();
      await this.importProject(content)
    }else{
      for(let i = 0; i<target.files.length; i++){
        let file = target.files[i]
        let content = await file.arrayBuffer();
        console.log("upload:content:", new Uint8Array(content))
        let path = (!this.selectedFolder?"/":this.selectedFolder.path) + file.name
        console.log('upload:', path, content)
        await this.project?.driver.writeFile(path, content)
      }
    }
    this.refreshRoot()
    return true;
  }

  async importProject(tarball:ArrayBuffer) {
    Tar.unpack(tarball, async (files, folders)=>{
      console.log("extractTar:unpack:files",files)
      console.log("extractTar:unpack:folders",folders)
  
      for(var idx in folders){
        console.log("extractTar:createDirectory:")
        let folder = folders[idx]
        let path = folder.path
        console.log("extractTar:createDirectory:",path)
        await this.project?.driver.createDirectory(path)
      }
      console.log("extractTar:createDirectory:DONE")
      for(var idx in files){
        console.log("extractTar:writeFile:")
        let file = files[idx]
        let path = file.path
        let content = file.content
        console.log("extractTar:writeFile:",path,content)
        await this.project?.driver.writeFile(path, content)
      }
      console.log("extractTar:writeFile:DONE")
      this.refreshRoot()
    })
    console.log("import:data:",tarball)
        
    return true
  }

  public export() {
    let items = this.fs.treeToList(this.fsroot)
    if(items.length == 0 ) {
      console.log("export: No files found to be exported")
    }

    console.log("export:items:",items)
    Tar.pack(items, (tarball:ArrayBuffer)=>{
      let tarname = "tal-project-"+ Date.now()+".tal.tar"
      console.log('export:tarball:',tarname,tarball)
      this.triggerDownload(tarname, tarball, "application/x-tar")
    })
  }

  public triggerDownload(filename:string, content:ArrayBuffer|string, mime="application/octet-stream"){
    let a = document.createElement("a");
    
    const blob = new Blob([content], {type: mime});
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