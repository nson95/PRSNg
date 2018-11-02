import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product.class';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  vendors: Vendor[];
  constructor(
    private vendorsvc: VendorService,
    private productsvc: ProductService,
    private router: Router
    ) { }

    save(): void {
      this.productsvc.add(this.product)
        .subscribe(resp => {
          console.log("resp:", resp);
          this.router.navigateByUrl('/products/list');
        });
    }
  ngOnInit() {
    this.vendorsvc.list()
    .subscribe(resp => {
      console.log("Vendors: ", resp);
      this.vendors = resp.data;
    });
  }

}
