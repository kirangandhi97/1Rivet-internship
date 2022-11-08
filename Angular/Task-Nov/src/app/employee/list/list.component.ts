import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OverlayService } from 'src/app/shared/overlay.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
employeeList:Employee[]=[];
  constructor(private router:Router, 
    private overlayService:OverlayService, 
    private employeeService:EmployeeService
    ) { }

  ngOnInit(): void {
    this.getEmployee()
    
  }
  public getEmployee(){
    this.employeeService.getEmployees().subscribe(res=>{
      console.log(res)
      this.employeeList=res
    })
  }

  onAddNew(){
this.overlayService.openOverlay(FormComponent);
// this.router.navigate(['employee','add'])
  }

  onEdit(data:Employee){
    // console.log(id);
   const formOverlay = this.overlayService.openOverlay(FormComponent);
  //  .instance.employeeForm.patchValue();
  formOverlay.instance.employeeForm.patchValue(data);
  console.log(formOverlay.instance);
  
  
  
    
    // this.router.navigate(['employee/edit',id])
  }
}
