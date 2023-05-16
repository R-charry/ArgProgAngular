import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../../interfaces/proyecto.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = 'https://rcharry-portfolio.onrender.com/usuarios';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.url);
  }

  getOne(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.url}/${id}`);
  }

  create(data: Object): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.url, data);
  }

  update(id: number, data: Object): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<Usuarios> {
    return this.http.delete<Usuarios>(`${this.url}/${id}`);
  }
}
