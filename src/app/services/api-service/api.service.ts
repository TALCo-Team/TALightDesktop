import { Injectable } from '@angular/core';
import { Packets } from './api.packets';
import { Commands } from './api.commands';
import { TaligthSocket } from './api.socket';


export enum LobbyEventType{ 
  Join = 'LobbyJoin', 
  Start = 'LobbyStart', 
  End = 'LobbyEnd', 
  Sync = 'LobbySync'
}

export enum ErrorType{ 
  LobbyJoinFailed = 'LobbyJoinFailed',
  LobbyCreateFailed = 'LobbyCeateFailed'
}

export interface Meta extends Packets.Meta{}

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
    
    let cmdGameList = new Commands.ProblemList(this.url);
    cmdGameList.onRecieveGameList = (message)=>{
      if(onResult){onResult(message.meta!)}
    }
    cmdGameList.run();
    return cmdGameList;
  }

  /*

  public lobbyList( onData:(lobbyList:MatchInfo[])=>void ){
    let cmdLobbyList = new Commands.LobbyList(this.url);
    cmdLobbyList.onReciveLobbyList = (message)=>{
      if(onData){onData(message.info)}
    }
    cmdLobbyList.run();
    return cmdLobbyList;
  }

  public gameDescription(
    game:string,
    onData:(gameDescription:string)=>void) {
    
    let cmdGameList = new Commands.GameDescription(this.url, game);
    cmdGameList.onRecieveGameDescription = (message)=>{
      if(onData){onData(message.description)}
    }    
    cmdGameList.run();
    return cmdGameList;
  }

  public createNewLobby( 
      onData:(newGame:string)=>void, 
      gameDetails:GameDetails
    ){
      let gameArgs;
      if(gameDetails.args!.length > 1) { 
        gameArgs = new Packets.RoshamboArgs(gameDetails.args![0].value, gameDetails.args![1].value);
      }
      else if(gameDetails.args!.length === 1){
        gameArgs = new Packets.RoyalurArgs(gameDetails.args![0].value);
      }

      let cmdNewGame = new Commands.NewLobby(this.url, gameDetails.lobby_name, gameDetails.game_description!.game_name, gameDetails.game_params!.players, gameDetails.game_params!.bots, gameDetails.game_params!.timeout, gameArgs, gameDetails.password);
      cmdNewGame.onReciveNewLobby = (message)=>{
        if(onData){
          if(message.id["Err"] != undefined){
            if(cmdNewGame.onError){
              cmdNewGame.onError(message.id["Err"]);
            }
          }
          else{
            onData(message.id["Ok"])
          }
        }
      }
      cmdNewGame.run();
      return cmdNewGame;
  }

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
