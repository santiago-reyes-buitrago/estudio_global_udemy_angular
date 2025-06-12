import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceData} from '../../core/services/data';
import {Producto} from '../../core/models/producto';

@Component({
  selector: 'app-create-product',
  imports: [],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {
  llaveProducto: string | null = null;
  descripcionInput: string = '';
  precionInput: number | null = null;

  constructor(
    private productService:ProductServiceData,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['llave'];
    if (id) {
      const product = this.productService.getProduct(id)
      this.llaveProducto = id;
      this.descripcionInput = product.descripcion;
      this.descripcionInput = product.price;
    }
  }


  guardarProductos(event: Event) {
    event.preventDefault();
    if (!(this.descripcionInput.trim().length > 1) ||this.descripcionInput == null || this.precionInput) {
      console.log('descripcion no valido');
      return;
    }
    const product = new Producto(this.descripcionInput,this.precionInput ?? 0);

    this.productService.postProducts(product);
  }

}
