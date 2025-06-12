import { Component } from '@angular/core';
import {CommonModule, } from '@angular/common';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css'
})
export class EjemploPipes {
  empleados = [
    {nombre: 'John',sueldo: 12000, fechaNacimiento: new Date('2000-08-01T00:00:00.000Z'),},
    {nombre: 'Juanja',sueldo: 15000, fechaNacimiento: new Date('2000-08-01T00:00:00.000Z'),},
  ]
}
