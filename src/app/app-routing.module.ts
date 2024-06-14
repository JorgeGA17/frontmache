import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { ActualizarDocenteComponent } from './actualizar-docente/actualizar-docente.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  
  {path:'docentes', component:ListaDocentesComponent},
  {path:'registrar', component:RegistrarDocenteComponent},
  {path:'actualizar/:id', component:ActualizarDocenteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
