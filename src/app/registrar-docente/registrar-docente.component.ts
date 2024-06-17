import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/docente';
import { DocentesService } from '../services/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrl: './registrar-docente.component.css'
})
export class RegistrarDocenteComponent implements OnInit{

  docente:Docente = new Docente();

  constructor(private docenteServicio:DocentesService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarDocente(){
    this.docenteServicio.createDocente(this.docente).subscribe(dato => {
      console.log(dato);
      this.irListaEmpleados();
    }, error => console.log(error));
  
  }

  irListaEmpleados(){
    this.router.navigate(['/lista-docentes'])
  }

  onSubmit(){
    this.guardarDocente();
  }

}
