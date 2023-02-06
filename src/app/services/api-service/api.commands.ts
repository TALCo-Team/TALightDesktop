import { TALightSocket } from "./api.socket";
import { Packets } from "./api.packets";
import { xxhash128 } from "hash-wasm";
var JSONbig = require('json-bigint');

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

      public log(...args:any[]){
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

      public async didRecive(payload:Packets.PacketsPayload){
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

      public override async didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage_MetaList(Packets.Reply.MetaList);
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

      public override async didRecive(payload: Packets.PacketsPayload) {
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
      files = new Map<string,string>()

      public onReciveConnectBegin?:(message:Packets.Reply.ConnectBegin)=>void;
      public onReciveConnectStart?:(message:Packets.Reply.ConnectStart)=>void;
      public onReciveConnectStop?:(message:Packets.Reply.ConnectStop)=>void;
      public onReciveBinaryHeader?:(message:Packets.Reply.AttachmentInfo)=>void;
      
      private msg:Packets.Request.ConnectBegin;
  
      constructor(url:string, problem_name:string, service:string, args?:{}, tty?:boolean, token?:string, files?:Map<string,string>){
        super(url);
        if(files){this.files = files}
        let fileArgNames = [...this.files.keys()]
        this.msg = new Packets.Request.ConnectBegin(problem_name, service, args, tty, token, fileArgNames);
      }

      public override didReciveHandshake(handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);
        this.tal.send(this.msg);
      }
      
      public override async didRecive(payload: Packets.PacketsPayload) {
        super.didRecive(payload);
        let message;
        message = payload.getMessage(Packets.Reply.ConnectBegin);
        if (message){ 
          this.didRecieveConnectBegin(message); 

          if(this.files.size > 0 && message.status.Ok.length > 0 && message.status.Ok[0] !== "") {
            const byteSize = (str:string) => new Blob([str]).size;
            
            for (let [nameArgFile, content] of this.files.entries()) {
              let hashHex =  '0x' + await xxhash128(content)
              let hash = BigInt( hashHex ) 
              let size = byteSize(content);

              let header = new Packets.Request.BinaryHeader(nameArgFile, size, hash);
              console.log("header: ", header);
              console.log("header:string", header.toString());

              var header_parsed = JSONbig.stringify(header);
              console.log("header:parsed: ", header_parsed);
              console.log("header:parsed:type ", typeof header_parsed);

              this.tal.ws!.next(header_parsed);
              this.tal.sendBinary(content);
            }
          }
        }

        message = payload.getMessage(Packets.Reply.ConnectStart)
        if (message){ this.didRecieveConnectStart(message); }

        message = payload.getMessage(Packets.Reply.ConnectStop)
        if (message){ this.didRecieveConnectStop(message); }

        message = payload.getMessage(Packets.Reply.AttachmentInfo)
        if (message){ this.didRecieveBinaryHeader(message); }
      }

      public didRecieveConnectBegin(message: Packets.Reply.ConnectBegin){
        this.log("didRecieveConnectBegin");
        if (this.onReciveConnectBegin ) { this.onReciveConnectBegin(message); }
      }

      public didRecieveConnectStart(message: Packets.Reply.ConnectStart){
        this.log("didRecieveConnectStart");
        if (this.onReciveConnectStart ) { this.onReciveConnectStart(message); }
      }
      
      public didRecieveConnectStop(message: Packets.Reply.ConnectStop){
        this.log("didRecieveConnectStop",message);
        /* download result files */
        
        if (this.onReciveConnectStop) { 
          this.onReciveConnectStop(message); 

          if(this.tal.isOpen() === true) {this.sendConnectStop();}
        }
      }

      public didRecieveBinaryHeader(message: Packets.Reply.AttachmentInfo){
        this.log("BinaryHeader");
        if (this.onReciveBinaryHeader ) { this.onReciveBinaryHeader(message); }
      }

      public sendConnectStop() {
        this.tal.send(new Packets.Request.ConnectStop());
        //this.tal.closeConnection();
      }
    }

    export class CloseConnection extends Command{
      public onReciveConnectStop?:(message:Packets.Reply.ConnectStop)=>void;

      public override didReciveHandshake( handshake: Packets.Reply.Handshake){
        super.didReciveHandshake(handshake);

        let msg = new Packets.Request.ConnectStop();
        this.tal.send(msg);
      }

      public override async didRecive(payload:Packets.PacketsPayload){
        super.didRecive(payload);
        let message = payload.getMessage(Packets.Reply.ConnectStop);
        if (message){ this.didReciveConnectStop(message); }
      }
        
      public didReciveConnectStop(message:Packets.Reply.ConnectStop){
        this.log("didRecieveGameList");
        if (this.onReciveConnectStop) { this.onReciveConnectStop(message); }
      }
    }

  
  }