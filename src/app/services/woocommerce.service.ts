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
      'Authorization': 'Basic ' + btoa('ck_0567ae24d036c4a8dde4bfed0806c1ae9f38476f' + ':' + 'cs_404aa57a2183b52e5ba2334f9e603f0062361ceb')
    })

    return this.http.get(`https://atum.betademo.es/wp-json/wc/v3/products`, {headers});
  }


  getSearchProduct(txtBuscar: string){
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('ck_0567ae24d036c4a8dde4bfed0806c1ae9f38476f' + ':'+'cs_404aa57a2183b52e5ba2334f9e603f0062361ceb')
    })

    return this.http.get(`https://atum.betademo.es/wp-json/wc/v3/products?search=${txtBuscar}`, {headers});
  }


 getNextProducts(){
    this.pagination++;
    console.log(this.pagination);
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('ck_0567ae24d036c4a8dde4bfed0806c1ae9f38476f' + ':' + 'cs_404aa57a2183b52e5ba2334f9e603f0062361ceb')
    })

    return this.http.get(`https://atum.betademo.es/wp-json/wc/v3/products?page=${this.pagination}`, {headers});
  }

  getBackProducts(){
    this.pagination--;
    console.log(this.pagination);
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('ck_0567ae24d036c4a8dde4bfed0806c1ae9f38476f' + ':' + 'cs_404aa57a2183b52e5ba2334f9e603f0062361ceb')
    })

    return this.http.get(`https://atum.betademo.es/wp-json/wc/v3/products?page=${this.pagination}`, {headers});
  }

}
