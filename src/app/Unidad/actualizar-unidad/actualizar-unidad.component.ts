import { Component, OnInit } from '@angular/core';
import { Unidad } from '../../models/unidad';
import { UnidadesService } from '../../services/unidad.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';



@Component({
  selector: 'app-actualizar-unidad',
  templateUrl: './actualizar-unidad.component.html',
  styleUrl: './actualizar-unidad.component.css'
})
export class ActualizarUnidadComponent implements OnInit {

  id:number;
  unidad:Unidad = new Unidad();
  constructor(private unidadService:UnidadesService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.unidadService.getUnidadById(this.id).subscribe(dato =>{
      this.unidad = dato;
    },error => console.log(error));
  }

  irListaUnidades(){
    this.router.navigate(['/lista-unidades']);
    swal('Unidad actualizada',`La unidad ${this.unidad.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.unidadService.updateUnidad(this.unidad).subscribe(dato => {
      this.irListaUnidades();
    },error => console.log(error));
  }

}
