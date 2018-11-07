import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from '../line-item.service';
import { LineItem } from '../line-item.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';
import { PurchaseRequestService } from '../../purchase-request/purchase-request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
  products: Product[];
  lineitem: LineItem = new LineItem();
  prid: number;
  constructor(
    private requestsvc: PurchaseRequestService,
    private linesvc: LineItemService,
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  save(): void {
    console.log("lineitem:", this.lineitem, ", route:", this.prid);
    this.linesvc.add(this.lineitem)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/lineitems/list/'+this.prid);
      });
  }
  ngOnInit() {
    this.prid = this.route.snapshot.params.id;
    console.log("prid: ", this.prid)
    this.requestsvc.get(this.prid)
    .subscribe(resp => {
      console.log("Purchase Request: ", resp)
      this.lineitem.purchaseRequest = resp.data;
    })
    this.productsvc.list()
    .subscribe(resp=> {
      console.log("Products: ", resp);
      this.products = resp.data;``
    })
  }

}
