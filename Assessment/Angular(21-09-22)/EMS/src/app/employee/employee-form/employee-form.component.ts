import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public EmployeeData:any;
  public editEmployeeData:any;
  isSubmitted:boolean=false;
  //  employeeForm = this.fb.group({
  //   name:['', Validators.required],
  //   gender:['', Validators.required],
  //   dob:['', Validators.required],
  //   salary:['', Validators.required],
  //  })
  constructor(private fb: FormBuilder) {
    this.EmployeeData=[];
    this.employeeForm = new FormGroup('');
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      gender: ['', [Validators.required,  Validators.pattern('[a-zA-Z]*')]],
      dob: ['', Validators.required],
      salary: ['', [Validators.required,  Validators.pattern('[0-9]*')]],
    })
    
  }

  onSubmitted(){
    console.log(this.employeeForm);
    this.isSubmitted=true;
    this.EmployeeData.push(this.employeeForm.value);
    console.log(this.EmployeeData);
    
    // this.EmployeeData.push(
    //   {
    //  name: this.employeeForm.controls['name'].value,
    //  gender: this.employeeForm.controls['gender'].value,
    //  dob: this.employeeForm.controls['dob'].value,
    //  salary: this.employeeForm.controls['salary'].value,
    //   }
    // )
  this.employeeForm.reset();
  }
  onReset(){
    this.employeeForm.reset();
  }

  employeeEditData(val:any){
    this.editEmployeeData = val;
    console.log(this.editEmployeeData);
    this.employeeForm.patchValue(val);
  }

  employeeDeleteData(val:any){
    this.EmployeeData.pop(val);
  }
}
