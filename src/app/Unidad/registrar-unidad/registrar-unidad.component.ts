import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../models/unidad';
import { UnidadesService } from '../../services/unidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-unidad',
  templateUrl: './registrar-unidad.component.html',
  styleUrl: './registrar-unidad.component.css'
})
export class RegistrarUnidadComponent implements OnInit {

  unidad:Unidad = new Unidad();

  constructor(private unidadServicio:UnidadesService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarUnidad(){
    this.unidadServicio.createUnidad(this.unidad).subscribe(dato => {
      console.log(dato);
      this.irListaUnidades();
    }, error => console.log(error));
  
  }

  irListaUnidades(){
    this.router.navigate(['/lista-unidades'])
  }

  onSubmit(){
    this.guardarUnidad();
  }

}
