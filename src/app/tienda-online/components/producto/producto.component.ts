import {Component, Input} from '@angular/core';
import {Producto} from '../../core/models/producto';
import {Router} from '@angular/router';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-producto',
  imports: [
    DecimalPipe
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() producto!: Producto;
  @Input() llave!: string;

  constructor(
    private router: Router,
  ) {}

  editarProducto(){
    this.router.navigate(['tienda/editar/',this.llave]);
  }


}
