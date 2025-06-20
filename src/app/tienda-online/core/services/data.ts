import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../models/producto';
import {Observable, Subject} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceData {
  protected url='https://tienda-online-ejemplo-default-rtdb.firebaseio.com/';
  protected productos: {[llave:string]: Producto} = {};
  protected productosActualicados = new Subject<{[llave:string]: Producto}>();

  constructor(
    private http:HttpClient,
    private loginService: LoginService,
  ) { }

  getProducts():Observable<{[llave:string]: Producto}> {
    const token = this.loginService.getIdToken();
    return this.http.get<{[llave:string]: Producto}>(`${this.url}datos.json?auth=${token}`);
  }

  getProductByid(llave: string): Observable<Producto|undefined> {
    const token = this.loginService.getIdToken();
    return this.http.get<Producto>(`${this.url}datos/${llave}.json?auth=${token}`);
  }

  postProducts(product:Producto,llave:string|null = null):Observable<any> {
    const token = this.loginService.getIdToken();
    if (llave === null){
      return  this.http.post(`${this.url}datos.json?auth=${token}`,product)
    }
    return  this.http.patch(`${this.url}datos/${llave}.json?auth=${token}`,product)
  }

  deleteProdcts(llave:string|null):Observable<any> {
    const token = this.loginService.getIdToken();
    return this.http.delete<any>(`${this.url}datos/${llave}.json?auth=${token}`);
  }

  // refreshProducts() {
  //   this.productService.getProducts().subscribe(( prodcutos: {[key: string]: Producto}) => {
  //     this.productos = prodcutos;
  //   });
  // }
}
