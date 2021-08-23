import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './productoA/auth/auth.routing';
import { NoFunconaComponent } from './productoA/no-funcona/no-funcona.component';
import { PagesRoutingModule } from './productoA/pages/pages.routing';
import { PerfilComponent } from './productoA/pages/perfil/perfil.component';
import { ProductosComponent } from './productoA/pages/productos/productos.component';


const routes: Routes = [

  {
    path:'',redirectTo:'/inicio', pathMatch: 'full'
  },
  {
    path: '**',component:NoFunconaComponent
  },
  {
    path: 'perfil', component:PerfilComponent
  },
  { 
    path: 'productos', component: ProductosComponent 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
