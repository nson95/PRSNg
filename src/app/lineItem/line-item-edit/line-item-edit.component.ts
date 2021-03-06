import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from '../line-item.service';
import { LineItem } from '../line-item.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent implements OnInit {
  products: Product[];
  lineitem: LineItem = new LineItem();
  constructor(
    private linesvc: LineItemService,
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  compareFn(v1, v2) {
    return v1.id===v2.id;
  }
  save(): void {
    this.linesvc.add(this.lineitem)
      .subscribe(resp => {
        console.log("resp:", resp);
        let id = this.route.snapshot.params.id;
        this.router.navigateByUrl('/lineitems/list/' +id);
      });
  }

  ngOnInit() {
    this.productsvc.list()
    .subscribe(resp=> {
      console.log("Products: ", resp);
      this.products = resp.data;
      let id = this.route.snapshot.params.id;
      this.linesvc.get(id)
      .subscribe(resp => {
        console.log("LineItem: ", resp);
        this.lineitem = resp.data;
      })
    })
  }

}
