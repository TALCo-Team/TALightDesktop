import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { noop } from 'rxjs';
import { FsNodeFile } from 'src/app/services/fs-service/fs.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
  selector: 'tal-monaco-editor-widget',
  templateUrl: './monaco-editor-widget.component.html',
  styleUrls: ['./monaco-editor-widget.component.scss']
})
export class MonacoEditorWidgetComponent implements ControlValueAccessor, OnInit, OnChanges {
  @ViewChild("monacoEditor") public monacoEditor!: EditorComponent;
  public editorOptions: any;
  private innerValue: string = '';
  
  @Input("selectedFile") private _selectedFile: FsNodeFile | null = null;
  @Input("language") public language: string = "";
  //Code
  
  
  
  @Output('onChange') public onChange = new EventEmitter<Event>();
  @Output('onInput') public onInput = new EventEmitter<InputEvent>();

  

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
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  // get accessor
  public get value(): string {
    return this.innerValue;
  }

  // Set accessor including call the onchange callback
  public set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  // From ControlValueAccessor interface
  public writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  
  public change(event:Event): void {
    this.onChange.emit(event);
  }
  public input(event:InputEvent): void {
    this.onInput.emit(event);
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
