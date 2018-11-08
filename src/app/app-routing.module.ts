import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchase-request-lines/purchase-request-lines.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchase-request-review/purchase-request-review.component';

import { LineItemListComponent } from './lineItem/line-item-list/line-item-list.component';
import { LineItemDetailComponent } from './lineItem/line-item-detail/line-item-detail.component';
import { LineItemEditComponent } from './lineItem/line-item-edit/line-item-edit.component';
import { LineItemCreateComponent } from './lineItem/line-item-create/line-item-create.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'users/list', component: UserListComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'users/login', component: UserLoginComponent},

  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},

  { path: 'products/list', component: ProductListComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},

  { path: 'requests/list', component: PurchaseRequestListComponent},
  { path: 'requests/create', component: PurchaseRequestCreateComponent},
  { path: 'requests/detail/:id', component: PurchaseRequestDetailComponent},
  { path: 'requests/edit/:id', component: PurchaseRequestEditComponent},
  { path: 'requests/lines/:id', component: PurchaseRequestLinesComponent},
  { path: 'requests/review', component: PurchaseRequestReviewComponent},

  { path: 'lineitems/list/:id', component: LineItemListComponent},
  { path: 'lineitems/create/:id', component: LineItemCreateComponent},
  { path: 'lineitems/detail/:id', component: LineItemDetailComponent},
  { path: 'lineitems/edit/:id', component: LineItemEditComponent},

  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
