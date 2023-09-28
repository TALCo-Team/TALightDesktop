import { Component, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'tal-log-api-widget',
  templateUrl: './log-api-widget.component.html',
  styleUrls: ['./log-api-widget.component.scss']
})
export class LogApiWidgetComponent implements OnInit {

  public outputLines:any = [];
  public icon = 'pi-check-circle';
  public label = 'Log Active'
  public isActive:boolean = true;

  @ViewChildren(Tooltip) tooltips!: QueryList <Tooltip>;

  constructor( public zone: NgZone ) {}

  ngOnInit(): void {}

  clearOutput() {
    this.zone.run(() => this.outputLines = [])
  }


  addLine(content: string) {
    let index = this.outputLines.length;
    console.log('addLine:index: ', index)

    this.outputLines.push({'id': index, 'content': content})

    setTimeout(() =>  {
      const flashDiv = document.getElementById('flash-div-'+ index);
      if (flashDiv) { flashDiv.style.animationPlayState = 'running'; }
    }, 0);

  }

  flashLine() {

    for (let i = 0;i < this.outputLines.length; i++) {
      const flashDiv = document.getElementById('flash-div-'+ i);
      if (flashDiv) {
        flashDiv.style.animationPlayState = 'paused';
      }
    }
  }

  private findTooltipById(searchId: string): Tooltip | undefined {
    
    return this.tooltips.find(tooltip => tooltip.el.nativeElement.id === ("icon-"+searchId));
  }

  copy(index:any) {

    navigator.clipboard.writeText(this.outputLines[index].content);

    const foundTooltip = this.findTooltipById(index);
    if (foundTooltip) {
        foundTooltip.activate();
    }
  }

  active() {

    const icon = document.getElementById('logIcon');

    if (icon) {
      if (this.icon === 'pi-check-circle') {
        this.icon = 'pi-ban';
        this.label = 'Log Disabled';
        this.isActive = false;
      } else {
        this.icon = 'pi-check-circle';
        this.label = 'Log Active';
        this.isActive = true;
      }
    }

  }

}

