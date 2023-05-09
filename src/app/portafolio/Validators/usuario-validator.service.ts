import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl):  Observable<ValidationErrors | null>{

  const nombreUsuario = control.value

    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${ nombreUsuario }`)
        .pipe(
          delay(3000),
          map( resp => {
            return (resp.length === 0)
            ? null
            : {usuarioTomado: true}
          }

          ))
  }
  
}

