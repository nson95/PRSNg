import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  vendors: Vendor[];
  constructor(private vendorsvc: VendorService) { }

  ngOnInit() {
    this.vendorsvc.list()
    .subscribe(resp => {
      console.log("Vendors: ", resp);
      this.vendors = resp.data;
    });
  }

}
