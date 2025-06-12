import {Component, EventEmitter, Output} from '@angular/core';
import {productBuilder} from '../list-product';

@Component({
  selector: 'app-form-product',
  imports: [],
  templateUrl: './form-product.html',
  styleUrl: './form-product.css'
})
export class FormProduct {
  @Output() LoadingData = new EventEmitter<productBuilder>();

  protected readonly Number = Number;

  calculatedata(dat:productBuilder) {
    this.LoadingData.emit(dat);

  }



}
