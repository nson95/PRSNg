import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  request: PurchaseRequest;
  constructor(
    private requestsvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  delete(): void {
    this.requestsvc.remove(this.request)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.router.navigateByUrl('/requests/list');
    })
  }
  submit(): void {
    this.requestsvc.submit(this.request)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.router.navigateByUrl('/requests/list');
    })
  }
  ngOnInit() {
    // pulls id out of the get route
    let id = this.route.snapshot.params.id;
    // preform a get using the id
    this.requestsvc.get(id)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.request = resp.data;
    })
  }
}
