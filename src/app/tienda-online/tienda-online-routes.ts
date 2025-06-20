import {RouterModule, Routes} from '@angular/router';
import {Index} from './pages/index';
import {NgModule} from '@angular/core';
import {CreateProduct} from './pages/create-product/create-product';
import {UpdateProduct} from './pages/update-product/update-product';
import {Login} from './components/login/login';
import {Layout} from './components/layout/layout';


export const routes: Routes = [
  {path: '', component: Layout, children: [
      {path: '',component:Index},
      {path: 'agregar', component: CreateProduct },
      {path: 'editar/:llave', component: UpdateProduct },
    ] },
  {path: 'login', component: Login },
  {path: '**', component: Index },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export  class tiendaOnlineRoutesModule {}
