import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudiantesService } from '../../services/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrl: './registrar-estudiante.component.css'
})
export class RegistrarEstudianteComponent implements OnInit{

  estudiante:Estudiante = new Estudiante();

  constructor(private estudianteServicio:EstudiantesService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarEstudiante(){
    this.estudianteServicio.createEstudiante(this.estudiante).subscribe(dato => {
      console.log(dato);
      this.irListaEstudiantes();
    }, error => console.log(error));
  
  }

  irListaEstudiantes(){
    this.router.navigate(['/lista-estudiantes'])
  }

  onSubmit(){
    this.guardarEstudiante();
  }

}
