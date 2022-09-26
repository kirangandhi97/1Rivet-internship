import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employee: Employee[];
  public EmpForm: FormGroup
  public user:any

  public abc:string[];
  constructor(private fb: FormBuilder, 
    public empService: EmployeeService) {
    this.employee = [];
    this.EmpForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      gender: [''],
      DOB: [''],
      salary: [''],
      // id: [''],

    })
    this.abc=['kk','tgdth','tdh']
  }

  ngOnInit(): void {
  }

  onSubmit() {
      this.empService.postData(this.EmpForm.value).subscribe(data=>{
      // this.employee = data;
      this.getData();

      })
    }
  
//     this.empService.postData(this.EmpForm.value).subscribe((data) => {
// this.user=data
//       console.log(this.user);

//     })

getData(){
  this.empService.getUSer().subscribe((result:any)=>{
    this.employee=result;
  })
}

onAdd(){
  
}



  }

  
  // getListEmployeeFromServer(){
  //   this.empService.getUSer().subscribe((data:any)=> 
  //   {
  //     this.employee = data;
  //   })
  // }


