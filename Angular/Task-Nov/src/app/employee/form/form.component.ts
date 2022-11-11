import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/DataShareService/data-sharing.service';
import { OverlayService } from 'src/app/shared/overlay.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public employeeForm:FormGroup;
  constructor(private employeeService:EmployeeService, private fb:FormBuilder, private router:Router, private overlayService:OverlayService,
    private dataSharingService:DataSharingService) {
    this.employeeForm= this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      phoneNo:[''], //[Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),Validators.required]
      salary:[''],
      id:['']
    })
   }
  
  ngOnInit(): void {
  }
  
  onSubmitForm() {
    if(this.employeeForm.value.id){
      this.employeeService.updateEmployeeData(this.employeeForm.value,this.employeeForm.value.id).subscribe((data)=>{
        this.dataSharingService.dataSharing.next(data);
      })
    }
    else{
      this.employeeService.postEmployee(this.employeeForm.value).subscribe((data)=>{
        this.dataSharingService.dataSharing.next(data);
        console.log(data);
      })
    }
    this.overlayService.onDetach.next(true);
    this.router.navigate(['employee','list'])
  }

  // getAlldata(){
  //   this.employeeService.getEmployees().subscribe((data)=>{
  //       // console.log(data);
        
  //   })
  // }

  onCancel(){
    this.overlayService.onDetach.next(true);
  }
}
