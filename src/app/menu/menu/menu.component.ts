import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginMenus: Menu[]= [
    new Menu("Sign Up", "/users/create", "Create an account"),
    new Menu("Login", "/users/login", "Log in")
  ]
  menus: Menu[] = [
    new Menu("Home", "/home", "The Home Page"),
    new Menu("Users", "/users/list", "The User List"),
    new Menu("Vendors", "/vendors/list", "The Vendor List"),
    new Menu("Products", "/products/list", "The Product List"),
    new Menu("Requests", "/requests/list", "Request List"),
    new Menu("About", "/about", "The About Page")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
