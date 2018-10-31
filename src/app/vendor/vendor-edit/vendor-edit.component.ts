import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  
  vendor: Vendor;
  
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(id)
    .subscribe(resp=> {
      console.log("resp: ", resp);
      this.vendor=resp.data;
    })
  }
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.vendorsvc.change(this.vendor) 
    .subscribe(resp => {
      if (resp.code==0) {
        console.log("Success! Resp: ", resp);
        this.router.navigateByUrl('/vendors/list')
      } 
    })


}}
