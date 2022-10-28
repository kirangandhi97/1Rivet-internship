import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/User.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
public loginForm:FormGroup;
  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { 
    this.loginForm= this.fb.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

  onLogin(){
    this.userService.getUserData().subscribe((data)=>{
    const userData = data.find((user)=>
      user.email === this.loginForm.controls['email'].value && user.password === this.loginForm.controls['password'].value
    )
    if(userData){
      localStorage.setItem('isAuthenticate', 'true');
      this.router.navigate(['home'])
    }
    else{
      console.error('check your email and password again!!...');
      
    }
    // console.log(data);
    
    })
  }
}
