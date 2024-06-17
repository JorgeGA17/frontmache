import { Component, OnInit } from '@angular/core';
import { Programa } from '../../models/programa';
import { ProgramasService } from '../../services/programa.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-actualizar-programa',
  templateUrl: './actualizar-programa.component.html',
  styleUrl: './actualizar-programa.component.css'
})

export class ActualizarProgramaComponent implements OnInit {
  
  id:number;
  programa:Programa = new Programa();
  constructor(private programaService:ProgramasService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.programaService.getProgramaById(this.id).subscribe(dato =>{
      this.programa = dato;
    },error => console.log(error));
  }

  irListaProgramas(){
    this.router.navigate(['/lista-programas']);
    swal('Programa actualizado',`El programa ${this.programa.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.programaService.updatePrograma(this.programa).subscribe(dato => {
      this.irListaProgramas();
    },error => console.log(error));
  }

}
