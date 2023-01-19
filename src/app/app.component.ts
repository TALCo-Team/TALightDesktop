import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from './services/api-service/api.service';
import { ConnectionManagerService } from './services/connection-manager-service/connection-manager.service';
import { AppTheme, ThemeService } from './services/theme-service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild("urlInput") public urlInput?: ElementRef;
  
  url = "wss://ta.di.univr.it/sfide";

  constructor(
    public readonly themeService: ThemeService, 
    private api:ApiService) {
      this.api.setUrl(this.url)
  }

  public get changeThemIcon(): string {
    return this.themeService.currentTheme == AppTheme.dark ? 'pi-sun' : 'pi-moon';
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }

  public changeURL(event:Event) {
    console.log("changeURL", event)
    let input = this.urlInput?.nativeElement as HTMLInputElement
    console.log("urlInput", input.value)
    let url = input.value.trim()
    if(!url || !this.api.setUrl(url)){
      console.log("setURL:changeURL")
    }
    console.log(url)
  }
}
