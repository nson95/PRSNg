import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  requests: PurchaseRequest[];
  user: User;
  constructor(
    private syssvc: SystemService,
    private requestsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.syssvc.checkForLogin();
    this.user = this.syssvc.user;
    this.requestsvc.list()
    .subscribe(resp => {
      console.log("Requests: ", resp);
      this.requests = resp.data;
    });
  }

}
