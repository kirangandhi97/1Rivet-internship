import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employee: Employee[];
  public EmpForm = this.fb.group({
    firstname:['', [Validators.required]],
    lastname:['', [Validators.required]],
    email:['', [Validators.required]],
    gender:['', [Validators.required]],
    DOB:['', [Validators.required]],
    salary:['', [Validators.required]],
    Id:['', [Validators.required]],
  })
  constructor(private fb:FormBuilder) { 
    this.employee = [];
    // this.EmpForm=new FormGroup('');      lengthy way
  }

  ngOnInit(): void {
  }

}
