import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'users/list', component: UserListComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  {path: '**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
