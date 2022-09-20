import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public userLoginForm:FormGroup;
  public isSubmitted:boolean=false;
  constructor(
    public formbuilder:FormBuilder
  ) {
    this.userLoginForm = new FormGroup(''); 
    //using form-control
    // this.userLoginForm = new FormGroup({
    //   firstname:new FormControl('',Validators.required),
    //   lastname:new FormControl('',Validators.required),
    //   age:new FormControl('',Validators.required),
    //   email:new FormControl('',Validators.required),
    //   password:new FormControl('', Validators.required)
    // })
   }

  ngOnInit(): void {
    this.userLoginForm = this.formbuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("[a-zA-Z0-9@#]{6}")]],
      address: this.formbuilder.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        pinCode: ['', Validators.required],
      })
    })

  }

  onSubmit(){
    console.log(this.userLoginForm);
    this.isSubmitted = true;

  }

  // get city()
  // {
  //   return this.userLoginForm.controls['address'].get('city')?;
  // }
}
