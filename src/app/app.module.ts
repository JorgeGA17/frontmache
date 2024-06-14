import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { FormsModule } from '@angular/forms';
import { ActualizarDocenteComponent } from './actualizar-docente/actualizar-docente.component';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ListaEstudiantesComponent } from './Estudiante/lista-estudiantes/lista-estudiantes.component';
import { RegistrarEstudianteComponent } from './Estudiante/registrar-estudiante/registrar-estudiante.component';
import { ActualizarEstudianteComponent } from './Estudiante/actualizar-estudiante/actualizar-estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDocentesComponent,
    RegistrarDocenteComponent,
    ActualizarDocenteComponent,
    HomeComponent,
    ListaEstudiantesComponent,
    RegistrarEstudianteComponent,
    ActualizarEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
