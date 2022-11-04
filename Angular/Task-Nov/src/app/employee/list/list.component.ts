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
  constructor(private router:Router, private overlayService:OverlayService, private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data =>{
      console.log(data);
      this.employeeList = data;
    })
  }

  onAddNew(){
this.overlayService.openOverlay(FormComponent);
// this.router.navigate(['employee','add'])
  }
}
