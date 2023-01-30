import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionManagerService {
  private _url: string = "";
  private _isConnected: boolean = false;

  constructor( private readonly router: Router, private api:ApiService ) { }

  public get isConnected(): boolean {
    return this._isConnected;
  }

  public get url(): string {
    return this._url;
  }

  public set url(value: string) {
    if(this.api.setUrl(value)){
      this._url = value;
    }
  }

  public disconnect(): void {
    this._isConnected = false;
    this.router.navigate(['/home']);
  }

}
