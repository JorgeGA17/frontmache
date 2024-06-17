import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  [x: string]: any;
  private urlEndPoint: string ='http://localhost:8080/api/v1/Estudiantes'


  constructor(private http:HttpClient) { }

  getAllEstudiantes():Observable<Estudiante[]>{
    return this.http.get<any[]>(this.urlEndPoint);
  }

  getEstudianteById(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(this.urlEndPoint+'/'+id);
  }

  createEstudiante(estudiante:Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(this.urlEndPoint,estudiante);
  }
  
  updateEstudiante(estudiante:Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(this.urlEndPoint+'/'+estudiante.id,estudiante);
  }

  deleteEstudiante(id:number):Observable<any>{
    return this.http.delete(this.urlEndPoint+'/'+id);
  }
    
}
