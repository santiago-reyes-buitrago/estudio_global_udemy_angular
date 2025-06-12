import {RouterModule, Routes} from '@angular/router';
import {Index} from './pages/index';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  {path: '', component: Index },
  {path: 'agregar', component: Index },
  {path: 'editar/:llave', component: Index },
  {path: '**', component: Index },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export  class tiendaOnlineRoutesModule {}
