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
  public child: Child | undefined;
  public filename: string = "";
  public output = "";
  public lobbyID?:string;
  public displayName = "AgentSmith"+Math.floor(Math.random()*1000000);
  public password?:string;
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
      let text = JSON.stringify(problemList)
      this.output = text;
      console.log("Problem List: "+text);
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
      this.output += ''+data
      console.log("Bynary attachment: "+data);
      this.refreshOutput();
    };

    let req = this.api.GetAttachment(problem_name, onAttachment, onAttachmentInfo, onData);
    req.onError = this.onApiError;

  }

  async apiConnect() {
    let problem_name = "piastrelle";
    let service = "synopsis";

    let onConnectionBegin = (onConnectionBegin: any) => {console.log("Connection Begin -> " + onConnectionBegin); };
    let onConnectionStart = () => {console.log("Connection Start")};
    let onConnectionClose = (onConnectionClose: any) => {console.log(onConnectionClose)};
    
    let onData = (data: string)=>{
      this.output += ''+data
      console.log("Bynary attachment: "+data);
      this.refreshOutput();
    };

    let req = this.api.Connect(problem_name, service, undefined, undefined, undefined, undefined, onConnectionBegin, onConnectionStart, onConnectionClose, onData);
    req.onError = this.onApiError;

    this.cmdConnect = req;
  }

  async apiPlay() {
    this.cmdConnect?.sendBinary("ROCK\n");
    this.refreshOutput();
  }

}
