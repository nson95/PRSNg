import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';
@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  delete(): void {
    this.vendorsvc.remove(this.vendor)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.router.navigateByUrl('/vendors/list');
    })
  }
  constructor(
    private vendorsvc: VendorService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // pulls id out of the get route
    let id = this.route.snapshot.params.id;
    // preform a get using the id
    this.vendorsvc.get(id)
    .subscribe(resp => {
      console.log("resp: ", resp);
      this.vendor = resp.data;
    })
  }

}
