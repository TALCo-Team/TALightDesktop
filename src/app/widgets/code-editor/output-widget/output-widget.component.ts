import { Component, EventEmitter, Output, ViewChild, NgZone, ElementRef } from '@angular/core';
import { CompilerState } from 'src/app/services/compiler-service/compiler-service.types';
import { TutorialService } from 'src/app/services/tutorial-service/tutorial.service';


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
  STDINAPI='stdinapi',
  STDOUT='stdout',
  STDERR='stderr',
  SYSTEM='system',
}

type TimeoutID=number;

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
  @ViewChild("sdtinButton") public sdtinButton!: ElementRef;
  @ViewChild("pyodideIcon") public pyodideIcon!: ElementRef;

  public outputLines = new Array<OutputMessage>();
  public pyodideState = CompilerState.Unknown
  public pyodideStateIcon = "pi-circle"
  public pyodideStateColor = "" //default: lightgray
  public pyodideStateTooltip = "State: Unknown"
  public stdinHighlight?:TimeoutID;
isBlurred: any;
  
  constructor(  
    public zone: NgZone,
    private tutorialService : TutorialService,
    ) {
      this.tutorialService.onTutorialChange.subscribe( (tutorial)=>{this.isTutorialShown(tutorial)} ),
      this.tutorialService.onTutorialClose.subscribe( ()=>{this.isTutorialShown()} ) 
    }
  
  
  ngOnInit() {}

  private isTutorialShown(tutorial? : any){

    console.log("OutputWidgetComponent:isTutorialShown")
    if (typeof tutorial === 'undefined' || tutorial.componentName === "OutputWidgetComponent"){
      this.isBlurred = false
    }
    else{
      this.isBlurred = true
    }
  }

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
      case OutputType.STDIN:     icon='pi-angle-left'; break;
      case OutputType.STDINAPI:  icon='pi-cloud-download'; break;
      case OutputType.STDOUT:    icon='pi-angle-right'; break;
      case OutputType.STDERR:    icon='pi-exclamation-triangle'; break;
      case OutputType.SYSTEM:    icon='pi-info-circle'; break;
    }
    return icon;
  }

  public didStateChange(state:CompilerState,content?:string){
    console.log("didStateChange:",state)
    this.pyodideState=state
    this.pyodideStateTooltip = 'State: '+ this.pyodideState
    
    switch(state){
      default:
      case CompilerState.Unknown: 
        this.pyodideStateIcon="pi-circle"
        this.pyodideStateColor=""
        this.enableStdin(false)
        break;
      case CompilerState.Loading: 
        this.pyodideStateIcon="pi-spin pi-spinner"
        this.pyodideStateColor="orange"
        this.enableStdin(false)
        break;
      case CompilerState.Ready: 
        this.pyodideStateIcon="pi-circle"
        this.pyodideStateColor="green"
        this.enableStdin(false)
        break;
      case CompilerState.Run: 
        this.pyodideStateIcon="pi-spin pi-spinner"
        this.pyodideStateColor="green"
        this.enableStdin(false)
        break;
      case CompilerState.Stdin: 
        this.pyodideStateIcon="pi-spin pi-spinner"
        this.pyodideStateColor="orange"
        this.enableStdin(true); 
        break;
      case CompilerState.Error: 
        this.pyodideStateIcon="pi-circle-fill"
        this.pyodideStateColor="darkred"

        this.print("END: Error", OutputType.STDERR)
        this.print(content ?? "Uknown error", OutputType.STDERR)
        this.enableStdin(false)
        break;
      case CompilerState.Success: 
        this.pyodideStateIcon="pi-circle-fill"
        this.pyodideStateColor="green"
        this.print("END: Success", OutputType.SYSTEM)
        if(content){
          this.print(content, OutputType.SYSTEM)
        }
        this.enableStdin(false)
      break;
    }

  }

  public enableStdin(enable=true){
    let btn = this.sdtinButton.nativeElement as HTMLButtonElement
    let ipt = this.sdtinInput.nativeElement as HTMLInputElement
    btn.disabled = !enable
    ipt.disabled = !enable
    this.enableHighlight(enable)
  }
  
  public enableHighlight(enable=true, color?:string){
    let ipt = this.sdtinInput.nativeElement as HTMLInputElement

    let toggleColor = (clear?:boolean)=>{
      if (clear) { 
        ipt.style.borderColor == "" 
        return
      }
      
      ipt.style.borderColor = ipt.style.borderColor == "" ? color ?? "orange" : ""
    }

    //if(enable && this.stdinHighlight){ return; }
    //if(!enable && !this.stdinHighlight){ return; }
    if(enable){
      if (this.stdinHighlight){clearInterval(this.stdinHighlight);}
      this.stdinHighlight = window.setInterval(toggleColor,1000) //window.setInterval -> number; setInterval -> strange object
    }else{
      clearInterval(this.stdinHighlight);
      this.stdinHighlight=undefined
      setTimeout(()=>{toggleColor(true)})
    }
  }
  

  public focusStdin(){
    let ipt = this.sdtinInput.nativeElement as HTMLInputElement
    ipt.style.backgroundColor = ""
    this.enableHighlight(false)
  }

  public blurStdin(){
    let ipt = this.sdtinInput.nativeElement as HTMLInputElement
    ipt.style.backgroundColor = ""
    let shouldHighlight = this.pyodideState==CompilerState.Stdin
    this.enableHighlight(shouldHighlight)
  }

  public sendStdin() {
    let msg = this.sdtinInput.nativeElement.value ?? ""
    msg = msg.trim()
    console.log("sendStdin:", this.sdtinInput)
    console.log("sendStdin:msg", msg)
    if (msg == "") { return }

    this.sdtinInput.nativeElement.value = ""
    this.onStdin.emit(msg+"\n");
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


