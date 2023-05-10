import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../../interfaces/proyecto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url = environment.url + '/educacion';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.url);
  }

  getEducacionPorId(id: number | undefined): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.url}/${id}`);
  }

  create(data: Object): Observable<Educacion> {
    return this.http.post<Educacion>(this.url, data);
  }

  update(educacion:Educacion): Observable<Educacion> {
    return this.http.put<Educacion>( this.url + "/" + educacion.id , educacion);
  }

  delete(id: number | undefined): Observable<Educacion> {
    return this.http.delete<Educacion>(`${this.url}/${id}`);
  }
}
