import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css'
})
export class Message {
  protected message: string="";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const {mensaje} = this?.route?.snapshot?.queryParams;
    this.message = mensaje;
  }

  showMessage() {
    this.message = "Click en el boton azul";
  }
  resetMessage() {
    this.message = "Click en el boton amarillo";
  }
}
