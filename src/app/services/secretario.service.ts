import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Secretario } from '../models/secretario';

@Injectable({
  providedIn: 'root'
})
export class SecretariosService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/api/v1/Secretarios'


  constructor(private http:HttpClient) { }

  getAllSecretarios():Observable<Secretario[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getSecretarioById(id:number):Observable<Secretario>{
    return this.http.get<Secretario>(this.urlEndPoint+'/'+id);
  }

  createSecretario(secretario:Secretario): Observable<Secretario>{
    return this.http.post<Secretario>(this.urlEndPoint,secretario);
  }
  
  updateSecretario(secretario:Secretario): Observable<Secretario>{
    return this.http.put<Secretario>(this.urlEndPoint+'/'+secretario.id,secretario);
  }

  deleteSecretario(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
    
}
