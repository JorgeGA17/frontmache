import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Periodo } from '../models/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodosService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/api/v1/Periodos'


  constructor(private http:HttpClient) { }

  getAllPeriodos():Observable<Periodo[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getPeriodoById(id:number):Observable<Periodo>{
    return this.http.get<Periodo>(this.urlEndPoint+'/'+id);
  }

  createPeriodo(periodo:Periodo): Observable<Periodo>{
    return this.http.post<Periodo>(this.urlEndPoint,periodo);
  }
  
  updatePeriodo(periodo:Periodo): Observable<Periodo>{
    return this.http.put<Periodo>(this.urlEndPoint+'/'+periodo.id,periodo);
  }

  deletePeriodo(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
    
}
