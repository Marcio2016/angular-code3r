import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import './views/home/home.component';
import './views/produto/produto.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';

const routes: Routes = [{
  path : "",
component: HomeComponent

},
{
  path: "produto",
  component: ProdutoComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
