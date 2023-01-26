import { Component, EventEmitter, Output, ViewChild, NgZone, ElementRef } from '@angular/core';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { ProblemManagerService } from 'src/app/services/problem-manager-service/problem-manager.service';
import { ProblemDescriptor, ServiceDescriptor, ArgsMap, ArgDescriptor } from 'src/app/services/problem-manager-service/problem-manager.service';


export class ServiceMenuEntry {
  constructor(
    public problem = "",
    public service = "",
    public descriptor: ServiceDescriptor,
  ){}
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

  public outputText: string = "";

  constructor( public zone: NgZone){}
  
  ngOnInit() {}

  ngOnDestroy() {}


  clearOutput() {
    this.zone.run(() => this.outputText = "")
  }


  public print(content: string, end = "\n") {
    this.zone.run(() => this.outputText += content + end);

    // Scroll #console-bottom-scroll to bottom
    setTimeout(() => {
      const scrollEl = document.getElementById("tal-output-widget-scroll-id");
      if (scrollEl) {
        scrollEl.scrollTop = scrollEl.scrollHeight;
        console.log(scrollEl.scrollTop, scrollEl.scrollHeight)
      }
    });
  }



  public testOutput() {
    this.print("python main.py\n")
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

}


