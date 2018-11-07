import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  requests: PurchaseRequest;
  constructor(
    private requestsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp => {
      this.requests = resp.data;
    })
  }

}
