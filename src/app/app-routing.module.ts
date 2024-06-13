import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDocentesComponent } from './lista-docentes/lista-docentes.component';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { ActualizarDocenteComponent } from './actualizar-docente/actualizar-docente.component';

const routes: Routes = [
  {path:'docentes', component:ListaDocentesComponent},
  {path:'',redirectTo:'docentes',pathMatch:'full'},
  {path:'registrar', component:RegistrarDocenteComponent},
  {path:'actualizar/:id', component:ActualizarDocenteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
