import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/User.service';
import { Users } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public userData: Users[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.userService.getUserData().subscribe((data) => {
      console.log(data);

      this.userData = data;
    });
  }
}
