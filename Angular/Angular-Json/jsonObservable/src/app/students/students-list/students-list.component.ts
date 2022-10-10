import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { Students } from '../Students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  studentData: Students[] = [];
  public id : any;
  constructor(private studentService:StudentsService, private router:Router) { 
  }

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

// on edit function 
onEdit(id:number){
this.router.navigate(['../students/student-edit',id])
// console.log(student.id);
}

onDelete(id:number){
  if (confirm('Are tou sure you want to delete this data??')){
    this.studentService.deleteStudents(id).subscribe(()=>{
      this.getAllStudents();
    })
  }
}

// onDetails(id : any){
//   this.router.navigate(['details',id]);
// }

onAddNew(){
  this.router.navigate(['students/student-form'])
}

}
