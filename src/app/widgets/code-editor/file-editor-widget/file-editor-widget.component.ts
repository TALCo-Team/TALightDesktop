import { Component, ElementRef, EventEmitter, Input,  OnInit, Output, ViewChild } from '@angular/core';
import { encode } from 'base64-arraybuffer';
import { marked } from 'marked';
import { FsNodeFile } from 'src/app/services/fs-service/fs.service.types';
import { ThemeService } from 'src/app/services/theme-service/theme.service';
import { MonacoEditorWidgetComponent } from '../monaco-editor-widget/monaco-editor-widget.component';

// Editor UI
export enum EditorType{
  None,
  Code,
  Archive,
  Markdown,
  Image,
  Browser,
  Unknown,
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
    console.log('FileAssociation:match:',parts)
    if (parts.length > 1){
      let ext = parts.splice(-1)[0]
      console.log('FileAssociation:ext:',ext)
      if(this.pattern==ext) { return true }
      if(ext.match(this.pattern)){ return true }
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
    console.log('FileAssociationChoiceList:match:',matches)
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

  protected isBlurred = false;

  EditorType = EditorType
  public editorType = EditorType.None
  public editorOption?:EditorOptions

  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");


  fileAssocList = new FileAssociationChoiceList([
    //Code
    new FileAssociation('py', EditorType.Code, new EditorOptionsMonaco('python')),
    new FileAssociation('csv', EditorType.Code, new EditorOptionsMonaco('csv')),
    new FileAssociation('json', EditorType.Code, new EditorOptionsMonaco('json')),
    new FileAssociation('txt', EditorType.Code, new EditorOptionsMonaco('text')),
    new FileAssociation('js', EditorType.Code, new EditorOptionsMonaco('javascript')),
    new FileAssociation('yaml', EditorType.Code, new EditorOptionsMonaco('yaml')),

    //Markdown
    new FileAssociation('md', EditorType.Markdown, new EditorOptionsMonaco('markdown')),

    //Archive
    new FileAssociation('tar', EditorType.Archive),
    new FileAssociation('zip', EditorType.Archive),

    //PDF
    new FileAssociation('pdf', EditorType.Browser, new EditorOptionsBrowser(true,'application/pdf')),

    //Images
    new FileAssociation('png', EditorType.Browser, new EditorOptionsBrowser(true,'image/png')),
    new FileAssociation('jpg', EditorType.Browser, new EditorOptionsBrowser(true,'image/jpg')),

    //Other
    new FileAssociation('.*', EditorType.Browser, new EditorOptionsBrowser(true),-10),
  ])

  @Input("selectedFile") private _selectedFile: FsNodeFile | null = null;
  @ViewChild("monacoEditor") public monacoEditor!: MonacoEditorWidgetComponent;
  @ViewChild("browserEditor") public browserEditor!: ElementRef;
  @ViewChild("imageViewer") public imageViewer!: ElementRef;
  @ViewChild("markdownPreview") public markdownPreview!: ElementRef;


  @Output('onChange') public onChange = new EventEmitter<FsNodeFile>();

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
    console.log('openEditor:', this.editorType.toString())
    switch(this.editorType){
      case EditorType.Markdown:
        let markdownBox = this.markdownPreview.nativeElement as HTMLDivElement;
        if(this.selectedFile.content instanceof ArrayBuffer){
          this.selectedFile.content = this.binDecoder.decode(this.selectedFile.content)
        }
        markdownBox.innerHTML = await marked( this.selectedFile.content )
        break;
      case EditorType.Code:
        let monacoOptions = this.editorOption as EditorOptionsMonaco;
        if(this.selectedFile.content instanceof ArrayBuffer){
          this.selectedFile.content = this.binDecoder.decode(this.selectedFile.content)
        }
        this.monacoEditor.selectedFile = this.selectedFile
        this.monacoEditor.language = monacoOptions.language;
        this.monacoEditor.updateEditorOptions()
        break;
      case EditorType.Browser:
        let browserOptions = this.editorOption as EditorOptionsBrowser;
        let iframe = this.browserEditor.nativeElement as HTMLIFrameElement;
        let header = 'data:'+browserOptions.mime+';'
        let body;
        if(this.selectedFile.content instanceof ArrayBuffer){
          console.log('openEditor:Browser:',Array.from(new Uint8Array(this.selectedFile.content) ) )
          body = encode(this.selectedFile.content)
        }else{
          body = btoa(this.selectedFile.content)
        }
        let daraurl = header + 'base64,' + body

        /*
        let id = 'doclink'
        let filename = this.selectedFile.name
        let link = `<a id="${id}" download="${filename}" href="${daraurl}"></a>`
        let script = `<script>document.getElementById('${id}').click()</script>`
        let template = `<html><body>${link}${script}</body></html>`
        */

        iframe.src = daraurl

        break;
    }
  }

  public shouldHide(editorType: EditorType){
    return this.editorType !== editorType;
  }



  //MonacoEditor

  public monacoEditorDidChange(file:FsNodeFile){
    this.onChange.emit(file)
  }

  protectoggleBlur()
  {
    this.isBlurred = !this.isBlurred;
  }

}
