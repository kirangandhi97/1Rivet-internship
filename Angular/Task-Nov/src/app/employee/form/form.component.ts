import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public employeeForm:FormGroup;
  constructor(private employeeService:EmployeeService, private fb:FormBuilder, private router:Router) {
    this.employeeForm= this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phoneNo:[''],
      salary:['']
    })
   }
  
  ngOnInit(): void {
  }
  
  onSubmitForm() {
    this.employeeService.postEmployee(this.employeeForm.value).subscribe(data=>{
    })
    this.router.navigate(['employee','list'])
  }

  onCancel(){
    this.employeeForm.reset();
  }
}
