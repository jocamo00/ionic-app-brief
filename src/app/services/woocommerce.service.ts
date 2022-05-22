import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  constructor(private http: HttpClient) { }

 getProducts(customer: any, secret: any){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${customer}` + ':' + `${secret}`)
    })

    return this.http.get('https://atum.betademo.es/wp-json/wc/v3/products', {headers});
  }
}
