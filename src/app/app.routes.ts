import { Routes } from '@angular/router';
import {UserList} from './user-list/user-list';
import {Message} from './message/message';
import {Father} from './father/father';
import {Son} from './father/son/son';

export const routes: Routes = [
  {path: '', component: UserList },
  {path: 'mostrarMensaje', component: Message },
  {path: 'configuracion', children:[
      {path: 'padre',component: Father},
      {path: 'hijo',component: Son},
    ] },
  {path: 'tienda', loadChildren: ()=> import('./tienda-online/tienda-online-module').then(m => m.TiendaOnlineModule),},
];
