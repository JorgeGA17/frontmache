import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudiantesService } from '../../services/estudiante.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-actualizar-estudiante',
  templateUrl: './actualizar-estudiante.component.html',
  styleUrl: './actualizar-estudiante.component.css'
})
export class ActualizarEstudianteComponent implements OnInit{
 
  id:number;
  estudiante:Estudiante = new Estudiante();
  constructor(private estudianteService:EstudiantesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.estudianteService.getEstudianteById(this.id).subscribe(dato =>{
      this.estudiante = dato;
    },error => console.log(error));
  }

  irListaEstudiantes(){
    this.router.navigate(['/lista-estudiantes']);
    swal('Estudiante actualizado',`El estudiante ${this.estudiante.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.estudianteService.updateEstudiante(this.estudiante).subscribe(dato => {
      this.irListaEstudiantes();
    },error => console.log(error));
  }

}
