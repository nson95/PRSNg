import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {
  request: PurchaseRequest;
  constructor(
    private syssvc: SystemService,
    private requestsvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  delete(): void {
    if (this.syssvc.user!==this.request.user) {
      alert("You may only delete your own requests.")
      this.router.navigateByUrl('/requests/list')
    } else if (this.syssvc.user==this.request.user)
    this.requestsvc.remove(this.request)
    .subscribe(resp => {
      console.log("Request: ", resp);
      this.router.navigateByUrl('/requests/list');
    })
  }
  submit(): void {
    if (this.syssvc.user!==this.request.user) {
      alert("You may only submit your own requests.")
      this.router.navigateByUrl('/requests/list')
    } else if (this.syssvc.user==this.request.user)
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
