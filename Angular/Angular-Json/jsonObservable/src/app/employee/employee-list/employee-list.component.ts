import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service'
import { Employee } from '../Employee.model';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() ListData: Employee[];
  public detailsData: any;
  // ListData:any;



  constructor(private empListService: EmployeeService, private route: Router) {
    // empListDa]ta.getUSer().subscribe((data:any)=>{
    //   this.ListData = data
    // })
    this.ListData = [];
    this.detailsData = {};
  }


  ngOnInit(): void {
    // console.log(this.ListData);
    this.getEmployeeData();
  }
  //br
  getEmployeeData() {
    this.empListService.getUSer().subscribe((data: any) => {
      this.ListData = data
      // console.log(data);

    })
  }

  UpdateEmployee() {
    this.empListService.updateData
  }


  // button click event 
  onEdit(employee: Employee) {
  
    this.route.navigate(['employee/edit', employee.id])

  }

  onDelete(empId: any) {
    if (confirm('are you sure??')) {
      this.empListService.deleteData(empId).subscribe(() => {
        this.getEmployeeData();
      })
    }
  }

  onDetails(empl: any) {
    this.route.navigate(['employee/details', empl.id])
  }
}
