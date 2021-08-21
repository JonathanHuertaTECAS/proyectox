import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {  modelPerfil, perfilFormFields } from '../Items/Models/modelPerfil';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( ) { }
  modelPerfil!: modelPerfil;
  form = new FormGroup({});
  model =  this.modelPerfil;
  formfields=   perfilFormFields.GetFields();
  fields!: FormlyFieldConfig[] ;

  ngOnInit(): void {
   // this.setForm();
    this.fields = this.formfields;

  }
  actualizar(model:modelPerfil){
    console.log(model);
  }
  
}
