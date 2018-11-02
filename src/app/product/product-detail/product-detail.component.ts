import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { JsonResponse } from '../../util/json-response.class';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  delete(): void {
    this.productsvc.remove(this.product)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.router.navigateByUrl('/products/list');
    })
  }
  ngOnInit() {
    // pulls id out of the get route
    let id = this.route.snapshot.params.id;
    // preform a get using the id
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.product = resp.data;
    })
  }

}
