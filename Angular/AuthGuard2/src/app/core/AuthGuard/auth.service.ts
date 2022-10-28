import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public authSubject:Subject<any>
  constructor() {
    this.authSubject = new Subject();
   }

  isauthDisplay(){
    const isAuthenticate = localStorage.getItem('isAuthenticate');
      if(isAuthenticate){
        // this.authSubject.next(true)
        return true   
      }
      else{
        // this.authSubject.next(false)
        return false     
      }
  }
}
