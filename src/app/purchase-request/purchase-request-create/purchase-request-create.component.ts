import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { PurchaseRequestService } from '../purchase-request.service';
import { PurchaseRequest } from '../purchase-request.class';
@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {
  request: PurchaseRequest = new PurchaseRequest();
  constructor(
    private sys: SystemService,
    private requestsvc: PurchaseRequestService,
    private router: Router
  ) { }
  save(): void {
    console.log(this.sys._user.userName);
    this.requestsvc.add(this.request)
    .subscribe(resp => {
      console.log("resp:", resp);
      this.router.navigateByUrl('/requests/list');
    });
  }
  ngOnInit() {
    this.sys.checkForLogin();
    this.request.user = this.sys.user;
  }
  
}
  



