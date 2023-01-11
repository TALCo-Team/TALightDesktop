import { TALightSocket } from "./api.socket";
import { Packets } from "./api.packets";

export namespace Commands{

    export class Command{
      public tal: TALightSocket;
      public url?:string;
      public debug=false; 
      public onReciveHandshake?:(message:Packets.Reply.Handshake)=>void;
      public onReciveBinary?:(message:string)=>void;
      public onReciveUndecodedBinary?:(message:ArrayBuffer)=>void;
      public onRecive?:(message:Packets.PacketsPayload)=>void; 
      public onClose?:()=>void;
      public onError?:(error:any)=>void;
  
      constructor(url:string, decodeBinary?:boolean){
        this.url = url;
        this.tal = new TALightSocket(this.url);
        if(decodeBinary === false) {this.tal.decode = decodeBinary;}

        this.tal.onError = (error)=>{ this.didError(error); };
        this.tal.onClose = ()=>{ this.didClose(); };
        this.tal.onRecive = (payload)=> { this.didRecive(payload) }
        this.tal.onReciveBinary = (payload)=> { this.didReciveBinary(payload) }
        this.tal.onReciveUndecodedBinary = (payload)=> { this.didReciveUndecodedBinary(payload) }
      }
      
      public run(){
        let msg = new Packets.Request.Handshake();
        this.tal.send(msg);
      }

      public sendBinary(data:string){
        this.log("didSendBinary: "+data);
        this.tal.sendBinary(data);
      }

      public log(...args:string[]){
        let prefix = this.constructor.name+": "
        console.log(prefix, ...args);

        if (this.debug) alert(prefix + (args).join(" ") );
      }
      
      public didClose(){
        this.log("didClose");
        if (this.onClose){ this.onClose();}
      }
  
      public didError(error:any){
        this.log("didError ",error);
        if (this.onError){ this.onError(error);}
      }

      public didReciveBinary(payload:string){
        this.log("didReciveBinary:\n"+payload);
        if(this.onReciveBinary){this.onReciveBinary(payload)}
      }

      public didReciveUndecodedBinary(payload:ArrayBuffer){
        this.log("didReciveUndecodedBinary:\n");
        if(this.onReciveUndecodedBinary){this.onReciveUndecodedBinary(payload)}
      }

      public didRecive(payload:Packets.PacketsPayload){
        this.log("didRecive");
        if(this.onRecive){ this.onRecive(payload) }
        
        let message = payload.getMessage(Packets.Reply.Handshake)
        if (message){ this.didReciveHandshake(message); }
      }

      
      public didReciveHandshake(message:Packets.Reply.Handshake){
        this.log("didRecieveHandshake");
        if (this.onReciveHandshake) { this.onReciveHandshake(message); }
      }
    }

    export class ProblemList extends Command{
      public onRecieveProblemList?:(message:Packets.Reply.MetaList)=>void
      
      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);

        let msg = new Packets.Request.MetaList();
        this.tal.send(msg);
      }

      public override didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.MetaList);
        if (message){ this.didReciveProblemList(message); }
      }
        
      public didReciveProblemList(message:Packets.Reply.MetaList){
        this.log("onRecieveProblemList");
        if (this.onRecieveProblemList) { this.onRecieveProblemList(message); }
      }
    }

    export class Attchment extends Command{
      public onReciveAttachment?:(message:Packets.Reply.Attachment )=>void;
      public onReciveAttachmentInfo?:(message:Packets.Reply.AttachmentInfo)=>void;

      private msg:Packets.Request.Attachment;
  
      constructor(url:string, problem_name:string){
        super(url, false);
  
        this.msg = new Packets.Request.Attachment(problem_name);
      }
  
      public override didReciveHandshake(handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
  
        this.tal!.send(this.msg)
      }

      public override didRecive(payload: Packets.PacketsPayload): void {
        super.didRecive(payload);
        let message;

        message = payload.getMessage(Packets.Reply.Attachment)
        if (message){ this.didRecieveAttachment(message); }
 
        message = payload.getMessage(Packets.Reply.AttachmentInfo)
        if (message){ this.didRecieveAttachmentInfo(message);}
        
      }

      public didRecieveAttachment(message: Packets.Reply.Attachment){
        this.log("Attachment");
        if (this.onReciveAttachment ) { this.onReciveAttachment(message); }
      }
      
      public didRecieveAttachmentInfo(message: Packets.Reply.AttachmentInfo){
        this.log("AttachmentInfo");
        if (this.onReciveAttachmentInfo ) { this.onReciveAttachmentInfo(message); }
      }
      
    }  
    
    export class Connect extends Command{ 
      public onReciveConnectBegin?:(message:Packets.Reply.ConnectBegin )=>void;
      public onReciveConnectStart?:(message:Packets.Reply.ConnectStart)=>void;
      public onReciveConnectStop?:(message:Packets.Reply.ConnectStop)=>void;
      
      private msg:Packets.Request.ConnectBegin;
  
      constructor(url:string, problem_name:string, service:string, args?:{}, tty?:boolean, token?:string, files?:string[]){
        super(url);
        this.msg = new Packets.Request.ConnectBegin(problem_name, service, args, tty, token, files);
      }

      public override didReciveHandshake(handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
        this.tal.send(this.msg);
      }
      
      public override didRecive(payload: Packets.PacketsPayload): void {
        super.didRecive(payload);
        let message;
        message = payload.getMessage(Packets.Reply.ConnectBegin);
        if (message){ this.didRecieveConnectBegin(message); }

        message = payload.getMessage(Packets.Reply.ConnectStart)
        if (message){ this.didRecieveConnectStart(message); }

        message = payload.getMessage(Packets.Reply.ConnectStop)
        if (message){ this.didRecieveConnectStop(message); }
      }

      public didRecieveConnectBegin(message: Packets.Reply.ConnectBegin){
        this.log("didRecieveJoin");
        if (this.onReciveConnectBegin ) { this.onReciveConnectBegin(message); }
      }

      public didRecieveConnectStart(message: Packets.Reply.ConnectStart){
        this.log("didRecieveUpdate");
        if (this.onReciveConnectStart ) { this.onReciveConnectStart(message); }
      }
      
      public didRecieveConnectStop(message: Packets.Reply.ConnectStop){
        this.log("didRecieveStart");
        if (this.onReciveConnectStop ) { this.sendConnectStop(); this.onReciveConnectStop(message); }
      }

      public sendConnectStop() {
        this.tal.send(new Packets.Request.ConnectStop());
      }
    }

    export class CloseConnection extends Command{
      public onReciveConnectStop?:(message:Packets.Reply.ConnectStop)=>void;

      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);

        let msg = new Packets.Request.ConnectStop();
        this.tal.send(msg);
      }

      public override didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.ConnectStop);
        if (message){ this.didReciveConnectStop(message); }
      }
        
      public didReciveConnectStop(message:Packets.Reply.ConnectStop){
        this.log("didRecieveGameList");
        if (this.onReciveConnectStop) { this.onReciveConnectStop(message); }
      }
    }

    /*
  
    export class GameList extends Command{
      public onRecieveGameList?:(message:Packets.Reply.GameList)=>void
      
      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);

        let msg = new Packets.Request.GameList();
        this.tal.send(msg);
      }

      public override didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.GameList)
        if (message){ this.didReciveGameList(message); }
      }
        
      public didReciveGameList(message:Packets.Reply.GameList){
        this.log("didRecieveGameList");
        if (this.onRecieveGameList) { this.onRecieveGameList(message); }
      }
    }

    export class GameDescription extends Command{
      public onRecieveGameDescription?:(message:Packets.Reply.GameDescription)=>void
      private msg:Packets.Request.GameDescription;
  
      constructor(url:string, game:string){
        super(url);
        this.msg = new Packets.Request.GameDescription(game);
      }

      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);

        let msg = new Packets.Request.GameDescription();
        this.tal.send(msg);
      }

      public override didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.GameDescription)
        if (message){ this.didReciveGameDescription(message); }
      }
        
      public didReciveGameDescription(message:Packets.Reply.GameDescription){
        this.log("didRecieveGameList");
        if (this.onRecieveGameDescription) { this.onRecieveGameDescription(message); }
      }
    }
  
    export class LobbyList extends Command{
      public onReciveLobbyList?:(message:Packets.Reply.LobbyList)=>void;
      
      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
        
        let msg = new Packets.Request.LobbyList();
        this.tal!.send(msg);
      }

      public override didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.LobbyList)
        if (message){ this.didRecieveLobbyList(message);}
      }
        
      public didRecieveLobbyList(message:Packets.Reply.LobbyList){
        this.log("didRecieveLobbyList");
        if (this.onReciveLobbyList) { this.onReciveLobbyList(message); }
      }
    }
  
    export class NewLobby extends Command {
      public onReciveNewLobby?:(message:Packets.Reply.GameNew)=>void;

      private msg:Packets.Request.GameNew;
  
      constructor(url:string, lobby_name?:string, game_name?:string, num_palyer?:number, num_bots?:number, timeout?:number, args?:{}, password?:string){
        super(url);
        this.msg = new Packets.Request.GameNew(lobby_name, game_name, num_palyer, num_bots, timeout, args, password);
      }
      
      public override didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.GameNew)
        if (message){
          this.didRecieveNewLobby(message);
        }
      }
        
      public didRecieveNewLobby(message:Packets.Reply.GameNew){
        this.log("didRecieveNewLobby");
        if (this.onReciveNewLobby) { this.onReciveNewLobby(message); }
      }
            
      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
        this.tal!.send(this.msg);
      }
    }
  
    export class Connect extends Command{
      public onReciveJoin?:(message:Packets.Reply.LobbyJoinedMatch )=>void;
      public onReciveUpdate?:(message:Packets.Reply.LobbyUpdate)=>void;
      public onReciveStart?:(message:Packets.Reply.MatchStarted)=>void;
      public onReciveEnd?:(message:Packets.Reply.MatchEnded) => void;
      
      private msg:Packets.Request.LobbyJoinMatch;
  
      constructor(url:string, lobby_id:string, player_name:string, lobby_password?:string){
        super(url);
        this.msg = new Packets.Request.LobbyJoinMatch(lobby_id, player_name, lobby_password);
      }

      public override didReciveHandshake(handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
        this.tal.send(this.msg);
      }
      
      public override didRecive(payload: Packets.PacketsPayload): void {
        super.didRecive(payload);
        let message;
        message = payload.getMessage(Packets.Reply.LobbyJoinedMatch);
        if (message){ this.didRecieveJoin(message); }

        message = payload.getMessage(Packets.Reply.LobbyUpdate)
        if (message){ this.didRecieveUpdate(message); }

        message = payload.getMessage(Packets.Reply.MatchStarted)
        if (message){ this.didRecieveStart(message); }
        
        message = payload.getMessage(Packets.Reply.MatchEnded)
        if (message){ this.didRecieveEnd(message); }
      }

      public didRecieveJoin(message: Packets.Reply.LobbyJoinedMatch){
        this.log("didRecieveJoin");
        if (this.onReciveJoin ) { this.onReciveJoin(message); }
      }

      public didRecieveUpdate(message: Packets.Reply.LobbyUpdate){
        this.log("didRecieveUpdate");
        if (this.onReciveUpdate ) { this.onReciveUpdate(message); }
      }
      
      public didRecieveStart(message: Packets.Reply.MatchStarted){
        this.log("didRecieveStart");
        if (this.onReciveStart ) { this.onReciveStart(message); }
      }
      
      public didRecieveEnd(message: Packets.Reply.MatchEnded){
        this.log("didRecieveEnd");
        this.tal.closeConnection();
        if (this.onReciveEnd ) { this.onReciveEnd(message); }
      }
    }

    export class Spectate extends Command{
      public onReciveJoin?:(message:Packets.Reply.SpectateJoined )=>void;
      public onReciveUpdate?:(message:Packets.Reply.LobbyUpdate)=>void;
      public onReciveStart?:(message:Packets.Reply.SpectateStarted)=>void;
      public onReciveSync?:(message:Packets.Reply.SpectateSynced) => void;
      public onReciveEnd?:(message:Packets.Reply.SpectateEnded) => void;

      private msg:Packets.Request.SpectateJoin;
  
      constructor(url:string, lobby_id:string){
        super(url);
  
        this.msg = new Packets.Request.SpectateJoin(lobby_id);
      }
  
      public override didReciveHandshake(handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
  
        this.tal!.send(this.msg)
      }

      public override didRecive(payload: Packets.PacketsPayload): void {
        super.didRecive(payload);
        let message;

        message = payload.getMessage(Packets.Reply.SpectateJoined)
        if (message){ this.didRecieveJoin(message); }

        message = payload.getMessage(Packets.Reply.LobbyUpdate)
        if (message){ this.didRecieveUpdate(message);}
        
        message = payload.getMessage(Packets.Reply.SpectateStarted)
        if (message){ this.didRecieveStart(message);}

        message = payload.getMessage(Packets.Reply.SpectateSynced)
        if (message){ this.didRecieveStart(message);}

        message = payload.getMessage(Packets.Reply.SpectateEnded)
        if (message){ this.didRecieveEnd(message);}

      }

      public didRecieveJoin(message: Packets.Reply.LobbyJoinedMatch){
        this.log("LobbyJoinedMatch");
        if (this.onReciveJoin ) { this.onReciveJoin(message); }
      }

      public didRecieveUpdate(message: Packets.Reply.LobbyUpdate){
        this.log("LobbyUpdate");
        if (this.onReciveUpdate ) { this.onReciveUpdate(message); }
      }
      
      public didRecieveStart(message: Packets.Reply.MatchStarted){
        this.log("MatchStarted");
        if (this.onReciveStart ) { this.onReciveStart(message); }
      }
      
      public didRecieveEnd(message: Packets.Reply.MatchEnded){
        this.log("MatchEnded");
        this.tal.closeConnection();
        if (this.onReciveEnd ) { this.onReciveEnd(message); }
      }
    }
    */
  }