import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { WoocommerceService } from '../services/woocommerce.service';

@Component({
  selector: 'app-woocommerce',
  templateUrl: './woocommerce.page.html',
  styleUrls: ['./woocommerce.page.scss'],
})
export class WoocommercePage implements OnInit {
  products: any[] = [];
  customer: string;
  secret: string;
  web: string;

  constructor(private cardProduct: WoocommerceService) { 
    
  }

  ngOnInit() {

  }

  apiKeyWoocommerce() {
    this.cardProduct.getProducts(this.web, this.customer, this.secret)
      .subscribe( (data: any) => {
        console.log(data);
        this.products = data;
      });
  }

}
