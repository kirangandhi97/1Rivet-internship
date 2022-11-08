import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public employeeForm:FormGroup;
  constructor(private employeeService:EmployeeService, private fb:FormBuilder, private router:Router, private overlayService:OverlayService) {
    this.employeeForm= this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phoneNo:[''],
      salary:[''],
      id:['']
    })
   }
  
  ngOnInit(): void {
  }
  
  onSubmitForm() {
    this.employeeService.postEmployee(this.employeeForm.value).subscribe((data)=>{
      console.log(data);
      
      this.getAlldata();
    })
    this.router.navigate(['employee','list'])
  }

  getAlldata(){
    this.employeeService.getEmployees().subscribe((data)=>{
        // console.log(data);
        
    })
  }

  onCancel(){
    this.overlayService.onDetach.next(true);
  }
}
