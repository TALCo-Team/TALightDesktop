import { Component, OnInit, ViewChild } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatNestedTreeNode } from "@angular/material/tree";
import { MatTreeModule }  from '@angular/material/tree';
import { FsService, FsServiceTest, FsNode } from "src/app/services/fs.service"
import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


class FileNode extends FsNode{
  expanded=false;
  changed=false;
  level=0;

  
  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}


@Component({
  selector: 'editor-files-widget',
  templateUrl: './editor-files-widget.component.html',
  styleUrls: ['./editor-files-widget.component.scss']
})
export class EditorFilesWidgetComponent implements OnInit {
  @ViewChild(MatTreeModule) public filetree?: MatTreeModule;
  public root:FileNode;


  public treeControl;
  public dataSource;
  public fs?:FsService;
  public test:FsServiceTest;
  constructor() { 
    this.treeControl = new FlatTreeControl<FileNode>();
    this.dataSource = new FilesystemDataSource();


    //this.fs = new FsService();
    this.test = new FsServiceTest();
    this.root = new FileNode("/","/",true);
    this.dataSource.data = [this.root];

  }

  hasChild = (_: number, node: FileNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.addFile();
    this.refresh();
    
  }

  

  addFile(isFolder=false){
    this.test.createTestFiles();
  }

  deleteFile(){

  }

  renameFile(){

  }

  async refresh(){
    //alert("asd")
    this.root = await this.test.scanDirectory(this.test.fs.rootDir, true) as FileNode;
    this.dataSource.data = [this.root]!;
    this.treeControl.expandAll();
    //alert(JSON.stringify(this.root));
  }
  
}




export class FilesystemDataSource implements DataSource<FileNode> {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] {
    return this.dataChange.value;
  }
  set data(value: FileNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private _treeControl: FlatTreeControl<FileNode>,
    private _database: FileNode,
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<FileNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<FileNode>).added ||
        (change as SelectionChange<FileNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<FileNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<FileNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: FileNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) {
      // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(
          name => new FileNode(name, node.level + 1, this._database.isExpandable(name)),
        );
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (
          let i = index + 1;
          i < this.data.length && this.data[i].level > node.level;
          i++, count++
        ) {}
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1000);
  }
}
