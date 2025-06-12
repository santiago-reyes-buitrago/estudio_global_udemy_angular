import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Layout} from './components/layout/layout';
import {tiendaOnlineRoutesModule} from './tienda-online-routes';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Layout,
    tiendaOnlineRoutesModule
  ]
})
export class TiendaOnlineModule { }
