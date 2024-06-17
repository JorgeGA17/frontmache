import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unidad } from '../models/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/api/v1/Unidades'


  constructor(private http:HttpClient) { }

  getAllUnidades():Observable<Unidad[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getUnidadById(id:number):Observable<Unidad>{
    return this.http.get<Unidad>(this.urlEndPoint+'/'+id);
  }

  createUnidad(unidad:Unidad): Observable<Unidad>{
    return this.http.post<Unidad>(this.urlEndPoint,unidad);
  }
  
  updateUnidad(unidad:Unidad): Observable<Unidad>{
    return this.http.put<Unidad>(this.urlEndPoint+'/'+unidad.id,unidad);
  }

  deleteUnidad(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
    
}
