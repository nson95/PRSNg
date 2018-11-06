import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LineItemService } from '../line-item.service';
import { LineItem } from '../line-item.class';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';
import { PurchaseRequest } from '../../purchase-request/purchase-request.class';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.css']
})
export class LineItemListComponent implements OnInit {
  lineitems: LineItem[];
  request: PurchaseRequest;
  constructor(
    private linesvc: LineItemService,
    private prsvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.linesvc.getPrli(id)
    .subscribe(resp => {
      console.log("Line Items: ", resp);
      this.lineitems = resp.data;
    });
    this.prsvc.get(id)
    .subscribe(resp => {
      console.log("Requests: ", resp);
      this.request = resp.data;
    })
  }

}
