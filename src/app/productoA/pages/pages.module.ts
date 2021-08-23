import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    InicioComponent,
    PerfilComponent
  ],
  exports:[
    InicioComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
