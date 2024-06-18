import { Component,OnInit } from '@angular/core';
import { Periodo } from '../../models/periodo';
import { PeriodosService } from '../../services/periodo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-periodos',
  templateUrl: './lista-periodos.component.html',
  styleUrl: './lista-periodos.component.css'
})
export class ListaPeriodosComponent implements OnInit {

  periodos: Periodo[];

  constructor(private periodoServicie:PeriodosService, private router:Router){}

  ngOnInit(): void {
    this.getPeriodos();

    }

    private getPeriodos(){
      this.periodoServicie.getAllPeriodos().subscribe(dato =>{
        this.periodos=dato;
      });
    }

    updatePeriodo(id:number){
      this.router.navigate(['actualizar-periodo',id]);
    }

    deletePeriodo(id:number){
      this.periodoServicie.deletePeriodo(id).subscribe(dato=>{
        console.log(dato);
        this.getPeriodos()
      })

    }

}
