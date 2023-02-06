import { Component, NgZone, OnInit } from '@angular/core';
import { ApiService, Meta } from 'src/app/services/api-service/api.service';
import { Commands } from 'src/app/services/api-service/api.commands';
import { xxhash128} from 'hash-wasm';
import { Buffer } from 'buffer';

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
    //this.hashTest()
    
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

  //OLD

  async apiConnectOld() {
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

  async hashTest(){
    console.log(await xxhash128(Buffer.from("ciao")));
  }
}
