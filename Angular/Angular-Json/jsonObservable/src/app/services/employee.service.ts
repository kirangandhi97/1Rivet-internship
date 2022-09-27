import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../employee/Employee.model';



@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  public empUrl: string;


  constructor(private http: HttpClient) {

    this.empUrl = 'http://localhost:3000/';
  }

  // get call 
  getUSer(): Observable<any> {
    return this.http.get(this.empUrl + 'employee');
  }

  // get data by id 
  getUserById(id: number): Observable<any> {
    const url: string = this.empUrl + 'employee/' + id;
    return this.http.get(url)
  }


  // post data 
  postData(employee: Employee): Observable<any> {
    const url: string = this.empUrl + 'employee';
    return this.http.post(url, employee)
    // return this.http.post(this.empUrl + 'employee', employee);
  }


  //  update data
  updateData(employee: Employee, id: number): Observable<any> {
    const url: string = this.empUrl + 'employee/' + id;
    return this.http.put(url, employee);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.empUrl}employee/${id}`);
  }
}
