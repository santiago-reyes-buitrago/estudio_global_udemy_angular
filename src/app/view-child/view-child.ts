import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.html',
  styleUrl: './view-child.css'
})
export class ViewChildComponent {
  @ViewChild('referenciaInput') inputelemento!: ElementRef;

  cambiarTexto() {
    this.inputelemento.nativeElement.value = 'Hola mundo';
  }
}
