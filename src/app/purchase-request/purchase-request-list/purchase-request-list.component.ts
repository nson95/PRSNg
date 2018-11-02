import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {
  requests: PurchaseRequest[];
  constructor(
    private requestsvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.requestsvc.list()
    .subscribe(resp => {
      console.log("Requests: ", resp);
      this.requests = resp.data;
    });
  }

}
