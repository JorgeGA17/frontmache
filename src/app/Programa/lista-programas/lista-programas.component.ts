import { Component,OnInit } from '@angular/core';
import { Programa } from '../../models/programa';
import { ProgramasService } from '../../services/programa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-programas',
  templateUrl: './lista-programas.component.html',
  styleUrl: './lista-programas.component.css'
})
export class ListaProgramasComponent implements OnInit {

  programas: Programa[];

  constructor(private programaServicie:ProgramasService, private router:Router){}

  ngOnInit(): void {
    this.getProgramas();

    }

    private getProgramas(){
      this.programaServicie.getAllProgramas().subscribe(dato =>{
        this.programas=dato;
      });
    }

    updatePrograma(id:number){
      this.router.navigate(['actualizar-programa',id]);
    }

    deletePrograma(id:number){
      this.programaServicie.deletePrograma(id).subscribe(dato=>{
        console.log(dato);
        this.getProgramas()
      })

    }


}
