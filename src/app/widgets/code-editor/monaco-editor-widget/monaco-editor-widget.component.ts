import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { noop } from 'rxjs';
import { FsNodeFile } from 'src/app/services/fs-service/fs.service.types';
import { ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
  selector: 'tal-monaco-editor-widget',
  templateUrl: './monaco-editor-widget.component.html',
  styleUrls: ['./monaco-editor-widget.component.scss']
})
export class MonacoEditorWidgetComponent implements ControlValueAccessor, OnInit, OnChanges {
  @ViewChild("monacoEditor") public monacoEditor!: EditorComponent;
  public editorOptions: any;
  
  
  @Input("selectedFile") private _selectedFile: FsNodeFile | null = null;
  @Input("language") public language: string = "";
  //Code
  
  
  
  @Output('onChange') public onChange = new EventEmitter<FsNodeFile>();
  
  public binEncoder = new TextEncoder(); // always utf-8
  public binDecoder = new TextDecoder("utf-8");

  constructor(
    private readonly themeService: ThemeService,
  ) {
  }

  ngOnInit(): void {
    this.themeService.themeChanged.subscribe((theme) => {
      this.updateEditorOptions();
    });
    
    
    this.updateEditorOptions();
  }


  ngAfterViewInit() {
    //this.monacoEditor.registerOnChange((event:any)=>{ this.change(event) })
    //this.monacoEditor.registerOnTouched((event:any)=>{ this.input(event) })

    // this returns null
  }
  
  ngOnChanges(): void {
    this.updateEditorOptions();
  }

  public get selectedFile():FsNodeFile|null{
    return this._selectedFile;
  }

  public set selectedFile(selectedFile:FsNodeFile|null){
    this._selectedFile = selectedFile
    if(!this._selectedFile) {
      this.value = ""; 
      return; 
    }
    let content = this._selectedFile.content; 
    if(typeof content === 'string' )
    { 
      this.value = content
    }

  }

  // CodeEditorControls
  private onTouchedCallback: (_?: any) => void = noop;
  private onChangeCallback: (_?: any) => void = noop;

  public getFileContent():string{
    if(!this._selectedFile){return ""}
    let content = this._selectedFile.content
    if (content instanceof ArrayBuffer){
      content = this.binDecoder.decode(content)
      this._selectedFile.content = content
    }
    return content
  }

  public setFileContent(text:string){
    if(!this._selectedFile){return;}
    this._selectedFile.content = text
  }

  


  // get accessor
  public get value(): string {
    console.log("MonacoEditor:value:get")
    return this.getFileContent(); 
  }

  // Set accessor including call the onchange callback
  public set value(text: string) {
    console.log("MonacoEditor:value:set")
    if(!this._selectedFile){return;}
    let content=this.getFileContent()
    console.log("MonacoEditor:value:old:new",content,text)
    if (text !== content) {
      console.log("MonacoEditor:value:set:changed")
      this.setFileContent(text);
      this.didChange()
      
    }
  }
  // From ControlValueAccessor interface
  public writeValue(text: any) {
    console.log("MonacoEditor:value:writeValue")
    if (text !== this.value) {
      this.value = text;
    }
  }

  
  public didChange(): void {
    console.log("monacoEditor:didChange")
    this.onChangeCallback();
    this.onTouchedCallback();
    if(!this.selectedFile){return;}
    this.onChange.emit(this.selectedFile);
  }

  // From ControlValueAccessor interface
  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }


  public updateEditorOptions(): void {
    console.log(this.language);
    this.editorOptions = {
      language: this.language,
      theme: this.themeService.themeName(),
      automaticLayout: true
    }
  }
    
}
