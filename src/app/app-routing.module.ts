import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { ActualizarDocenteComponent } from './actualizar-docente/actualizar-docente.component';
import { HomeComponent } from './home/home.component';
import { ListaEstudiantesComponent } from './Estudiante/lista-estudiantes/lista-estudiantes.component';
import { RegistrarEstudianteComponent } from './Estudiante/registrar-estudiante/registrar-estudiante.component';
import { ActualizarEstudianteComponent } from './Estudiante/actualizar-estudiante/actualizar-estudiante.component';
import { ListaSecretariosComponent } from './Secretario/lista-secretarios/lista-secretarios.component';
import { RegistrarSecretarioComponent } from './Secretario/registrar-secretario/registrar-secretario.component';
import { ActualizarSecretarioComponent } from './Secretario/actualizar-secretario/actualizar-secretario.component';
import { ListaUnidadesComponent } from './Unidad/lista-unidades/lista-unidades.component';
import { RegistrarUnidadComponent } from './Unidad/registrar-unidad/registrar-unidad.component';
import { ActualizarUnidadComponent } from './Unidad/actualizar-unidad/actualizar-unidad.component';
import { ListaProgramasComponent } from './Programa/lista-programas/lista-programas.component';
import { ActualizarProgramaComponent } from './Programa/actualizar-programa/actualizar-programa.component';
import { RegistrarProgramaComponent } from './Programa/registrar-programa/registrar-programa.component';
import { ActualizarPeriodoComponent } from './periodo/actualizar-periodo/actualizar-periodo.component';
import { RegistrarPeriodoComponent } from './periodo/registrar-periodo/registrar-periodo.component';
import { ListaPeriodosComponent } from './periodo/lista-periodos/lista-periodos.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  {path:'lista-docentes', component:ListaDocentesComponent},
  {path:'registrar-docente', component:RegistrarDocenteComponent},
  {path:'actualizar-docente/:id', component:ActualizarDocenteComponent},
  {path:'lista-estudiantes', component:ListaEstudiantesComponent},
  {path:'registrar-estudiante', component:RegistrarEstudianteComponent},
  {path:'actualizar-estudiante/:id', component:ActualizarEstudianteComponent},
  {path:'lista-secretarios', component:ListaSecretariosComponent},
  {path:'registrar-secretario', component:RegistrarSecretarioComponent},
  {path:'actualizar-secretario/:id', component:ActualizarSecretarioComponent},
  {path:'lista-unidades', component:ListaUnidadesComponent},
  {path:'registrar-unidad', component:RegistrarUnidadComponent},
  {path:'actualizar-unidad/:id', component:ActualizarUnidadComponent},
  {path:'lista-programas', component:ListaProgramasComponent},
  {path:'registrar-programa', component:RegistrarProgramaComponent},
  {path:'actualizar-programa/:id', component:ActualizarProgramaComponent},
  {path:'lista-periodos', component:ListaPeriodosComponent},
  {path:'registrar-periodo', component:RegistrarPeriodoComponent},
  {path:'actualizar-periodo/:id', component:ActualizarPeriodoComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
