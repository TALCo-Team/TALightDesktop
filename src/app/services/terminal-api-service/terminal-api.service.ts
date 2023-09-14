import { EventEmitter, Injectable } from '@angular/core';
import { Packets } from '../api-service/api.packets';
import { Commands } from '../api-service/api.commands';

export class Meta extends Packets.Meta{}
export interface AttachmentInfo extends Packets.Reply.BinaryDataHeader{}


@Injectable({
  providedIn: 'root'
})
export class TerminalApiService {
  private _url;

  constructor(){
    this._url = 'wss://ta.di.univr.it/algo'
  }

  public get url(): string {
    return this._url;
  }

  public setUrl(value: string): number {
    let url;
 
    try{ url = new URL(value); console.log(url)}catch(_){ return -1; }

    if(!( url.protocol == 'ws:' || url.protocol == 'wss:' )){ return -2; }
    if(!( value.startsWith('ws://') || value.startsWith('wss://'))){ return -1; }
    console.log("setUrl:valid!")
    this.resetAllConnections()
    this._url = url.href
    console.log("setUrl:href:",url.href)

    return 0;
  }

  public resetAllConnections(){
    //TODO: is it necessary to kill all old connection upon URL change ?
  }

  public problemList(onResult:(problemList:Map<string, Meta>)=>void, onError?: (error: string)=>void){
    
    console.log("problemList:")
    let cmdList = new Commands.ProblemList(this._url);
    cmdList.onRecieveProblemList = (message)=>{
      console.log("problemList:onRecieveProblemList:",message)
      
      if(onResult){onResult(message.meta)}
    }
    cmdList.onError = (error) => {
      
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
    
    let cmdGet = new Commands.Attchment(this._url, problemName);

    cmdGet.onReciveAttachment = (message) => {
      if (message.status.Err){
        
        if (cmdGet.onError) { cmdGet.onError("Failed to receive attachment: "+message.status.Ok) }
        return;
      }
      
      if(onAttachment) { onAttachment() }
    }

    cmdGet.onReciveAttachmentInfo = (message) => {
      
      if(onAttachmentInfo) { onAttachmentInfo(message) }
    }

    cmdGet.onReciveUndecodedBinary = (message) => {
      
      if(onData) { onData( message )}
    }

    cmdGet.onError = (error) => {
      
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
    
    let cmdConnect = new Commands.Connect(this._url, problem_name, service, args, tty, token, files);

    cmdConnect.onReciveConnectBegin = (message) => {
      if (message.status.Err){
        
        if (cmdConnect.onError) { cmdConnect.onError("Failed to begin connection: "+message.status.Err); }
        return;
      }
      
      if(onConnectBegin && message.status.Ok) { onConnectBegin(message.status.Ok) }
    }

    cmdConnect.onReciveConnectStart = (message) => {
      if (message.status.Err){
        
        if (cmdConnect.onError) { cmdConnect.onError("Failed to start connect: "+message.status.Err)  }
        return;
      }
      
      if(onConnectStart) { onConnectStart() }
    }

    cmdConnect.onReciveConnectStop = (message) => {
      if (message.status.Err){
        
        if (cmdConnect.onError) { cmdConnect.onError("Failed to stop connection: "+message.status.Err)  }
        return;
      }
      
      if(onConnectStop && message.status.Ok) { onConnectStop(message.status.Ok) }
    }

    cmdConnect.onReciveBinary = (message) => {
      
      if(onData) { onData(message)}
    }

    cmdConnect.onReciveBinaryHeader = (message) => {
      
      if(onBinaryHeader) { onBinaryHeader( message )}
    }

    cmdConnect.onError = (error) => {
      
      if(onError) {onError(error)}
    }

    cmdConnect.run();
    return cmdConnect;
  }

}
