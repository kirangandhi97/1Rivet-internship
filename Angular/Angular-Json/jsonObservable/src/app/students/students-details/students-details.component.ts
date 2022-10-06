import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { Students } from '../Students.model';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.scss'],
})
export class StudentsDetailsComponent implements OnInit {
  studentId: any;
  studentDetails: any;
  constructor(
    private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.studentId = params['id'];
    });

    console.log(this.activatedRoute);
    
  }

  ngOnInit(): void {
    
    // console.log(this.studentId);
    // console.log(this.studentDetails); 
    this.getStudentDetailsById();
    
  }

  getStudentDetailsById() {
    this.studentsService
      .getStudentDetailsbyId(this.studentId)
      .subscribe((data) => {
        this.studentDetails = data;
      });
  }
}
