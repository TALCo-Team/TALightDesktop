import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectionManagerService {

  private _url: string = "";
  private _username: string = "";
  private _psw: string = "";

  private _isConnected: boolean = false;

  constructor(
    private readonly router: Router,
  ) { }

  public get isConnected(): boolean {
    return this._isConnected;
  }

  public get username(): string {
    return this._username;
  }

  public get url(): string {
    return this._url;
  }

  public async connect(url: string, username: string, psw: string): Promise<boolean> {
    this._url = url;
    this._username = username;
    this._psw = psw;

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

  public disconnect(): void {
    this._isConnected = false;
    this.router.navigate(['/connect']);
  }

}
