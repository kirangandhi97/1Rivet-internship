import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
public baseUrl:string='';
  constructor(private httpClient:HttpClient) {
    this.baseUrl='http://localhost:3000/registeredUsers/'
   }

  postData(user:User):Observable<User>{
    return this.httpClient.post<User>(this.baseUrl,user);
  }
}
