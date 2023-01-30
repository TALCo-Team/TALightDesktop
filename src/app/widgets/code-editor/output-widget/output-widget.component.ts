import { Component, EventEmitter, Output, ViewChild, NgZone, ElementRef } from '@angular/core';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { ProblemDescriptor, ServiceDescriptor, ArgsMap, ArgDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';
import {ScrollPanelModule} from 'primeng/scrollpanel';

export class OutputMessage{
  constructor(
    public content: string,
    public type: OutputType,
    public index: number = -1,
    public timestamp: number = Date.now()
  ){}
}

export enum OutputType{
  STDIN='stdin',
  STDOUT='stdout',
  STDERR='stderr',
  SYSTEM='system',
}

@Component({
  selector: 'tal-output-widget',
  templateUrl: './output-widget.component.html',
  styleUrls: ['./output-widget.component.scss'],
})
export class OutputWidgetComponent {
  @Output('onInput') public onInput = new EventEmitter<InputEvent>();
  @Output('onStdin') public onStdin = new EventEmitter<string>(); 

  @ViewChild("output") public output!: ElementRef;
  @ViewChild("sdtinInput") public sdtinInput!: ElementRef;

  public outputLines = new Array<OutputMessage>();

  constructor( public zone: NgZone){}
  
  ngOnInit() {}

  ngOnDestroy() {}
  
  clearOutput() {
    this.zone.run(() => this.outputLines = [])
  }
  
  public print(content: string, outputType = OutputType.STDOUT) {
    let msg = new OutputMessage(content, outputType, this.outputLines.length)
    this.zone.run(() => this.outputLines.push(msg));
    this.scrollToBottom()
  }

  public iconForType(message: OutputMessage){
    let icon=''
    let idx = message.index
    if( idx > 0 && this.outputLines[idx-1].type == message.type){return icon;}
    switch(message.type){
      default:
      case OutputType.STDIN:  icon='pi-angle-left'; break;
      case OutputType.STDOUT: icon='pi-angle-right'; break;
      case OutputType.STDERR: icon='pi-exclamation-triangle'; break;
      case OutputType.SYSTEM: icon='pi-info-circle'; break;
    }
    return icon;
  }

  public sendStdin() {
    let msg = this.sdtinInput.nativeElement.value ?? ""
    msg = msg.trim()
    console.log("sendStdin:", this.sdtinInput)
    if (msg == "") { return }

    this.sdtinInput.nativeElement.value = ""
    this.onStdin.emit(msg);
  }

  public sendOnEnter(event: KeyboardEvent) {
    if (event.key == 'Enter') { this.sendStdin(); }
  }


  public scrollToBottom(){
    // Scroll #console-bottom-scroll to bottom
    setTimeout(() => {
      const scrollEl = document.getElementById("tal-output-widget-scroll-id");
      if (scrollEl) {
        scrollEl.scrollTop = scrollEl.scrollHeight;
        console.log(scrollEl.scrollTop, scrollEl.scrollHeight)
      }
    });
  }
}


