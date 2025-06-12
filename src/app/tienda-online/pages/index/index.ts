import {Component, Input} from '@angular/core';
import {Producto} from '../../core/models/producto';
import {JsonPipe} from '@angular/common';
import {ListProduct} from '../../components/list-product/list-product';

@Component({
  selector: 'app-index',
  imports: [
    JsonPipe,
    ListProduct
  ],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {
}
