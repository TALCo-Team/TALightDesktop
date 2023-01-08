import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnectionManagerService } from '../services/connection-manager-service/connection-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly connectionManagerService: ConnectionManagerService,
    private readonly router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isConnected: boolean = this.connectionManagerService.isConnected;

    if (!isConnected) {
      //this.router.navigate(['/connect']);
    }
    return true;
    return isConnected;
  }

}
