import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programa } from '../models/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/api/v1/Programas'


  constructor(private http:HttpClient) { }

  getAllProgramas():Observable<Programa[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getProgramaById(id:number):Observable<Programa>{
    return this.http.get<Programa>(this.urlEndPoint+'/'+id);
  }

  createPrograma(programa:Programa): Observable<Programa>{
    return this.http.post<Programa>(this.urlEndPoint,programa);
  }
  
  updatePrograma(programa:Programa): Observable<Programa>{
    return this.http.put<Programa>(this.urlEndPoint+'/'+programa.id,programa);
  }

  deletePrograma(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
    
}
