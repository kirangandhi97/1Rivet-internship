import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../Employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employee: Employee[];
  public EmpForm: FormGroup
  public user: any
  public id: any;
  isSubmitted:boolean=false;

  // public abc: string[];
  constructor(private fb: FormBuilder,
    public empService: EmployeeService,
    public activatedroute: ActivatedRoute,
    public router:Router) {
    this.employee = [];
    this.EmpForm = this.fb.group({
      firstname: ['',[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z]*')]],
      lastname: ['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: ['',Validators.required], //Validators.pattern('[a-zA-z@#0-9]*')
      gender: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      DOB: ['',Validators.required],
      salary: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      // id: [''],
    })
    // this.abc = []
    // console.log(this.activatedroute);
    

    // get id by using params 
    this.activatedroute.params.subscribe((params) => {
      this.id = params['id']
    })
    if (this.id) {
      this.DataById();
    }
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // for update 
    // console.log(this.EmpForm);
    this.isSubmitted=true;
    // debugger
    if(this.EmpForm.valid){
      if (this.id) {
        this.updateData();
        this.router.navigateByUrl("employee/form");
      }
      else {
        this.empService.postData(this.EmpForm.value).subscribe(data => {
          // this.employee = data;
          this.getData();
          // this.router.navigateByUrl("employee/form");
        })
      }
    }
    
  }

  getData() {
    this.empService.getUSer().subscribe((result: any) => {
      this.employee = result;
    })
  }


  DataById() {
    this.empService.getUserById(this.id).subscribe((employee) => {
      this.EmpForm.patchValue(employee);
    })
  }

  updateData() {
    this.empService.updateData(this.EmpForm.value, this.id).subscribe(() => {
      this.getData();
    })
  }

}




