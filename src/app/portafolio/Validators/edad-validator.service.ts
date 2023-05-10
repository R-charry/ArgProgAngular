import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EdadValidatorService {

  constructor() { }

  edadValidator(control: AbstractControl): ValidationErrors | null {
    const edad = control.value;
    const edadMinima = 18;

    if (edad && (isNaN(edad) || edad < edadMinima)) {
      return { 'edadInvalida': true };
    }

    return null;
  }
}
