import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { User } from '../../user/user.class';
import { SystemService } from '../../system/system.service';
@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  user: User;
  requests: PurchaseRequest;
  constructor(
    private syssvc: SystemService,
    private requestsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.syssvc.checkForLogin();
    this.user = this.syssvc.user;
    this.requestsvc.getPRsForReview(this.syssvc.user.id)
    .subscribe(resp => {
      console.log("Requests this user can review: ", resp);
      this.requests = resp.data;
    });
  }

}
