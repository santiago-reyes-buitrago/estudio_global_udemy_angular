import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-greetings',
  imports: [
    FormsModule
  ],
  templateUrl: './greetings.html',
  styleUrl: './greetings.css'
})
export class Greetings {
  protected  greet: string = "Hello World";
}
