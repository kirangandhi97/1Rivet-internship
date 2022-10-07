import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {


  public id: any;
  public detailsData: any;


  constructor(private activatedroute: ActivatedRoute, public empListService: EmployeeService) {

    // console.log(activatedroute);
    this.detailsData = [];
    this.activatedroute.params.subscribe((p) => {
      this.id = p['id'];
    })

    // console.log(this.id);

  }

  ngOnInit(): void {
    this.getUserDetailsbyId();
    // setTimeout(() => {
     
      
    //   console.log(this.detailsData);
    //   console.log(this.id);
    // }, 5000);

  }
  getUserDetailsbyId(){
    this.empListService.getUserById(this.id).subscribe((data) => {
      this.detailsData = data;
    })
  }

}
