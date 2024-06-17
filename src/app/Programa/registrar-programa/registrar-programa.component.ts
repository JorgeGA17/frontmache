import { Component, OnInit } from '@angular/core';
import { Programa } from '../../models/programa';
import { ProgramasService } from '../../services/programa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-programa',
  templateUrl: './registrar-programa.component.html',
  styleUrl: './registrar-programa.component.css'
})
export class RegistrarProgramaComponent implements OnInit {

  programa:Programa = new Programa();

  constructor(private programaServicio:ProgramasService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarPrograma(){
    this.programaServicio.createPrograma(this.programa).subscribe(dato => {
      console.log(dato);
      this.irListaProgramas();
    }, error => console.log(error));
  
  }

  irListaProgramas(){
    this.router.navigate(['/lista-programas'])
  }

  onSubmit(){
    this.guardarPrograma();
  }

}
