import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }
  save(): void {
    console.log("Called save()")
    this.usersvc.add(this.user) 
    .subscribe(resp => {
      if (resp.code==0) {
        console.log("Success! Resp: ", resp);
        this.router.navigateByUrl('/users/list')
      } 
    })
  }

  ngOnInit() {
  }

}