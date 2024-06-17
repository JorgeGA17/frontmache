import { Component, OnInit } from '@angular/core';
import { Secretario } from '../../models/secretario';
import { SecretariosService } from '../../services/secretario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-secretario',
  templateUrl: './registrar-secretario.component.html',
  styleUrl: './registrar-secretario.component.css'
})
export class RegistrarSecretarioComponent implements OnInit {

  secretario:Secretario = new Secretario();

  constructor(private secretarioServicio:SecretariosService, private router:Router){}

  ngOnInit(): void {
    
  }

  guardarSecretario(){
    this.secretarioServicio.createSecretario(this.secretario).subscribe(dato => {
      console.log(dato);
      this.irListaSecretarios();
    }, error => console.log(error));
  
  }

  irListaSecretarios(){
    this.router.navigate(['/lista-secretarios'])
  }

  onSubmit(){
    this.guardarSecretario();
  }



}
