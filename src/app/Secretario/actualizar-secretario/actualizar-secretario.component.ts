import { Component, OnInit } from '@angular/core';
import { Secretario } from '../../models/secretario';
import { SecretariosService } from '../../services/secretario.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-actualizar-secretario',
  templateUrl: './actualizar-secretario.component.html',
  styleUrl: './actualizar-secretario.component.css'
})
export class ActualizarSecretarioComponent implements OnInit{

  id:number;
  secretario:Secretario = new Secretario();
  constructor(private secretarioService:SecretariosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.secretarioService.getSecretarioById(this.id).subscribe(dato =>{
      this.secretario = dato;
    },error => console.log(error));
  }

  irListaSecretarios(){
    this.router.navigate(['/lista-secretarios']);
    swal('Secretario actualizado',`El secretario ${this.secretario.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.secretarioService.updateSecretario(this.secretario).subscribe(dato => {
      this.irListaSecretarios();
    },error => console.log(error));
  }

}
