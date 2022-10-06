import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {

  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  getStudentsData(){
    // this.studentService.postStudents().subscribe();
  }
}
