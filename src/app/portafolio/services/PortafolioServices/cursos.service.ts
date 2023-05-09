import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cursos } from '../../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private url = 'http://localhost:8080/cursos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(this.url);
  }

  getCursoPorId(id: number | undefined): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.url}/${id}`);
  }

  create(data: Object): Observable<Cursos> {
    return this.http.post<Cursos>(this.url, data);
  }

  update(curso:Cursos): Observable<Cursos> {
    return this.http.put<Cursos>( this.url + "/" + curso.id , curso);
  }

  delete(id: number | undefined): Observable<Cursos> {
    return this.http.delete<Cursos>(`${this.url}/${id}`);
  }
}