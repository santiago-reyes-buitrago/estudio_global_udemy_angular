import {Component,Input} from '@angular/core';
import {productBuilder} from '../list-product/list-product';

@Component({
  selector: 'app-product',
  imports: [
  ],
  templateUrl: './product.html',
  standalone: true,
  styleUrl: './product.css'
})
export class Product{
  @Input() product!:productBuilder;
}
