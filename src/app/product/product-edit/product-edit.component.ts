import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';
import { ProductService } from '../product.service';
import { Product } from '../product.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  vendors: Vendor[];
  product: Product = new Product();
  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  save(): void {
    this.productsvc.add(this.product)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/products/list');
      });
  }
  compareFn(v1, v2) {
    return v1.id===v2.id;
  }
  ngOnInit() {
    // pulls id out of the get route
    let id = this.route.snapshot.params.id;
    // preform a get using the id
    this.productsvc.get(id)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.product = resp.data;
      this.vendorsvc.list()
    .subscribe(resp => {
      console.log("Vendors: ", resp);
      this.vendors = resp.data;
    });
    })
  }

}
