import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { AppTheme, ThemeService } from 'src/app/services/theme.service';

const noop = () => { };

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CodeEditorWidgetComponent),
  multi: true,
};

@Component({
  selector: 'tal-code-editor-widget',
  templateUrl: './code-editor-widget.component.html',
  styleUrls: ['./code-editor-widget.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class CodeEditorWidgetComponent implements ControlValueAccessor, OnInit, OnChanges {
  public editorOptions: any;

  @Input("lang") public lang: string = "";

  @ViewChild("editor") public editor!: EditorComponent;

  private innerValue: string = '';

  @Output('input') public onInput: EventEmitter<string> =
    new EventEmitter<string>();
  @Output('change') public onChange: EventEmitter<string> =
    new EventEmitter<string>();

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

  // Placeholders for the callbacks which are later provided
  // by the Control Value Accessor
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

  public input(): void {
    this.onInput.emit(this.value);
  }
  public change(): void {
    this.onChange.emit(this.value);
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
    console.log(this.lang);
    this.editorOptions = {
      language: this.lang,
      theme: this.theme,
      automaticLayout: true
    }
  }

  public get theme(): string {
    switch (this.themeService.currentTheme) {
      case AppTheme.dark:
        return "vs-dark";
      default:
        return "vs";
    }
  }

}
