import { EventEmitter, Injectable } from '@angular/core';

export enum NotificationType{
  Debug = 'debug',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  System = 'system',
  Default = Info
}

export class NotificationMessage{
  constructor(
    public title: string,
    public message: string,
    public type = NotificationType.Info,
    public timestamp = Date.now()
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class NotificationManagerService {
  history = new Array<NotificationMessage>();
  
  constructor() { }

  public onNotification = new EventEmitter<NotificationMessage>();

  sendNotification(title:string, message: string, type=NotificationType.Info){
    let notification = new NotificationMessage(title, message, type);
    this.onNotification.emit(notification)
    this.history.push(notification)
  }

}
