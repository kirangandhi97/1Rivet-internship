import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { Students } from '../Students.model';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {
  public studentForm:FormGroup;
  public studentFormData:any;
id:any;
  constructor(private studentService:StudentsService, private activatedRoute:ActivatedRoute, private fb:FormBuilder) { 
    this.activatedRoute.params.subscribe((params)=>
    {
      this.id = params['id'];
      this.getEditbyId()   
    })

    this.studentForm = this.fb.group({
      name:['', Validators.required],
      gender:['', Validators.required],
      email:['', Validators.required],
      dob:['', Validators.required],
      phone:['', Validators.required]
    })
    
    
  }

  ngOnInit(): void {
    // if(this.id){
    //   this.getEditbyId();
    // }
    // this.getEditbyId()
  }

  onSubmit(){
    
  }

  // getStudentsData(){
  //   this.studentService.getStudents().

  //   });
  // }

  getEditbyId(){
    this.studentService.getStudentDetailsbyId(Number(this.id)).subscribe((data)=>{
      this.studentForm.patchValue(data);
      console.log(data);
      // this.studentFormData = data;
    })
  }

  // updateData(){
  //   this.studentService.updateStudents(this.studentForm.value,this.id).subscribe(()=>
  //   {
  //     // this.getStudentsData();
  //   })
  // }
}
