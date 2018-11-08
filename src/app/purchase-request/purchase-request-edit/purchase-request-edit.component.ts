import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../purchase-request.class';
import { PurchaseRequestService } from '../purchase-request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {
  request: PurchaseRequest;

  constructor(
    private syssvc: SystemService,
    private requestsvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  save(): void {
    this.requestsvc.add(this.request)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/requests/list');
    });
  }
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id)
    .subscribe(resp => {
      this.request = resp.data
      if (this.syssvc.user!==this.request.user) {
        this.router.navigateByUrl('/requests/list')
        alert("You may only edit your own requests.")
      }
    })
  }

}
