import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export enum AppTheme {
  light = "src/app/themes/light.css",
  dark = "src/app/themes/dark.css",
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  switchTheme(theme: AppTheme): void {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme;
    }
  }
}
