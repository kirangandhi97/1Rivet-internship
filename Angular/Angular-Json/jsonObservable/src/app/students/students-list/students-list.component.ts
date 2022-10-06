import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { Students } from '../Students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  studentData: Students[] = [];
  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(){
    this.studentService.getStudents().subscribe((data)=>
    {
      this.studentData = data;
      // console.log(data);
      
    })
  }
}
