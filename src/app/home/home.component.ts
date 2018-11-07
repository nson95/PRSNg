import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system/system.service';
import { User } from '../user/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(
    private sys: SystemService
  ) { }

  ngOnInit() {
    this.sys.checkForLogin();
    this.user = this.sys.user;
  }

}
