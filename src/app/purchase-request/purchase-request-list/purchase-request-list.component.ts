import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  msg: string = '';
  user: User;
  constructor(
    private router: Router,
    private syssvc: SystemService,
    private requestsvc: PurchaseRequestService
  ) { }
    approve(purchaseRequest: PurchaseRequest) {
      purchaseRequest.reasonForRejection = this.msg;
      this.requestsvc.approve(purchaseRequest)
      .subscribe(res => {
      })
      this.router.navigateByUrl('/home');
    }
    reject(purchaseRequest: PurchaseRequest) {
      purchaseRequest.reasonForRejection = prompt("Reason For Rejection?");
      this.requestsvc.reject(purchaseRequest)
      .subscribe(res => {
      })
      this.router.navigateByUrl('/home');
    }
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
