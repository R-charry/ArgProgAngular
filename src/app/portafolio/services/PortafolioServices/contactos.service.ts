import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contactos } from '../../interfaces/proyecto.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private url =  'https://rcharry-portfolio.onrender.com/contactos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contactos[]> {
    return this.http.get<Contactos[]>(this.url);
  }

  getOne(id: number): Observable<Contactos> {
    return this.http.get<Contactos>(`${this.url}/${id}`);
  }

  create(data: Object): Observable<Contactos> {
    return this.http.post<Contactos>(this.url, data);
  }

  update(id: number, data: Object): Observable<Contactos> {
    return this.http.put<Contactos>(`${this.url}/${id}`, data);
  }

  delete(id: number): Observable<Contactos> {
    return this.http.delete<Contactos>(`${this.url}/${id}`);
  }
}
