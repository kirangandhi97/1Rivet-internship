import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Users } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public userData: Users[] = [];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.authService.getUserData().subscribe((data) => {
      console.log(data);

      this.userData = data;
    });
  }
}
