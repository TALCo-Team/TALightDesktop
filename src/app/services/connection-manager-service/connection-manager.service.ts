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

  /*
  public async connect(url: string): Promise<boolean> {
    this._url = url;
    
    // TODO: connect to server
    // Add the below lines to the connect method
    // this.isConnected = true;
    // this.router.navigate(['/home']);

    // TO REMOVE: Temporary return true
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._isConnected = true;
        this.router.navigate(['/home']);
        resolve(true);
      }, 2000);
    });
  }
  */

  public disconnect(): void {
    this._isConnected = false;
    this.router.navigate(['/home']);
  }

}
