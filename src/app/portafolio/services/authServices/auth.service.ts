import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../../interfaces/nuevoUsuario.models';
import { LoginUsuario } from '../../interfaces/loginUsuario';
import { JwtDto } from '../../interfaces/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://rcharry-portfolio.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.url + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.url + 'login', loginUsuario);
  }
}
