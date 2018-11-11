import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from '../../system/system.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  user: User;

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService
    ) {
   }

  ngOnInit() {
    this.syssvc.checkForLogin();
    this.user = this.syssvc.user;
    this.usersvc.list()
    .subscribe(resp => {
      console.log("Users: ", resp);
      this.users = resp.data;
    });
  }

}
