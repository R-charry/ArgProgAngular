import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../../interfaces/proyecto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url = environment.url + '/experiencia';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url);
  }
  getExperienciaPorId(id: number | undefined): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.url}/${id}`);
  }

  create(data: Object): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.url, data);
  }

  update(experiencia:Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>( this.url + "/" + experiencia.id , experiencia);
  }

  delete(id: number | undefined): Observable<Experiencia> {
    return this.http.delete<Experiencia>(`${this.url}/${id}`);
  }
}
