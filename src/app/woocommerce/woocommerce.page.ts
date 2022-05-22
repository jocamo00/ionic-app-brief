import { Component, OnInit } from '@angular/core';
import { WoocommerceService } from '../services/woocommerce.service';
import { map } from "rxjs/operators"; 
import { of } from 'rxjs/internal/observable/of';


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
  txtBuscar= '';
  //product: any[] = [];
  searchProduct: string;
  search = '';
  query;

  constructor(private cardProduct: WoocommerceService) { 
    
  }

  ngOnInit() {
    this.apiKeyWoocommerce();
  }

  apiKeyWoocommerce() {
    this.cardProduct.getProducts(this.web, this.customer, this.secret)
      .subscribe( (data: any) => {
        console.log(data);
        this.products = data;
      });
  }

}
