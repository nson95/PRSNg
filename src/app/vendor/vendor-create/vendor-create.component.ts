import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) { }
  save(): void {
    console.log("Called save()")
    this.vendorsvc.add(this.vendor) 
    .subscribe(resp => {
      if (resp.code==0) {
        console.log("Success! Resp: ", resp);
        this.router.navigateByUrl('/vendors/list')
      } 
    })
  }

  ngOnInit() {
  }

}
