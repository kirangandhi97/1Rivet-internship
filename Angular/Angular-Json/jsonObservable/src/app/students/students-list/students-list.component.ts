import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { Students } from '../Students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  studentData: Students[] = [];
  constructor(private studentService:StudentsService, private router:Router) { }

  ngOnInit(): void {
    this.getAllStudents()
  }


// get all the student details function 
  getAllStudents(){
    this.studentService.getStudents().subscribe((data)=>
    {
      this.studentData = data;
      // console.log(data);
      
    })
  }


// on click events 
onEdit(id:any){
this.router.navigate(['edit',id])
console.log(id);

}

onDelete(){}

// onDetails(id : any){
//   this.router.navigate(['details',id]);
// }

}
