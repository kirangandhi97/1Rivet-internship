import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
employeeName:string='';
employeeGender:string='';
employeeDOB:string='';
employeeSalary:string='';
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.employeeName=this.activatedroute.snapshot.queryParams['name'],
    this.employeeGender=this.activatedroute.snapshot.queryParams['gender'],
    this.employeeDOB=this.activatedroute.snapshot.queryParams['dob'],
    this.employeeSalary=this.activatedroute.snapshot.queryParams['salary']
// console.log(this.activatedroute);

  }

}
