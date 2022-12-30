import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { removeFileDecorator } from 'indexeddb-fs/dist/framework/parts';
import { ConfirmationService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FsNodeFile, FsNodeFolder, FsService, FsServiceDriver } from 'src/app/services/fs-service/fs.service';
import { FsServiceTest } from 'src/app/services/fs-service/fs.service.test';
import { PythonCompilerService } from 'src/app/services/python-compiler-service/python-compiler.service';

export interface TalFile extends FsNodeFile {
  content: string;
}

export interface TalFolder extends FsNodeFolder {

}

@Component({
  selector: 'tal-editor-files-widget',
  templateUrl: './editor-files-widget.component.html',
  styleUrls: ['./editor-files-widget.component.scss']
})
export class EditorFilesWidgetComponent implements OnInit {
  public driver?: FsServiceDriver;
  public rootDir = "/"
  //public driverName = 'example'
  public driverName = 'pyodide'
  public emptyNode = {name:"", path: this.rootDir, files:[], folders:[]}
  public showHidden = false

  @Input("root") root: TalFolder = this.emptyNode;

  
  public editingValue: string = "";
  public editingItem: TalFile | TalFolder | null = null;
  public editingItemFolder: TalFolder | null = null;
  public editingItemError: boolean = false;

  public newItemValue: string = "";
  public newItemType: "file" | "folder" = "file";
  public newItemFolder: TalFolder | null = null;
  public newItemError: boolean = false;

  public openedFile: TalFile | null = null;

  @ViewChild("nameEditing") public nameEditingElement?: ElementRef;
  @ViewChild("newItemName") public newItemNameElement?: ElementRef;

  @ViewChildren(OverlayPanel) public panels?: QueryList<OverlayPanel>;

  @Output("change") public change = new EventEmitter<TalFolder>();
  @Output("open") public open = new EventEmitter<TalFile>();
  @Output("showHiddenChanged") public showHiddenChanged = new EventEmitter<boolean>(); 

  constructor(
    private confirmationService: ConfirmationService, 
    private fs:FsService,
    private python: PythonCompilerService,
    ) {
    //this.driver = fs.getDriver('pyodide');
    this.driver = fs.getDriver(this.driverName);
    //alert(this.driver)
    //this.driver?.writeFile(this.editingItem.path,this.editingItem)
   }

  ngOnInit() {
    this.bindCollapseEvent();
    
    let test = new FsServiceTest(this.fs, this.driverName)
    //this.rootDir = this.driver?.rootDir ?? this.rootDir;
    this.driver?.ready().then((ready)=>{
      //alert('ready!');
      /*
      this.python.createPythonProject().then(()=>{
        this.refreshRoot();
        //alert('ready!');
      })
      */
    })

    

  }

  refreshRoot(){
    this.driver?.scanDirectory(this.rootDir).then((folder)=>{
      this.root = folder ?? this.emptyNode;
      this.bindCollapseEvent();
      this.change?.emit(this.root);
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

  public openFile(file: TalFile) {
    this.driver?.readFile(file.path).then((content)=>{
      file.content = content ?? "";
      this.openedFile = file;
      this.open?.emit(file);
    })
    
  }

  public toggleHidden(){
    this.showHidden = !this.showHidden;
    
  }

  public isVisibile(fsitem: TalFile|TalFolder){
    let isHidden = fsitem.name.startsWith('.');
    return this.showHidden || ( !this.showHidden && !isHidden ) 
  }

  /** EDITING METHODS  **/
  public startEditing(folder: TalFolder, item: TalFile | TalFolder) {
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
          this.change?.emit(this.root);
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
  public deleteFileClick(event: Event, file: TalFile) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Sei sicuro di voler eliminare questo file?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFile(this.root, file);
        },
        reject: () => {
          //reject action
        }
      });
    }
  }

  private deleteFile(currentFolder: TalFolder, file: TalFile) {
    this.driver?.delete(file.path).then(()=>{
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

  public deleteFolderClick(event: Event, folder: TalFolder) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Sei sicuro di voler eliminare questa cartella? Tutti i file e le cartelle contenute verranno eliminate.',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFolder(this.root, folder);
        },
        reject: () => {
          //reject action
        }
      });
    }
  }

  private deleteFolder(currentFolder: TalFolder, folder: TalFolder) {
    this.driver?.delete(folder.path).then(()=>{
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
  public syncFilesystem(folder: TalFolder) {
    setTimeout(() => { 
      //this.refreshRoot();
      this.python.createPythonProject().then(()=>{
        this.refreshRoot();
        //alert('ready!');
      });
    }, 0);
  }


  public addNewItem(folder: TalFolder, type: "file" | "folder") {
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
            this.newItemFolder.files.push({
              name: this.newItemValue,
              content: ""
            } as TalFile );
          } else {
            this.driver?.createDirectory("./"+this.newItemValue).then(()=>{

            })
            this.newItemFolder.folders.push({
              name: this.newItemValue,
              path: "./"+this.newItemValue,
              files: [],
              folders: []
            });

            this.bindCollapseEvent();
          }

          this.change?.emit(this.root);
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

  public export() {
    // TODO: export
  }
}
