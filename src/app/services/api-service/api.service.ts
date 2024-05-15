import { EventEmitter, Injectable } from '@angular/core';
import { Packets } from './api.packets';
import { Commands } from './api.commands';
import { ProjectsManagerService } from '../project-manager-service/projects-manager.service';

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
  private _url;
  urlCache;
  lastState = ApiState.Idle
  private lastInsertedUrl: string = '';
  // private readonly LAST_INSERTED_URL_KEY = 'lastInsertedUrl';

  public onApiStateChange = new EventEmitter<ApiState>();

  constructor(
    public pms: ProjectsManagerService
  ){
    this._url = 'wss://ta.di.univr.it/algo'
    this.urlCache = [
      'wss://ta.di.univr.it/algo',
      'wss://ta.di.univr.it/sfide',
      'ws://localhost:8008/',
    ]
  }

  public getCurrentServerUrl(): string {
    let project = this.pms.getCurrentProject();
    if (project != null) {
      return project.config.TAL_SERVER;
    }
    return ""
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
      // Aggiorna l'ultimo URL salvato in localStorage
      // localStorage.setItem(this.LAST_INSERTED_URL_KEY, this.urlCache[0] || '');
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
    this._url = url.href
    console.log("setUrl:href:",url.href)
    this.addToCache(this._url)
    this.urlCache.push(value);
    this.lastInsertedUrl = value
    // localStorage.setItem(this.LAST_INSERTED_URL_KEY, this.lastInsertedUrl);
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

  public resetAllConnections(){
    //TODO: is it necessary to kill all old connection upon URL change ?
  }

  public problemList(onResult:(problemList:Map<string, Meta>)=>void, onError?: (error: string)=>void){
    this.stateMaybe()
    console.log("problemList:")
    let cmdList = new Commands.ProblemList(this._url);
    //alert('sto prendendo i problemi di: ' + this._url);
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
    let cmdGet = new Commands.Attchment(this._url, problemName);

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
    let cmdConnect = new Commands.Connect(this._url, problem_name, service, args, tty, token, files);

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
