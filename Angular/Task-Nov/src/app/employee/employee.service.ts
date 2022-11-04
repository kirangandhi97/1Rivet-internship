import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
 employeeUrl:string='';
  constructor(private http:HttpClient) { 
    this.employeeUrl='http://localhost:3000/employee/';
  }

  // get all data 
getEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.employeeUrl);
}

// post Employee 
postEmployee(employee:Employee):Observable<Employee>{
  return this.http.post<Employee>(this.employeeUrl,employee);
}
}
