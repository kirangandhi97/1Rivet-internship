<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
>>>>>>> 34ee321fb60431620d2208dace69cbe01a9cde4f

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  // @Input() getEmpDataFromUser:any;
ListData:any;
<<<<<<< HEAD


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
=======
  constructor(private UserListData:EmployeeService, private http:HttpClient) { }

  ngOnInit(): void {
    // this.UserListData.getUSer().subscribe((data) => this.ListData = data)
    // console.log(this.ListData);
    this.ListData=[];
    this.getUserData();
  }

  getUserData(){
    this.http.get('http://localhost:3000/employee').subscribe((result:any) =>
    this.ListData = result
    )
  }
>>>>>>> 34ee321fb60431620d2208dace69cbe01a9cde4f
}
