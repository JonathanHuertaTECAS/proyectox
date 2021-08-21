import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/shared/forms/forms.component';
import { LoginComponent } from './components/base/login/login.component';
import { RegisterComponent } from './components/base/register/register.component';
import { ProfileComponent } from './components/base/profile/profile.component';
import { SimulatorComponent } from './components/base/simulator/simulator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './modules/matmodule/matmodules';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
