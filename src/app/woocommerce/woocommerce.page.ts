import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { WoocommerceService } from '../services/woocommerce.service';
import { Product } from '../shared/product.interface';


@Component({
  selector: 'app-woocommerce',
  templateUrl: './woocommerce.page.html',
  styleUrls: ['./woocommerce.page.scss'],
})
export class WoocommercePage implements OnInit {
  products: Product;
  customer: string;
  secret: string;
  web: string;
  txtSearch: string;



  constructor(private cardProduct: WoocommerceService, private authSvc:AuthService, private route: Router) { 
    
  }

  ngOnInit() {
    this.apiKeyWoocommerce();
  }

  apiKeyWoocommerce() {
    this.cardProduct.getProducts(this.web, this.customer, this.secret)
      .subscribe( (productos: Product) => {
        this.products = productos;
      });
  }

  search(txtSearch: string) {
    this.txtSearch = txtSearch;
    this.cardProduct.getSearchProduct(this.txtSearch, this.web, this.customer, this.secret)
      .subscribe( (data: any) => {
        this.products = data;
      });
  }

  nextPage(){
    this.cardProduct.getNextProducts(this.web, this.customer, this.secret)
      .subscribe( (data: any) => {
        this.products = data;
      });
  }

  backPage(){
    this.cardProduct.getBackProducts(this.web, this.customer, this.secret)
      .subscribe( (data: any) => {
        this.products = data;
      });
  }

  logout() {
    this.authSvc.logout();
    this.route.navigate(['home']);
  }


}
