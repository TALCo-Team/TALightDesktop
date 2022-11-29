import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeModule, MatTreeNestedDataSource }  from '@angular/material/tree';
import { FsService, FsServiceTest, FsNode } from "src/app/services/fs.service"
import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import {NestedTreeControl} from '@angular/cdk/tree';

class FileNode implements FsNode{
  name: string;
  path: string;
  isFolder: boolean;
  depth:number;
  children?: FileNode[];
  expanded:boolean;
  changed:boolean;
  

  constructor(){
    this.name = "";
    this.path = "";
    this.depth=0;
    this.isFolder = false;
    this.children = Array<FileNode>();
    this.expanded = false;
    this.changed = true;
  }
}


@Component({
  selector: 'editor-files-widget',
  templateUrl: './editor-files-widget.component.html',
  styleUrls: ['./editor-files-widget.component.scss']
})
export class EditorFilesWidgetComponent implements OnInit, AfterViewInit  {
  @ViewChild(MatTreeModule) public filetree?: MatTreeModule;
  public root:FileNode;


  public treeControl;
  public dataSource;
  public fs?:FsService;
  public test:FsServiceTest;
  constructor() { 
    this.treeControl = new NestedTreeControl<FileNode>( node => node.children );
    this.dataSource = new MatTreeNestedDataSource<FileNode>();
    this.treeControl.isExpandable = (node)=>{return node.expanded}

    //this.fs = new FsService();
    this.test = new FsServiceTest();
    
    this.root = new FileNode();
    this.root.name = "/"
    this.root.path = "/"
    this.root.isFolder = true;

    this.dataSource.data = [this.root];

  }

  hasChild(_: number, node: FileNode){ 
    return !!node.children && node.children.length > 0;
  }

  ngOnInit(): void {
    this.addFile();
  }

  
  ngAfterViewInit(): void
  {
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
    this.test.scanDirectory(this.test.fs.rootDir, true).then((node)=>{
      this.root = node as FileNode;
      this.dataSource.data = [this.root]!;
  });
    //alert(JSON.stringify(this.root));
  }
  
}


