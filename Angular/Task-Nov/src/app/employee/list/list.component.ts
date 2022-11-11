import { OverlayRef } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/DataShareService/data-sharing.service';
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
  public pageCount: number;
  public dataAtATime: number;
  employeeList: Employee[] = [];

  constructor(private router: Router,
    private overlayService: OverlayService,
    private employeeService: EmployeeService,
    private dataSharingService: DataSharingService
  ) {
    this.pageCount = 1;
    this.dataAtATime = 5;
  }

  ngOnInit(): void {
    this.dataSharingService.dataSharing.subscribe(data => {
      if (data) {
        this.employeeList.push(data)
        // this.getEmployee();
      }
    })
    this.getEmployee()

  }


  public getEmployee() {
    this.employeeService.getEmployees(this.pageCount, this.dataAtATime).subscribe(res => {
      console.log(res)
      this.employeeList = this.employeeList.concat(res)
    })
  }

  onAddNew() {
    this.overlayService.openOverlay(FormComponent);
    // this.router.navigate(['employee','add'])
  }

  onEdit(data: Employee) {
    // console.log(id);
    const formOverlay = this.overlayService.openOverlay(FormComponent);
    //  .instance.employeeForm.patchValue();
    formOverlay.instance.employeeForm.patchValue(data);
    console.log(formOverlay.instance);
    // this.router.navigate(['employee/edit',id])
  }

  onScroll() {
    this.pageCount++;
    this.getEmployee();
  }
}
