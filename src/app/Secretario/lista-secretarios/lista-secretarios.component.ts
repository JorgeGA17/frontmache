import { Component,OnInit } from '@angular/core';
import { Secretario } from '../../models/secretario';
import { SecretariosService } from '../../services/secretario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-secretarios',
  templateUrl: './lista-secretarios.component.html',
  styleUrl: './lista-secretarios.component.css'
})
export class ListaSecretariosComponent implements OnInit {

  secretarios: Secretario[];

  constructor(private secretarioServicie:SecretariosService, private router:Router){}

  ngOnInit(): void {
    this.getSecretarios();

    }

    private getSecretarios(){
      this.secretarioServicie.getAllSecretarios().subscribe(dato =>{
        this.secretarios=dato;
      });
    }

    updateSecretario(id:number){
      this.router.navigate(['actualizar-secretario',id]);
    }

    deleteSecretario(id:number){
      this.secretarioServicie.deleteSecretario(id).subscribe(dato=>{
        console.log(dato);
        this.getSecretarios()
      })

    }

}
