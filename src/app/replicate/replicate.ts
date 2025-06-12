import { Component } from '@angular/core';

@Component({
  selector: 'app-replicate',
  imports: [],
  templateUrl: './replicate.html',
  styleUrl: './replicate.css'
})
export class Replicate {
  protected texto:string = "";
  handleChange(e: Event) {
    const {value} = e.target as HTMLInputElement;
    this.texto = value;
  }
}
