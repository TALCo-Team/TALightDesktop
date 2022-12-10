import { Component, ViewChild } from '@angular/core';
import { EditorComponent } from 'ngx-monaco-editor-v2';
import { AppTheme, ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'tal-code-editor-widget',
  templateUrl: './code-editor-widget.component.html',
  styleUrls: ['./code-editor-widget.component.scss'],
})
export class CodeEditorWidgetComponent {
  public lang: string = "javascript";
  public editorOptions: any;

  public code: string = 'function x() {\n\tconsole.log("Hello world!");\n}';

  @ViewChild("editor") public editor!: EditorComponent;

  constructor(
    private readonly themeService: ThemeService,
  ) {
    this.themeService.themeChanged.subscribe((theme) => {
      this.updateEditorOptions();
    });

    this.updateEditorOptions();
  }

  public updateEditorOptions(): void {
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
