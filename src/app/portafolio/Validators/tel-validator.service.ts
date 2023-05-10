import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelefonoValidatorService {
  telefonoPattern: RegExp = /^\+?\d{1,3}[-.\s]?\d{1,14}$/;
  
  constructor() { }

  
}
