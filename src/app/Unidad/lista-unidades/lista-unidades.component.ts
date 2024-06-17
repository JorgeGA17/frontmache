import { Component,OnInit } from '@angular/core';
import { Unidad } from '../../models/unidad';
import { UnidadesService } from '../../services/unidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-unidades',
  templateUrl: './lista-unidades.component.html',
  styleUrl: './lista-unidades.component.css'
})
export class ListaUnidadesComponent implements OnInit {
  unidades: Unidad[];

  constructor(private unidadServicie:UnidadesService, private router:Router){}

  ngOnInit(): void {
    this.getUnidades();

    }

    private getUnidades(){
      this.unidadServicie.getAllUnidades().subscribe(dato =>{
        this.unidades=dato;
      });
    }

    updateUnidad(id:number){
      this.router.navigate(['actualizar-unidad',id]);
    }

    deleteUnidad(id:number){
      this.unidadServicie.deleteUnidad(id).subscribe(dato=>{
        console.log(dato);
        this.getUnidades()
      })

    }

}
