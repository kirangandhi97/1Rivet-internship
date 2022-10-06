import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../Students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
baseUrl:string='';
  constructor(private http:HttpClient) { 
    this.baseUrl = "http://localhost:3000/students"
  }
  getStudents():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  postStudents(students:Students):Observable<any>{
    return this.http.post(this.baseUrl, students);
  }
}
