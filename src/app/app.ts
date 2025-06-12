import {Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import {Navbar} from './navbar/navbar';

registerLocaleData(localeEs, 'es')

@Component({
  selector: 'app-root',
  providers: [
    {provide: LOCALE_ID,useValue: 'es'},
  ],
  imports: [RouterOutlet, Navbar],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'view _Child';


}
