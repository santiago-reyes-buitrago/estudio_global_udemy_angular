import { Component } from '@angular/core';
import {Producto} from '../../core/models/producto';
import {ProductServiceData} from '../../core/services/data';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductoComponent} from '../producto/producto.component';

@Component({
  selector: 'app-list-product',
  imports: [
    ProductoComponent,
  ],
  templateUrl: './list-product.html',
  styleUrl: './list-product.css'
})
export class ListProduct {
  protected llaveProducto!: string;
  protected productos!: {[key: string]: Producto};
  protected description!:string;
  protected price!:number;

  constructor(
    private productService:ProductServiceData,
    private router:Router,
    private route:ActivatedRoute,
  ) {}

  ngOnInit() {
    this.cargarProductos();

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
    this.router.navigate(['/tienda/agregar']);
  }

}
