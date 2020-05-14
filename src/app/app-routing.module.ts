import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import './views/home/home.component';
import './views/produto/produto.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ProdutoCriadoComponent } from './components/produto/produto-criado/produto-criado.component';

const routes: Routes = [{
  path : "",
component: HomeComponent

},
{
  path: "produto",
  component: ProdutoComponent

},
{
  path: "produto/criado",
  component: ProdutoCriadoComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
