import { Component, OnInit } from '@angular/core';
import { Periodo } from '../../models/periodo';
import { PeriodosService } from '../../services/periodo.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-actualizar-periodo',
  templateUrl: './actualizar-periodo.component.html',
  styleUrl: './actualizar-periodo.component.css'
})
export class ActualizarPeriodoComponent implements OnInit {

  id:number;
  periodo:Periodo = new Periodo();
  constructor(private periodoService:PeriodosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.periodoService.getPeriodoById(this.id).subscribe(dato =>{
      this.periodo = dato;
    },error => console.log(error));
  }

  irListaPeriodos(){
    this.router.navigate(['/lista-periodos']);
    swal('Periodo actualizado',`El periodo ${this.periodo.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.periodoService.updatePeriodo(this.periodo).subscribe(dato => {
      this.irListaPeriodos();
    },error => console.log(error));
  }

}
