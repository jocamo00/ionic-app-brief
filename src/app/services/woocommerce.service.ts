import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  pagination: number = 1;

  constructor(private http: HttpClient) { }

 getProducts(web: string, customer: string, secret: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${customer}`+ ':' + `${secret}`)
    })

    return this.http.get(`${web}/wp-json/wc/v3/products`, {headers});
  }




  getSearchProduct(txtBuscar: string, web: string, customer: string, secret: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${customer}`+ ':' + `${secret}`)
    })

    return this.http.get(`${web}/wp-json/wc/v3/products?search=${txtBuscar}`, {headers});
  }


  getNextProducts(web: string, customer: string, secret: string){
      this.pagination++;
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(`${customer}`+ ':' + `${secret}`)
      })

      return this.http.get(`${web}/wp-json/wc/v3/products?page=${this.pagination}`, {headers});
  }

  getBackProducts(web: string, customer: string, secret: string){
    this.pagination--;
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${customer}`+ ':' + `${secret}`)
    })

    return this.http.get(`${web}/wp-json/wc/v3/products?page=${this.pagination}`, {headers});
  }

}
