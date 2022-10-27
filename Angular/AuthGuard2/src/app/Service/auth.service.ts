import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string='';
  constructor(private httpClient:HttpClient) { 
    this.baseUrl = 'http://localhost:3000/users/'
  }

  getUserData():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl)
  }

  postUser(user:Users):Observable<Users>{
    return this.httpClient.post<Users>(this.baseUrl,user);
  }
}
