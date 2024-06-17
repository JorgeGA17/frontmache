import { Component,OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudiantesService } from '../../services/estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrl: './lista-estudiantes.component.css'
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[];

  constructor(private estudianteServicie:EstudiantesService, private router:Router){}

  ngOnInit(): void {
    this.getEstudiantes();

    }

    private getEstudiantes(){
      this.estudianteServicie.getAllEstudiantes().subscribe(dato =>{
        this.estudiantes=dato;
      });
    }

    updateEstudiante(id:number){
      this.router.navigate(['actualizar-estudiante',id]);
    }

    deleteEstudiante(id:number){
      this.estudianteServicie.deleteEstudiante(id).subscribe(dato=>{
        console.log(dato);
        this.getEstudiantes()
      })

    }


}