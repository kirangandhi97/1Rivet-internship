import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  // @Input() getEmpDataFromUser:any;
ListData:any;


  constructor( private empListData:EmployeeService) {
    // empListData.getUSer().subscribe((data:any)=>{
    //   this.ListData = data
    // })
    this.getEmployeeData();
   }


  ngOnInit(): void {
    // this.getEmployeeData();
  }
//br
  getEmployeeData(){
    this.empListData.getUSer().subscribe((data:any)=>{
      this.ListData = data
    })
  }
}
