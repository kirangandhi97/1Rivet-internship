import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationService } from '../Service/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
public userRegistrationForm:FormGroup;
  constructor(private fb:FormBuilder, private registrationService:RegistrationService) { 
    this.userRegistrationForm = this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.registrationService.postData(this.userRegistrationForm.value).subscribe((res)=>{
      console.log(res);
      
    })
  }
}
