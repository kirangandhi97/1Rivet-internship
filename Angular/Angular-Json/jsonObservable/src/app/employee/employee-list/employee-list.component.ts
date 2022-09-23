import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
ListData:any;
  constructor(private UserListData:EmployeeService) { }

  ngOnInit(): void {
    this.UserListData.getUSer().subscribe((data) => this.ListData = data)
    console.log(this.ListData);
  }

}
