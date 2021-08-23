import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { modelPerfil, perfilFormFields } from 'src/app/shared/Items/Models/modelPerfil';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  constructor( ) { }
  modelPerfil!: modelPerfil;
  form = new FormGroup({});
  model =  this.modelPerfil;
  formfields=   perfilFormFields.GetFields();
  fields!: FormlyFieldConfig[] ;

  ngOnInit(): void {
    this.fields = this.formfields;

  }
  actualizar(model:modelPerfil){
    console.log(model);
  }
}