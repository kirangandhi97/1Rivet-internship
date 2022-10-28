import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router, private authService:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // const isAuthenticate = localStorage.getItem('isAuthenticate');
      // if(isAuthenticate){
      //   return false
      // }
      // else{
      //   return true
        
      // }
    if(this.authService.isauthDisplay()){
      return true
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
    
  }
  
}
