import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { EmployeeAdapter } from './employee.adapter';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  employeeUrl: string = '';
  constructor(private http: HttpClient, private employeeAdapter: EmployeeAdapter) {
    this.employeeUrl = 'http://localhost:3000/employee/';
  }
/**
 * 
 * @param pageCount 
 * @param dataAtATime 
 * @returns 
 */
  // get all data 
  getEmployees(pageCount:number,dataAtATime:number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeUrl}?_page=${pageCount}&_limit=${dataAtATime}`)
      .pipe(map((data: Employee[]) => {
        return data.map((item: Employee) => this.employeeAdapter.toResponse(item))
      }));
  }

  // post Employee 
  postEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee);
  }

  updateEmployeeData(employee:Employee,id:number):Observable<Employee>{
    return this.http.put<Employee>(this.employeeUrl+id,employee);
  }
}
