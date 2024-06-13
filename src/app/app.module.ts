import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { FormsModule } from '@angular/forms';
import { ActualizarDocenteComponent } from './actualizar-docente/actualizar-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDocentesComponent,
    RegistrarDocenteComponent,
    ActualizarDocenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
