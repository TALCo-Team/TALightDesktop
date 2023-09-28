
export type UID = string; // should I ? 

export type PromiseResolver<T> = (value: T | PromiseLike<T>) => void;

export type stdCallback = (data:string)=>void;
export type stateCallback = (state:CompilerState, content?:string)=>void;
export type notifyCallback = (title:string, msg:string, kind:string)=>void;

export type CompilerMessageHandler = (message:CompilerRequest)=>CompilerResponse;

export interface CompilerDriver{
  installPackages(packages: string[]): Promise<string>;
  executeCode(code: string): Promise<string>;
  executeFile(fullpath: string): Promise<string>;
  stopExecution(signal?: number): Promise<boolean>;
  subscribeNotify(enable?:boolean, onNotify?:(title:string, msg:string, kind:string)=>void ): Promise<boolean>;
  subscribeState(enable?:boolean, onState?:(state:CompilerState, content?:string)=>void ): Promise<boolean>;
  subscribeStdout(enable?:boolean, onStdout?:(data:string)=>void): Promise<boolean>;
  subscribeStderr(enable?:boolean, onStderr?:(data:string)=>void): Promise<boolean>;
  sendStdin(msg:string): Promise<boolean> ;
}

export enum CompilerState {
  Unknown = 'Unknown',
  Loading = 'Loading',
  Ready = 'Ready',
  Run = 'Run',
  Stdin = 'Stdin',
  Success = 'Success',
  Killed = 'Killed',
  Error = 'Error',
}




export enum CompilerMessageType {
  Ready = 'Ready',
  Mount = 'Mount',
  Unmount = 'Unmount',
  InstallPackages = 'InstallPackages',
  ExecuteFile = 'ExecuteFile',
  ExecuteCode = 'ExecuteCode',
  StopExecution = 'StopExecution',
  SubscribeNotify = 'SubscribeNotify',
  SubscribeState = 'SubscribeState',
  SubscribeStdout = 'SubscribeStdout',
  SubscribeStderr = 'SubscribeStderr',
  SendStdin = 'SendStdin',
  CreateDirectory = 'CreateDirectory',
  WriteFile = 'WriteFile',
  ReadFile = 'ReadFile',
  ReadDirectory = 'ReadDirectory',
  ScanDirectory = 'ScanDirectory',
  Delete = 'Delete',
  Exists = 'Exists',
  RenameItem = "RenameItem"
}


export interface CompilerMessage {
  uid: UID;
  type: CompilerMessageType;
  args: string[];
  contents: Array<string|ArrayBuffer>;
}

export interface CompilerRequest {
  uid: UID;
  timestamp: number;
  message: CompilerMessage;
}

export interface CompilerResponse {
  uid: UID;
  timestamp: number;
  success: boolean;
  message: CompilerMessage;
  errors: string[];
}

export interface CompilerRequestHandler {
  uid: UID;
  request: CompilerRequest;
  resolvePromise: PromiseResolver<any>
}


