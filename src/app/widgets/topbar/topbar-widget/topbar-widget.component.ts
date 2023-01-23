import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild("statusDot") public statusDot?: ElementRef;
  
  

  url;
  urlCache:string[] = []
  escapeRegEx = /[.*+?^${}()|[\]\\]/g
  urlInputClass = ""
  
  constructor( public readonly themeService: ThemeService, 
               public api: ApiService,
               public zone: NgZone,
             ) {
    this.url = api.url;
    this.urlCache = [...this.api.urlCache]
  }

  ngOnInit(): void {
    
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
    let dot = this.statusDot!.nativeElement as HTMLElement
    console.log("changeURL:dot:", dot)
    console.log("changeURL:event:", event)
    let url = this.url;
    console.log("changeURL:urlCache:before:",this.urlCache)
    if( !this.api.setUrl(url) ){
      dot.style.color = "darkred"
      console.log("changeURL:setURL:failed")
    }else{
      this.url = this.api.url;
      console.log("changeURL:setURL:success")
      dot.style.color = "green"
      this.urlCache = this.api.urlCache
    }
    
    console.log("changeURL:urlCache:after:", this.urlCache )
    console.log("changeURL:url:", this.url )
  }

  public removeURL(url:string, event:Event) {
    if(event){ event.preventDefault();event.stopPropagation();event.stopImmediatePropagation(); }
    
    console.log("changeURL:urlCache:before:",this.urlCache)
    if( !this.api.removeFromCache(url) ){
      console.log("changeURL:removeURL:done")
    }
    this.urlCache = this.api.urlCache
    


    console.log("changeURL:urlCache:after:",this.urlCache)
    console.log("changeURL:url:",url)
  }
  
}
