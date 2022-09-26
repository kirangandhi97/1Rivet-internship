import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service'



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() ListData:any;
// ListData:any;



  constructor( private empListService:EmployeeService) {
    // empListDa]ta.getUSer().subscribe((data:any)=>{
    //   this.ListData = data
    // })
    
   }


  ngOnInit(): void {
  // console.log(this.ListData);
  this.getEmployeeData();
  }
//br
  getEmployeeData(){
    this.empListService.getUSer().subscribe((data:any)=>{
      this.ListData = data
      // console.log(data);
      
    })
  }

  UpdateEmployee(){
    this.empListService.updateData
  }


  // button click event 
  onEdit(){
    
  }
}
