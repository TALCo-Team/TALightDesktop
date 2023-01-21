import { Injectable } from '@angular/core';
import { Packets } from './api.packets';
import { Commands } from './api.commands';

export class Meta extends Packets.Meta{}
export interface AttachmentInfo extends Packets.Reply.AttachmentInfo{}




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url;
  urlCache;

  constructor(){
    this._url = 'wss://ta.di.univr.it/sfide'
    this.urlCache = [
      this._url,
      'ws://localhost:8008/',
      'wss://ta.di.univr.it/rtal',
    ]
  }

  public get url(): string {
    return this._url;
  }

  public addToCache(url:string){
    this.removeFromCache(url)
    this.urlCache.unshift(url)
  }

  public removeFromCache(url:string){
    let idx = this.urlCache.indexOf(url)
    if(idx != -1){
      this.urlCache.splice(idx,1)
      return true
    }
    return false
  }

  public setUrl(value: string): boolean {
    let url;
    console.log("setUrl")
    try{ url = new URL(value); }catch(_){ return false; }
    if(!( url.protocol == 'ws:' || url.protocol == 'wss:' )){ return false; }
    console.log("setUrl:valid!")
    this.resetAllConnections()
    this._url = url.toString();
    this.addToCache(this._url)
    return true;
  }

  public resetAllConnections(){
    //TODO: is it necessary to kill all old connection upon URL change ? 
  }

  public problemList(onResult:(problemList:Map<string, Meta>)=>void){
    
    let cmdList = new Commands.ProblemList(this._url);
    cmdList.onRecieveProblemList = (message)=>{
      console.log("onRecieveProblemList:",message)
      if(onResult){onResult(message.meta)}
    }
    cmdList.run();
    return cmdList;
  }

  public GetAttachment( 
    problemName:string, 
    onAttachment?: ()=>void,
    onAttachmentInfo?: (message: Packets.Reply.AttachmentInfo)=>void, 
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
    cmdGet.onReciveAttachmentInfo = (message) => { if(onAttachmentInfo) { onAttachmentInfo(message) } }
    cmdGet.onReciveUndecodedBinary = (message) => { if(onData) { onData( message )} }
    cmdGet.onError = (error) => { if(onError) {onError(error)} }

    cmdGet.run();
    return cmdGet;
  }

  public Connect (
    problem_name:string, 
    service:string, 
    args?:{}, 
    tty?:boolean, 
    token?:string, 
    files?:string[],
    onConnectBegin?:(message:string[] )=>void,
    onConnectStart?:()=>void,
    onConnectStop?:(message:string[])=>void,
    onData?: (data:string)=>void,
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
    
    cmdConnect.onReciveBinary = (message) => { if(onData) { onData(message)} }
    cmdConnect.onError = (error) => { if(onError) {onError(error)} }
    
    cmdConnect.run();
    return cmdConnect;
  }

  /*

  public connectToPlay( 
      lobbyID:string, 
      displayName:string, 
      password?:string,
      onEvent?: (state:LobbyEventType)=>void,
      onMatchUpdate?: (matchInfo: MatchInfo)=>void, 
      onData?: (data:string)=>void,
      onError?:(data:string)=>void
    ){
    
    let cmdConnect = new Commands.Connect(this.url, lobbyID, displayName, password);
    cmdConnect.onReciveJoin = (message) => { 
      console.log(message.info.Err)
      if (message.info.Err){ 
        if (cmdConnect.onError) { cmdConnect.onError("Failed to join lobby: "+message.info.Err)  } 
        return;
      }
      if(onEvent) { onEvent(LobbyEventType.Join) } 
      if(onMatchUpdate && message.info.Ok) { onMatchUpdate(message.info.Ok) }
    }
    cmdConnect.onReciveStart = (message) => { if(onEvent) { onEvent(LobbyEventType.Start) } }
    cmdConnect.onReciveEnd = (message) => { if(onEvent) { onEvent(LobbyEventType.End) } }
    cmdConnect.onReciveUpdate = (message) => { if(onMatchUpdate ) { onMatchUpdate(message.info) } }
    cmdConnect.onReciveBinary = (message) => { if(onData) { onData(message)} }
    cmdConnect.onError = onError
    
    cmdConnect.run();
    return cmdConnect;
  }

  public connectToSpectate( 
      lobbyID:string, 
      onEvent?: (state:LobbyEventType)=>void,
      onMatchUpdate?: (matchInfo: MatchInfo)=>void, 
      onData?: (data:string)=>void,
    ){
    
    let cmdSpectate = new Commands.Spectate(this.url, lobbyID);

    cmdSpectate.onReciveJoin = (message) => { 
      if (message.info.Err){ 
        if (cmdSpectate.onError) { cmdSpectate.onError("Failed to join lobby: "+message.info.Err)  } 
        return;
      }
      if(onEvent) { onEvent(LobbyEventType.Join) } 
      if(onMatchUpdate && message.info.Ok) { onMatchUpdate(message.info.Ok) }
    }
    cmdSpectate.onReciveStart = () => { if(onEvent) { onEvent(LobbyEventType.Start) } }
    cmdSpectate.onReciveEnd = () => { if(onEvent) { onEvent(LobbyEventType.End) } }
    cmdSpectate.onReciveSync = () => { if(onEvent) { onEvent(LobbyEventType.Sync) } }
    cmdSpectate.onReciveUpdate = (message) => { if(onMatchUpdate) { onMatchUpdate(message.info) } }
    cmdSpectate.onReciveBinary = (message) => { if(onData) { onData( message )} }
    
    cmdSpectate.run();
    return cmdSpectate;
  }

  */
 
}
