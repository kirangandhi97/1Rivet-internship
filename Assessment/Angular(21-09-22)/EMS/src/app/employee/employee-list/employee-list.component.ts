import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() public userData: any;
  @Output() employeeEmitter: EventEmitter<string>;
  @Output() employeeDelete: EventEmitter<string>;
  // public editData: any;
  // public usersData:any[]=[];
  constructor(private route: Router, private activatedroute: ActivatedRoute) {
    this.employeeEmitter = new EventEmitter();
    this.employeeDelete = new EventEmitter();

    // for dummy data 
   


  }

  ngOnInit(): void {
    console.log(this.userData);
    // this.editData = [
    //   {
    //     name: this.activatedroute.snapshot.queryParams['name'],
    //     gender: this.activatedroute.snapshot.queryParams['gender'],
    //     dob: this.activatedroute.snapshot.queryParams['dob'],
    //     salary: this.activatedroute.snapshot.queryParams['salary']
    //   }
    // ]

    // this.userData = [
    //   {name:'kiran', gender:'FEMALE', dob:'16-02-1997', salary:20000},
    //   {name:'Hiren', gender:'MALE', dob:'16-02-1997', salary:20000},
    //   {name:'kiran', gender:'FEMALE', dob:'16-02-1997', salary:20000},
    //   {name:'kiran', gender:'FEMALE', dob:'16-02-1997', salary:20000},
    // ]

  }
  // navigateToDetails(){
  //   this.route.navigate(['details'], {redirectTo: this.activatedroute});
  // }
  Edit(employee:any) {
    this.employeeEmitter.emit(employee);


  }
 public Delete(employee:any){
    this.employeeDelete.emit(employee);
  }
}
