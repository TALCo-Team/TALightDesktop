import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export enum AppTheme {
  light = "light-theme.css",
  dark = "dark-theme.css",
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {
    const storedTheme: AppTheme = localStorage.getItem('theme') as AppTheme || AppTheme.light;
    this.setTheme(storedTheme);
  }

  public get currentTheme(): AppTheme {
    const storedTheme: string = localStorage.getItem('theme') || AppTheme.light;
    return storedTheme as AppTheme;
  }

  public setTheme(theme: AppTheme): void {
    if (theme === AppTheme.light || theme === AppTheme.dark) {
      let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

      if (themeLink) {
        localStorage.setItem('theme', theme);
        themeLink.href = theme;
      }
    }
  }

  public toggleTheme(): void {
    const storedTheme: string = localStorage.getItem('theme') || AppTheme.light;
    const newTheme: AppTheme = storedTheme === AppTheme.light ? AppTheme.dark : AppTheme.light;
    this.setTheme(newTheme);
  }
}
