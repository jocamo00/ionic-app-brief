import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from '../services/woocommerce.service';

@Component({
  selector: 'app-woocommerce',
  templateUrl: './woocommerce.page.html',
  styleUrls: ['./woocommerce.page.scss'],
})
export class WoocommercePage implements OnInit {
  products: any[] = [];

  constructor(private cardProduct: WoocommerceService) { 
    
  }

  ngOnInit() {
    this.getProductsWoocommerce();
  }

  private getProductsWoocommerce() {
    this.cardProduct.getProducts()
      .subscribe( (data: any) => {
        console.log(data);
        this.products = data;
      });
  }

}
