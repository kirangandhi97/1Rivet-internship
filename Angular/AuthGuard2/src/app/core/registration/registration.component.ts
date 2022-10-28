import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Service/User.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
public userForm:FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService) { 
    this.userForm = this.fb.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

  onRegister(){
    this.userService.postUser(this.userForm.value).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
