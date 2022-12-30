
export namespace Packets{

    export class PacketsPayload{
      public data;
      public packets;
      public packetTypes:string[] = []

      constructor(data:string){
        this.data = data;
        this.packets = JSON.parse(this.data);
        for (var pkttype in this.packets) {
          this.packetTypes.push(pkttype)
        }
      }

      public getMessage<T extends Message>( packetClass: new ()=>T ):T | null{
        let packetType = packetClass.name;
        for (var pkttype in this.packets) {
          if (pkttype != packetType){ continue; }
          let packet = this.packets[packetType] 
          let message = new packetClass();
          message.fromPacket(packet);
          return message;
        }        
        return null;
      }

    }
  
    export class Message{
      constructor(packet?: any){
        if(packet){this.fromPacket(packet);}
      }

      public static dataToPayload(data: string): PacketsPayload{
        let raw = JSON.parse(data);
        return raw;
      }
      
      public static findPacketName(msgClasses: Array<string>, packet: any): string{
        var msgClass = "";
        msgClasses.forEach((msgName) => {
          if(msgName in JSON.parse(packet)){
            msgClass = msgName;
          }
        });
  
        return msgClass;
      }



      public messageName():string{
        return this.constructor.name;
      }
  
      public toPacketWithName(messageName: string){
        const packet = { [messageName]:this };
        return packet;
      }

      public toPacket(): any{
        const packetName = this.messageName();
        const packet = { [packetName]:this };
        return packet;
      }
      
      public fromPacket(packet:any){
        for (var msgField in this) {
          if (! (msgField in packet)){ continue; }
          let value = packet[msgField];
          const varType = typeof value;
          
          if (varType in ["function","undefined","symbol"] ){ continue; }
  
          if (varType === "object") {
            this[msgField] = Object.assign(value);
          } else {
            this[msgField] = value;
          }
        }
        //alert("Deserialized msg "+ msg.MessageName() ) ;
        return true;
      }

      /*
      public fromMultiPacket(payload:string){
        let packets = Message.dataToPayload(payload)
        let packet = Packets.Message.findPacket(packets, this.messageName() );
        if (packet != null) {this.fromPacket(payload);} 
      }
      */
    }

  export class Service {
    public evaluator: string[] = [];
    public args?:Map<String, Arg>;
    public files?: string[];
  }

  export class Arg {
    public regex?: RegExp;
    public default?: string;
  }

  export class Meta {
    public public_folder: string = "";
    public services: Map<String, Service> = new Map<String, Service>();
  }


    
  // Requests ---------------------------------
  export namespace Request{
    export class Message extends Packets.Message {}
    export class Handshake extends Message {
      public magic:string = "rtal";
      public version:number = 2;
    }
    export class MetaList extends Message {}
    export class  Attachment extends Message{
      public problem: String = ""
    }
    export class ConnectBegin extends Message {
      public problem:string = "";
      public service:string = "solve";
      public args:any = {};
      public tty:boolean = true;
      public token?:string = undefined;
      public files:string[] = []
    }
    export class ConnectStop extends Message {}
  }


  export namespace Reply{
    export class Message extends Packets.Message {}
    export class Handshake extends Message {
      public magic:string = "";
      public version:number = 2;
    }
    export class MetaList extends Message {
      public meta:Map<string, Meta> = new Map<string, Meta>();
    }
    export class  Attachment extends Message{
      public problem?:Map<string, any>;
    }
    export class ConnectBegin extends Message {
      public status?:Map<string, any>;
    }
    export class ConncetStart extends Message {
      public status?:Map<string, any>;
    }
    export class ConncetStop extends Message {
      public status?:Map<string, any>;
    }

    /*
    Attachment { status: Result<(), String> },
    ConnectBegin { status: Result<Vec<String>, String> },
    ConnectStart { status: Result<(), String> },
    ConnectStop { status: Result<Vec<String>, String> }
    */
  }
}


