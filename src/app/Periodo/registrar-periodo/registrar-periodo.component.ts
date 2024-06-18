import { Component, OnInit } from '@angular/core';
import { Periodo } from '../../models/periodo';
import { PeriodosService } from '../../services/periodo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-periodo',
  templateUrl: './registrar-periodo.component.html',
  styleUrl: './registrar-periodo.component.css'
})
export class RegistrarPeriodoComponent implements OnInit {

  periodo:Periodo = new Periodo();

  constructor(private periodoServicio:PeriodosService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarPeriodo(){
    this.periodoServicio.createPeriodo(this.periodo).subscribe(dato => {
      console.log(dato);
      this.irListaPeriodos();
    }, error => console.log(error));
  
  }

  irListaPeriodos(){
    this.router.navigate(['/lista-periodos'])
  }

  onSubmit(){
    this.guardarPeriodo();
  }

}
