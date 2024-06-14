import { Component,OnInit } from '@angular/core';
import { Docente } from '../models/docente';
import { DocentesService } from '../services/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrl: './lista-docentes.component.css'
})
export class ListaDocentesComponent implements OnInit {

  docentes: Docente[];

  constructor(private docenteServicie:DocentesService, private router:Router){}

  ngOnInit(): void {
    this.getDocentes();

    }

    private getDocentes(){
      this.docenteServicie.getAllDocentes().subscribe(dato =>{
        this.docentes=dato;
      });
    }

    updateDocente(id:number){
      this.router.navigate(['actualizar',id]);
    }

    deleteDocente(id:number){
      this.docenteServicie.deleteDocente(id).subscribe(dato=>{
        console.log(dato);
        this.getDocentes()
      })

    }


}