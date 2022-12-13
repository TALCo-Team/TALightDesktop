import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { removeFileDecorator } from 'indexeddb-fs/dist/framework/parts';
import { ConfirmationService } from 'primeng/api';

export interface TalFile {
  name: string;
  content: string;
}

export interface TalFolder {
  name: string;
  folders: TalFolder[];
  files: TalFile[];
}

@Component({
  selector: 'tal-editor-files-widget',
  templateUrl: './editor-files-widget.component.html',
  styleUrls: ['./editor-files-widget.component.scss']
})
export class EditorFilesWidgetComponent implements OnInit {
  @Input("root") root: TalFolder =
    {
      name: "src",
      folders: [
        {
          name: "app",
          folders: [
            {
              name: "widgets",
              folders: [
                {
                  name: "code-editor-test-nome-lungo",
                  folders: [],
                  files: [
                    {
                      name: "editor-files-widget",
                      content: "content"
                    }
                  ]
                }
              ],
              files: []
            }
          ],
          files: [
            {
              name: "app.component.ts",
              content: "content"
            },
            {
              name: "app.module.ts",
              content: "content"
            },
          ]
        }
      ],
      files: [
        {
          name: "main.ts",
          content: "content"
        }
      ]
    };

  public editingValue: string = "";
  public editingItem: TalFile | TalFolder | null = null;

  @ViewChild("nameEditing") public nameEditingElement?: ElementRef;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    setTimeout(() => {
      const rows = document.getElementsByClassName("collapse-toggle");
      for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const row = e.target as HTMLElement;
          let newParent: HTMLElement = row;
          let safeCount = 0;
          do {
            newParent = newParent.parentElement as HTMLElement;
            safeCount++;
          } while (!newParent.classList.contains("tal-folder-subtree") && safeCount < 10);

          if (safeCount < 10) {
            newParent.classList.toggle("collapsed");
            /* const children = newParent.getElementsByClassName("tal-subfolder");
            for (let j = 0; j < children.length; j++) {
              children[j].classList.toggle("collapsed");
            } */
          }
        }
        );
      }
    }, 0);
  }

  public startEditing(item: TalFile | TalFolder) {
    this.editingItem = item;
    this.editingValue = item.name;

    setTimeout(() => {
      if (this.nameEditingElement) {
        this.nameEditingElement.nativeElement.focus();
      }
    }, 0);
  }

  public saveEditing() {
    if (this.editingItem) {
      this.editingItem.name = this.editingValue;
      this.editingItem = null;
      this.editingValue = "";
    }
  }

  public cancelEditing() {
    this.editingItem = null;
    this.editingValue = "";
  }

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
    if (currentFolder.files.indexOf(file) >= 0) {
      currentFolder.files.splice(currentFolder.files.indexOf(file), 1);
    } else {
      for (let i = 0; i < currentFolder.folders.length; i++) {
        const folder: TalFolder = currentFolder.folders[i];
        this.deleteFile(folder, file);
      }
    }
  }

  public deleteFolderClick(event: Event, folder: TalFolder) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Sei sicuro di voler eliminare questo file?',
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
    if (currentFolder.folders.indexOf(folder) >= 0) {
      currentFolder.folders.splice(currentFolder.folders.indexOf(folder), 1);
    } else {
      for (let i = 0; i < currentFolder.folders.length; i++) {
        const subFolder: TalFolder = currentFolder.folders[i];
        this.deleteFolder(subFolder, folder);
      }
    }
  }
}
