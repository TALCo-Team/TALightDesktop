import { Component, NgZone, OnInit } from '@angular/core';
import { Child, Command, open as ShellOpen } from '@tauri-apps/api/shell'
import { open as DialogOpen } from '@tauri-apps/api/dialog';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { Packets } from 'src/app/services/api-service/api.packets';
import { ReplaySubject } from 'rxjs';
import { Commands } from 'src/app/services/api-service/api.commands';
import { ConsoleModule } from 'src/app/widgets/console/console.module';
@Component({
  selector: 'app-demo-view',
  templateUrl: './demo-view.component.html',
  styleUrls: ['./demo-view.component.scss']
})
export class DemoViewComponent implements OnInit {
  public output = "";
  public cmdConnect?:Commands.Connect;

  constructor(
    private zone: NgZone,
    private api: ApiService
    ) {}

  ngOnInit(): void {
    //api.problemList((problemList: any) => {console.log(problemList)});

    /*
    api.getAttachment(
      "piastrelle",
      ()=>{console.log("Attachment packet received")},
      (onAttachmentInfo: any) => {console.log(onAttachmentInfo)},
      (data: ArrayBuffer) => {
        console.log("ArrayBuffer received");

        const arrayBufferToFile = (buffer:any, filename:any) => {
          const blob = new Blob([buffer], { type: 'application/octet-stream' });
          return new File([blob], filename, { type: 'application/octet-stream' });
        };

        let file = arrayBufferToFile(data, "/home/michele/piastrelle.tar");
        console.log(file);
      }
    );
    

    api.Connect(
      "sum", 
      "synopsis", 
      {"service":"free_sum"}, 
      undefined,
      undefined,
      undefined,
      (onConnectionBegin: any) => {console.log("Connection Begin -> " + onConnectionBegin); },
      () => {console.log("Connection Start")},
      (onConnectionClose: any) => {console.log(onConnectionClose)},
      (onData: any) => {console.log(onData)},
      (onError: any) => {alert(onError)},
    );

    */
    
  }
  //API Test
    
  async onApiError(message: string){
    alert("Error: "+message)
  }

  public refreshOutput() {
    this.zone.run(() => this.output += "")
  }

  async apiProblemList() {
    let onSuccess = (problemList:Map<string, Meta>)=>{ 
      console.log(problemList);
      this.refreshOutput();
    }
    let req = this.api.problemList( onSuccess );
    req.onError = this.onApiError;
  }

  async apiGetAttachment() {
    let problem_name = "piastrelle";

    let onAttachment = ()=>{console.log("Attachment packet received")};
    let onAttachmentInfo = (onAttachmentInfo: any) => {console.log(onAttachmentInfo)};
    
    let onData = (data: ArrayBuffer)=>{
      console.log(data);
      this.refreshOutput();
    };

    let req = this.api.GetAttachment(problem_name, onAttachment, onAttachmentInfo, onData);
    req.onError = this.onApiError;

  }

  async apiConnect() {
    let problem_name = "sum_testAPI";
    let service = "free_sum";

    let onConnectionBegin = (onConnectionBegin: string[]) => {console.log("Connection Begin -> " + onConnectionBegin); };
    let onConnectionStart = () => {console.log("Connection Start")};
    let onConnectionClose = (onConnectionClose: string[]) => {console.log(onConnectionClose)};
    
    let onData = (data: string)=>{
      this.output += ''+data
      console.log("Binary data: "+data);
      this.refreshOutput();
    };

    let req = this.api.Connect(problem_name, service, undefined, undefined, undefined, undefined, onConnectionBegin, onConnectionStart, onConnectionClose, onData);
    req.onError = this.onApiError;

    this.cmdConnect = req;

    this.sendBinary();
  }

  async sendBinary() {
    setTimeout(() => {this.cmdConnect?.sendBinary("100 0\n");}, 1500);
    //setTimeout(() => {this.cmdConnect?.sendConnectStop();}, 2500);
    /*
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 2500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 3500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 4500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 5500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 6500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 7500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 8500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 9500);
    setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 10500);
    */

    setTimeout(() => {console.log("this.cmdConnect!.tal.isOpen()");
    console.log(this.cmdConnect!.tal.isOpen());}, 2500);
  }


}
