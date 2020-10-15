import { AuthService } from './../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AuthService){}

   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger;
      let autenti = this.authSvc.isAutenticado();
      if(this.authSvc.isAutenticado()){
        return true;
      }
      else{
        return false;
      }
  }
}
