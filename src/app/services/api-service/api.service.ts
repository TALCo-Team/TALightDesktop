import { Injectable } from '@angular/core';
import { Packets } from './api.packets';
import { Commands } from './api.commands';
import { TaligthSocket } from './api.socket';

export interface Meta extends Packets.Meta{}
export interface AttachmentInfo extends Packets.Reply.AttachmentInfo{}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  public url = 'ws://localhost:8008';
  public ws?:TaligthSocket;

  constructor(){

  }
  
  private createCoCosocket(url:string) {
    this.ws = new TaligthSocket(url);
  }

  public problemList(onResult:(problemList:Map<string, Meta>)=>void){
    
    let cmdList = new Commands.ProblemList(this.url);
    cmdList.onRecieveGameList = (message)=>{
      if(onResult){onResult(message.meta!)}
    }
    cmdList.run();
    return cmdList;
  }

  public GetAttachment( 
    problemName:string, 
    onAttachment?: ()=>void,
    onAttachmentInfo?: (message: Packets.Reply.AttachmentInfo)=>void, 
    onData?: (data:ArrayBuffer)=>void,
    onError?: (error:string)=>void
  ){
  
    let cmdGet = new Commands.Attchment(this.url, problemName);

    cmdGet.onReciveAttachment = (message) => { 
      if (message.status.Err){ 
        if (cmdGet.onError) { cmdGet.onError("Failed to receive attachment: "+message.status.Ok) } 
        return;
      }
      if(onAttachment) { onAttachment() } 
    }
    cmdGet.onReciveAttachmentInfo = (message) => { if(onAttachmentInfo) { onAttachmentInfo(message) } }
    cmdGet.onReciveUndecodedBinary = (message) => { if(onData) { onData( message )} }
    cmdGet.onError = onError;

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

    let cmdConnect = new Commands.Connect(this.url, problem_name, service, args, tty, token, files);

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
    cmdConnect.onError = onError
    
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
