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
    this.baseUrl = "http://localhost:3000/students/"
  }
  getStudents():Observable<Students[]>{
    return this.http.get<Students[]>(this.baseUrl);
  }

  // get student details by id 
  getStudentDetailsbyId(id:number):Observable<Students>{
    return this.http.get<Students>(this.baseUrl+id);
  }

  createStudents(students:Students):Observable<Students>{
    return this.http.post<Students>(this.baseUrl, students);
  }

  updateStudents(student:Students, id:number):Observable<Students>{
    return this.http.put<Students>(this.baseUrl,student);
  }
}
