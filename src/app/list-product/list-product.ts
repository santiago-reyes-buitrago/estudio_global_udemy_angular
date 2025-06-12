import {Component, ViewChild} from '@angular/core';
import {Product} from '../product/product';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormProduct} from './form-product/form-product';

export class productBuilder {
   constructor(
     public name: string,
     public price: number,
     public quantity: number,
   ){}
 }
@Component({
  selector: 'app-list-product',
  imports: [Product, ReactiveFormsModule, FormsModule, FormProduct],
  templateUrl: './list-product.html',
  standalone: true,
  styleUrl: './list-product.css'
})
export class ListProduct {
  @ViewChild(FormProduct) formProduct!: FormProduct;
  protected data:productBuilder[] = [];
  protected readonly Number = Number;


  updateProducts(data: productBuilder) {
    this.data.push(data);
  }

}
