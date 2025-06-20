import { Component } from '@angular/core';
import {FormParent} from '../../components/forms/form-parent/form-parent';

@Component({
  selector: 'app-create-product',
  imports: [
    FormParent
  ],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css'
})
export class CreateProduct {
}
