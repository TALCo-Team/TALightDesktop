import { EventEmitter, Injectable } from '@angular/core';
import { Packets } from './api.packets';
import { Commands } from './api.commands';
import { ProjectManagerService } from '../project-manager-service/project-manager.service';

export class Meta extends Packets.Meta{}
export interface AttachmentInfo extends Packets.Reply.BinaryDataHeader{}


export enum ApiState{
  Idle,
  Good,
  Maybe,
  Bad
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  lastState = ApiState.Idle
  public onApiStateChange = new EventEmitter<ApiState>();

  constructor(
    public pms: ProjectManagerService
  ){}

  public getCurrentServerUrl(): string {
    console.log("getCurrentServerUrl:", this.pms.getCurrentProject().config.TAL_SERVER)
    return this.pms.getCurrentProject().config.TAL_SERVER;
  }

  public setUrl(value: string): boolean {
    let url;
    try{ 
      url = new URL(value); 
    }catch(_){ return false; }

    if(url.protocol != 'ws:' && url.protocol != 'wss:')
      return false;

    console.log("setUrl:valid!")

    this.pms.getCurrentProject().config.TAL_SERVER = url.href;
    
    return true;
  }

  public updateState(state: ApiState){
    if(this.lastState != state){
      this.lastState = state
      this.onApiStateChange.emit(state)
    }
  }

  public stateIdle(){ this.updateState(ApiState.Idle); }
  public stateGood(){ this.updateState(ApiState.Good); }
  public stateMaybe(){ this.updateState(ApiState.Maybe); }
  public stateBad(){ this.updateState(ApiState.Bad); }

  public problemList(onResult:(problemList:Map<string, Meta>)=>void, onError?: (error: string)=>void){
    this.stateMaybe()
    console.log("problemList:")
    let cmdList = new Commands.ProblemList(this.getCurrentServerUrl())
    
    cmdList.onRecieveProblemList = (message)=>{
      console.log("problemList:onRecieveProblemList:",message)
      this.stateGood()
      if(onResult){onResult(message.meta)}
    }
    cmdList.onError = (error) => {
      this.stateBad();
      console.log("problemList:onError:")
      if(onError) {onError(error)}
    }
    cmdList.run();
    return cmdList;
  }

  public GetAttachment(
    problemName:string,
    onAttachment?: ()=>void,
    onAttachmentInfo?: (message: Packets.Reply.BinaryDataHeader)=>void,
    onData?: (data: ArrayBuffer)=>void,
    onError?: (error: string)=>void
  ){
    this.stateMaybe()
    let cmdGet = new Commands.Attchment(this.getCurrentServerUrl(), problemName);

    cmdGet.onReciveAttachment = (message) => {
      if (message.status.Err){
        this.stateBad()
        if (cmdGet.onError) { cmdGet.onError("Failed to receive attachment: "+message.status.Ok) }
        return;
      }
      this.stateGood()
      if(onAttachment) { onAttachment() }
    }

    cmdGet.onReciveAttachmentInfo = (message) => {
      this.stateGood();
      if(onAttachmentInfo) { onAttachmentInfo(message) }
    }

    cmdGet.onReciveUndecodedBinary = (message) => {
      this.stateGood();
      if(onData) { onData( message )}
    }

    cmdGet.onError = (error) => {
      this.stateBad();
      if(onError) {onError(error)}
    }

    cmdGet.run();
    return cmdGet;
  }

  public Connect (
    problem_name:string,
    service:string,
    args?:{},
    tty?:boolean,
    token?:string,
    files?:Map<string, string>,
    onConnectBegin?:(message:string[] )=>void,
    onConnectStart?:()=>void,
    onConnectStop?:(message:string[])=>void,
    onData?: (data:string)=>void,
    onBinaryHeader?:(message:Packets.Reply.BinaryDataHeader)=>void,
    onError?:(data:string)=>void
  ){
    this.stateMaybe()
    let cmdConnect = new Commands.Connect(this.getCurrentServerUrl(), problem_name, service, args, tty, token, files);

    cmdConnect.onReciveConnectBegin = (message) => {
      if (message.status.Err){
        this.stateBad()
        if (cmdConnect.onError) { cmdConnect.onError("Failed to begin connection: "+message.status.Err); }
        return;
      }
      this.stateGood()
      if(onConnectBegin && message.status.Ok) { onConnectBegin(message.status.Ok) }
    }

    cmdConnect.onReciveConnectStart = (message) => {
      if (message.status.Err){
        this.stateBad()
        if (cmdConnect.onError) { cmdConnect.onError("Failed to start connect: "+message.status.Err)  }
        return;
      }
      this.stateGood()
      if(onConnectStart) { onConnectStart() }
    }

    cmdConnect.onReciveConnectStop = (message) => {
      if (message.status.Err){
        this.stateBad()
        if (cmdConnect.onError) { cmdConnect.onError("Failed to stop connection: "+message.status.Err)  }
        return;
      }
      this.stateGood()
      if(onConnectStop && message.status.Ok) { onConnectStop(message.status.Ok) }
    }

    cmdConnect.onReciveBinary = (message) => {
      this.stateGood();
      if(onData) { onData(message)}
    }

    cmdConnect.onReciveBinaryHeader = (message) => {
      this.stateGood();
      if(onBinaryHeader) { onBinaryHeader( message )}
    }

    cmdConnect.onError = (error) => {
      this.stateBad();
      if(onError) {onError(error)}
    }

    cmdConnect.run();
    return cmdConnect;
  }

}
