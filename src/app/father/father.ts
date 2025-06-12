import {Component, ViewChild} from '@angular/core';
import {Son} from './son/son';

@Component({
  selector: 'app-father',
  imports: [
    Son
  ],
  templateUrl: './father.html',
  styleUrl: './father.css'
})
export class Father {
  @ViewChild(Son) son!: Son;
  msg = '';
  // receiveNot(msg: string){
  //   this.msg = msg;
  // }

  cambiarMensajeHijo(){
    this.son.cambiarMenasaje("Mensaje actualizado father");
  }
}
