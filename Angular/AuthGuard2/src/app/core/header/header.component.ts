import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthGuard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  public headerStatus: boolean = false;
  constructor(private router: Router, private authService: AuthService) {

  }
  ngAfterContentChecked(): void {
    const authvalue = localStorage.getItem('isAuthenticate')
    if (authvalue) {
      this.headerStatus = true
    }
    else {
      this.headerStatus = false

    }
  }
  //  this.authService.authSubject.subscribe((res)=>{
  //   console.log(res);
  //   this.authSubjec = res;




  ngOnInit(): void {

  }


  onLogout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}