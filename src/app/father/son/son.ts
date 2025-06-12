import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-son',
  imports: [],
  templateUrl: './son.html',
  styleUrl: './son.css'
})
export class Son {
  // @Input() msg!: string;
  // @Output() showSon = new EventEmitter<string>();

  // enviarMensaje() {
  //   this.showSon.emit('para prade');
  // }

  msg: string = 'Mensaje desde el componente hijo';

  cambiarMenasaje(msg: string) {
    this.msg = msg;
  }

}
