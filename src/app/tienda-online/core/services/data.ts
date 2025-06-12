import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../models/producto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceData {
  url='https://tienda-online-ejemplo-default-rtdb.firebaseio.com/'

  constructor(
    private http:HttpClient,
  ) { }

  getProducts():Observable<{[llave:string]: Producto}> {
    return this.http.get<{[llave:string]: Producto}>(this.url + 'datos.json');
  }

  postProducts(){

  }

  getProduct(id:number){
    return this.http.get<{[llave:string]: Producto}>(this.url + 'datos.json');

  }
  putProducts(){

  }
}
