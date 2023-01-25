import { Component, ElementRef, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { noop } from 'rxjs';
import { FsNodeFile } from 'src/app/services/fs-service/fs.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';
import { MonacoEditorWidgetComponent } from '../monaco-editor-widget/monaco-editor-widget.component';

// Editor UI
export enum EditorType{
  None,
  Code,
  Archive,
  Markdown,
  Image,
  Browser,
  Default = Browser,
}

export enum MatchMethod{
  Auto,
  Exact,
  Glob,
  Regex,
  Default = Auto,
}
export enum MatchType{
  Auto,
  Extension,
  Mime, //TODO: 
  Default = Auto,
}

//Editor Options
export class EditorOptions{}
export class EditorOptionsMonaco extends EditorOptions{
  constructor(
    public language = "python",
  ){super()}
}
export class EditorOptionsBrowser extends EditorOptions{
  constructor(
    public embedded = true,
    public mime = 'application/octet'
  ){super()}
}


//File Assoc
export class FileAssociation{
  constructor(
    public pattern=".*",
    public editorType = EditorType.None,
    public editorOption?: EditorOptions,
    public priority=0,
    public matchMethod = MatchMethod.Auto, 
    public matchType = MatchType.Auto, 
  ){}
  
  match(file:FsNodeFile){
    let parts = file.name.split(".")
    if (parts.length > 1){
      let ext = parts.splice(0,-1)[0]
      if(this.pattern==ext) { return true } 
      if(this.pattern.match(ext)){ return true } 
    } else {
      //TODO: mime-magic matching
    }

    return false; //No match
  }

  static matchAll(file:FsNodeFile, associations:FileAssociation[]){
    let matches:FileAssociation[] = []
    associations.forEach((association)=>{
      if(association.match(file)){
        matches.push(association)
      }
    })

    matches = matches.sort((a,b)=>{
      return b.priority-a.priority
    })

    return matches;
  }
}


export class FileAssociationChoiceList{
  public associations: FileAssociation[]
  constructor(items: FileAssociation[]){ 
    this.associations = Array.from(items)
  }
  add(item: FileAssociation){ 
    if(this.associations.includes(item)){return;}
    this.associations.push(item)
  }
  match(file:FsNodeFile){
    let matches = FileAssociation.matchAll(file, this.associations)
    if(matches.length == 0){return null}
    let bestMatch = matches[0]
    return bestMatch;
  }
}



@Component({
  selector: 'tal-file-editor-widget',
  templateUrl: './file-editor-widget.component.html',
  styleUrls: ['./file-editor-widget.component.scss']
})
export class FileEditorWidgetComponent implements OnInit {

  EditorType = EditorType
  public editorType = EditorType.None
  public editorOption?:EditorOptions


  fileAssocList = new FileAssociationChoiceList([
    //Code
    new FileAssociation('.py', EditorType.Code, new EditorOptionsMonaco('python')),
    new FileAssociation('.csv', EditorType.Code, new EditorOptionsMonaco('csv')),
    new FileAssociation('.json', EditorType.Code, new EditorOptionsMonaco('json')),
    new FileAssociation('.txt', EditorType.Code, new EditorOptionsMonaco('text')),
    new FileAssociation('.js', EditorType.Code, new EditorOptionsMonaco('javascript')),
    new FileAssociation('.yaml', EditorType.Code, new EditorOptionsMonaco('yaml')),
    new FileAssociation('.md', EditorType.Code, new EditorOptionsMonaco('markdown')),

    //Archive
    new FileAssociation('.tar', EditorType.Archive),

    //PDF
    new FileAssociation('.pdf', EditorType.Browser, new EditorOptionsBrowser(true,'application/pdf')),

    //Other
    new FileAssociation('.*', EditorType.Browser, new EditorOptionsBrowser(true),-10),
  ])

  @Input("selectedFile") private _selectedFile: FsNodeFile | null = null;
  @ViewChild("monacoEditor") public monacoEditor!: MonacoEditorWidgetComponent;
  @ViewChild("browserEditor") public browserEditor!: ElementRef;

  @Output('onChange') public onChange = new EventEmitter<Event>();
  @Output('onInput') public onInput = new EventEmitter<InputEvent>();

  constructor(
    private readonly themeService: ThemeService, 
  ) {
  }

  ngOnInit(): void {

  }

  public get selectedFile():FsNodeFile|null{
    return this._selectedFile;
  }

  public set selectedFile(selectedFile:FsNodeFile|null){
    this._selectedFile = selectedFile
    console.log('selectedFile:',selectedFile)
    this.selectEditor()
  }

  public selectEditor(){
    if(!this._selectedFile) { 
      this.editorType = EditorType.None
      this.openEditor()
      return
    }
    
    let bestMatch = this.fileAssocList.match(this._selectedFile)
    if(!bestMatch){ 
      this.editorType = EditorType.None
      this.openEditor()
      return
    }
    this.editorType = bestMatch.editorType
    this.editorOption = bestMatch.editorOption

    console.log("selectEditor:",this.editorType)
    console.log("selectEditor:editorOption:",this.editorOption)
    
    this.openEditor()
  }

  public async openEditor(){
    if (!this.selectedFile){return}

    switch(this.editorType){
      case EditorType.Code: 
        let monacoOptions = this.editorOption as EditorOptionsMonaco;
        this.monacoEditor.selectedFile = this.selectedFile
        this.monacoEditor.language = monacoOptions.language;
        break;
      case EditorType.Browser: 
        let browserOptions = this.editorOption as EditorOptionsBrowser;
        let iframe = this.browserEditor.nativeElement as HTMLIFrameElement;
        let header = 'data:'+browserOptions.mime+';base64'
        let body;
        if(this.selectedFile.content instanceof ArrayBuffer){
          body = btoa(String.fromCharCode(...new Uint8Array(this.selectedFile.content)));
        }else{
          body = btoa(this.selectedFile.content)
        }
        iframe.src = header + ',' + body
        
        break;
    }
  }

  public shouldHide(editorType: EditorType){
    return this.editorType !== editorType;

  }

  

  //MonacoEditor

  public monacoEditorDidChange(event:Event){
    this.onChange.emit(event)
  }

  public monacoEditorDidInput(event:InputEvent){
    this.onInput.emit(event)
  }


}
