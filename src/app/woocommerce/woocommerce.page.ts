import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from '../services/woocommerce.service';


@Component({
  selector: 'app-woocommerce',
  templateUrl: './woocommerce.page.html',
  styleUrls: ['./woocommerce.page.scss'],
})
export class WoocommercePage implements OnInit {
  products: any[];
  customer: string;
  secret: string;
  web: string;
  txtSearch: string;



  constructor(private cardProduct: WoocommerceService) { 
    
  }

  ngOnInit() {
    this.apiKeyWoocommerce();
  }

  apiKeyWoocommerce() {
    this.cardProduct.getProducts(this.web, this.customer, this.secret)
      .subscribe( (data: any) => {
        this.products = data;
      });
  }

  search(txtSearch: string) {
    this.txtSearch = txtSearch;
    this.cardProduct.getSearchProduct(this.txtSearch)
      .subscribe( (data: any) => {
        this.products = data;
      });
  }

  nextPage(){
    this.cardProduct.getNextProducts()
      .subscribe( (data: any) => {
        this.products = data;
      });
  }

  backPage(){
    this.cardProduct.getBackProducts()
      .subscribe( (data: any) => {
        this.products = data;
      });
  }


}
