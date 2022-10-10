import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
public baseUrl:string = 'http://localhost:3000/order/'
  constructor(private http:HttpClient) { }

  public getAllOrderData():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseUrl);
  }
}
