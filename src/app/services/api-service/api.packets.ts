
export namespace Packets{

    export class PacketsPayload{
      public data;
      public packets:any;
      public packetTypes:string[] = []

      constructor(data:string){
        this.data = data;
        this.packets = JSON.parse(this.data);
        for (var pkttype in this.packets) {
          this.packetTypes.push(pkttype)
        }

        if(this.packetTypes.length === 3 &&
          this.packetTypes.indexOf("name") === 0 &&
          this.packetTypes.indexOf("size") === 1 &&
          this.packetTypes.indexOf("hash") === 2
          ) {
            this.packetTypes = ["AttachmentInfo"];
            this.packets = {"AttachmentInfo" : this.packets};
        }
      }

      public getMessage<T extends Message>( packetClass: new (packet?: any)=>T ):T | null{
        let packetType = packetClass.name;
        for (var pkttype in this.packets) {
          if (pkttype != packetType){ continue; }
          let packet = this.packets[packetType] 
          let message = new packetClass(packet);
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
        return true;
      }
    }
  
  export class Meta {
    constructor(data?: any){
      //console.log("Meta:constructor:", data)
      this.public_folder = data.public_folder
      let servicesMap = new Map<string,Service>()
      for(var attr in data.services){
        let value = data.services[attr];
        //console.log("Meta:constructor:services:",attr,value)
        let service = new Service(value);
        servicesMap.set(attr,service)
      }
      this.services = servicesMap
    }
    public public_folder: string = "";
    public services: Map<string, Service> = new Map<string, Service>();
  }

  export class Service {
    constructor(data?: any){
      //console.log("Service:constructor:", data)
      this.evaluator = data.evaluator
      this.files = data.files
      let argsMap = new Map<string,Arg>()
      for(var attr in data.args){
        let value = data.args[attr];
        let arg = new Arg(value);
        argsMap.set(attr,arg)
      }
      this.args = argsMap
    }
    public evaluator: string[] = [];
    public args?:Map<string, Arg>;
    public files?: string[];
  }

  export class Arg {
    constructor(data: any){
      this.regex = data.regex
      this.default = data.default
    }
    public regex: RegExp;
    public default: string;
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
      public problem: String;

      constructor(problem_name:String) {
        super();
        this.problem = problem_name;
      }
    }
    export class ConnectBegin extends Message {
      public problem:string = "";
      public service:string = "";
      public args:{} = {};
      public tty:boolean = false;
      public token:string|null = null;
      public files:string[] = [];

      constructor(problem:string, service:string, args:{}={}, tty:boolean=false, token:string|null = null, files:string[] = []) {
        super();
        this.problem = problem;
        this.service = service;
        this.args = args;
        this.tty = tty;
        this.token = token;
        this.files = files;
      }
    }
    export class ConnectStop extends Message {

    }
  }


  export namespace Reply{
    export class Message extends Packets.Message {}
    export class Handshake extends Message {
      public magic:string = "";
      public version:number = 2;
    }
    export class MetaList extends Message {
      constructor(packet?: any){
        super(packet)
        let metaMap = new Map<string,Meta>()
        for(var attr in packet.meta){
          let value = packet.meta[attr];
          let meta = new Meta(value);
          metaMap.set(attr,meta)
        }
        this.meta = metaMap
      }
      public meta:Map<string, Meta> = new Map<string, Meta>();
    }
    export class  Attachment extends Message{
      public status = {"Ok": undefined, "Err": ""};
    }
    export class AttachmentInfo extends Message {
      public name:string = "";
      public size:string = "";
      public hash:string = "";
    }
    export class ConnectBegin extends Message {
      public status = {"Ok": [""], "Err": ""};
    }
    export class ConnectStart extends Message {
      public status = {"Ok": undefined, "Err": ""};
    }
    export class ConnectStop extends Message {
      public status = {"Ok": [""], "Err": ""};
    }



    export class Result {
      Ok: string[]|null = null
      Err: string = ""
      constructor(data:any){
        if("Ok" in data){this.Err = data["Ok"]}
        if("Err" in data){this.Err = data["Err"]}
      }
      
      success(){ return this.Err == "" }
    }
    /*
    Attachment { status: Result<(), String> },
    ConnectBegin { status: Result<Vec<String>, String> },
    ConnectStart { status: Result<(), String> },
    ConnectStop { status: Result<Vec<String>, String> }
    */

    
  }
}


