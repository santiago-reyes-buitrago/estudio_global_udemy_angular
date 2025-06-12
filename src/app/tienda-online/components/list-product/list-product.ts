import { Component } from '@angular/core';
import {Producto} from '../../core/models/producto';
import {ProductServiceData} from '../../core/services/data';
import {Router} from '@angular/router';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-list-product',
  imports: [
    JsonPipe
  ],
  templateUrl: './list-product.html',
  styleUrl: './list-product.css'
})
export class ListProduct {
  productos!: {[key: string]: Producto};

  constructor(
    private productService:ProductServiceData,
    private router:Router,
  ) {}

  ngOnInit() {
    this.cargarProductos()
  }

  obtenerLlaves():string[]{
    if (this.productos){
      return Object.keys(this.productos);
    }
    return [];
  }

  cargarProductos() {
    this.productService.getProducts().subscribe(( prodcutos: {[key: string]: Producto}) => {
      this.productos = prodcutos;
    });
  }
  agregarProducto() {

  }

}
