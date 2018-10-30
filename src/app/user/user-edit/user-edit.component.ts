import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
 
  user: User;

  save(): void {
    this.usersvc.change(this.user) 
    .subscribe(resp => {
      if (resp.code==0) {
        console.log("Success! Resp: ", resp);
        this.router.navigateByUrl('/users/list')
      } 
    })
  }
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(resp=> {
      console.log("resp: ", resp);
      this.user=resp.data;
    })
  }

}
