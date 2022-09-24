import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  // public employee: Employee[];
  public employee:any;
  public EmpForm = this.fb.group({
    firstname:['', [Validators.required]],
    lastname:['', [Validators.required]],
    email:['', [Validators.required]],
    gender:['', [Validators.required]],
    DOB:['', [Validators.required]],
    salary:['', [Validators.required]],
    id:[''],
  })
  constructor(private fb:FormBuilder, private empService:EmployeeService) { 
    // this.employee = [];
    // this.EmpForm=new FormGroup('');      lengthy way
  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.empService.getDataFromServer(data).subscribe((data:any)=>{
      // this.employee = data;
      console.log(data);
    })
    
    
  }
}
