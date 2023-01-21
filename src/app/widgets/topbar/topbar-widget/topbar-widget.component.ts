import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';
import { ApiService } from 'src/app/services/api-service/api.service';
import { AppTheme, ThemeService } from 'src/app/services/theme-service/theme.service';

@Component({
  selector: 'tal-topbar-widget',
  templateUrl: './topbar-widget.component.html',
  styleUrls: ['./topbar-widget.component.scss']
})
export class TopbarWidgetComponent implements OnInit {

  @ViewChild("urlInput") public urlInput?: AutoComplete;
  
  url = "wss://ta.di.univr.it/sfide";
  urlCache:string[] = []
  escapeRegEx = /[.*+?^${}()|[\]\\]/g
  
  constructor(
    public readonly themeService: ThemeService, 
    public api:ApiService) {
      this.api.setUrl(this.url)
  }

  ngOnInit(): void {
    this.urlCache = [...this.api.urlCache]
  }

  public get changeThemIcon(): string {
    return this.themeService.currentTheme == AppTheme.dark ? 'pi-sun' : 'pi-moon';
  }

  public toggleTheme() {
    this.themeService.toggleTheme();
  }

  filterSuggestions(event:any) {
    let query = event.query.replace(this.escapeRegEx, '\\$&')
    let filter = new RegExp(".*"+query+".*")
    let urlCache:string[] = []
    this.api.urlCache.forEach( (url:string) => {
      if(url.match(filter)){
        urlCache.push(url)
      }
    });
    this.urlCache=urlCache
  }

  public changeURL(event:Event) {
    console.log("changeURL:event:", event)
    let url = this.url;
    console.log("changeURL:urlCache:before:",this.urlCache)
    if(!url || !this.api.setUrl(url)){
      console.log("changeURL:setURL:failed")
    }
    this.urlCache = this.api.urlCache
    console.log("changeURL:urlCache:after:",this.urlCache)
    console.log("changeURL:url:",url)
  }

  public removeURL(url:string, event:Event) {
    if(event){ event.preventDefault();event.stopPropagation();event.stopImmediatePropagation(); }
    
    console.log("changeURL:urlCache:before:",this.urlCache)
    if(!url || !this.api.removeFromCache(url)){
      console.log("changeURL:setURL:failed")
    }
    this.urlCache = this.api.urlCache
    console.log("changeURL:urlCache:after:",this.urlCache)
    console.log("changeURL:url:",url)
  }
  
}
