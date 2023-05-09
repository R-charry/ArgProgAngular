import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../Validators/email-validator.service';
import { ValidatorService } from '../../Validators/validator.service';
import { UsuarioValidatorService } from '../../Validators/usuario-validator.service';
import { NuevoUsuario } from '../../interfaces/nuevoUsuario.models';
import { TokenService } from '../../services/authServices/token.service';
import { AuthService } from '../../services/authServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html'
})
export class Modal1Component {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    nombreUsuario: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      ],[this.usuarioValidator]
    ],

    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
    password2: ['', [Validators.required ]],
  
  },{
    validators: [this.validatorService.camposIguales('password', 'password2') ]
  });

  nuevoUsuario!: NuevoUsuario;
  errMsj!: string;
  isLogged = false;
  registerFail = false;
  registerOk = false;

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService,
    private usuarioValidator: UsuarioValidatorService, // Agrega el servicio aquí
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}
 


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado';
    } else {
      return '';
    }
  }

  get passwordErrorMsg(): string {
    const errors = this.miFormulario.get('password')?.errors;
    if (errors?.['required']) {
      return 'Contraseña es obligatoria';
    } else if (errors?.['minlength']) {
      return 'Contraseña debe tener al menos 8 caracteres';
    } else if (errors?.['pattern']) {
      return 'Contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número';
    } else {
      return '';
    }
  }

  get usuarioErrorMsg(): string {
    const nombreUsuarioControl = this.miFormulario.get('nombreUsuario');
    const errors = nombreUsuarioControl?.errors;
    
    if (nombreUsuarioControl?.hasError('required')) {
      return 'El usuario es obligatorio';
    } else if (nombreUsuarioControl?.hasError('minlength')) {
      return 'El usuario debe tener al menos 8 caracteres';
    } else if (errors?.['pattern']) {
      return 'El usuario solo puede contener letras minúsculas y números';
    } else if (errors?.['usuarioTomado']) {
      return 'El usuario ya fue registrado';
    } else {
      return '';
    }
  }

  onRegister(): void {

    
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);

   
  


    const nombre = this.miFormulario.value.nombre;
    const nombreUsuario = this.miFormulario.value.nombreUsuario;
    const email = this.miFormulario.value.email;
    const password = this.miFormulario.value.password;
    // const password2 = this.miFormulario.value.password2;

    this.nuevoUsuario = new NuevoUsuario(nombre, nombreUsuario, email, password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.registerFail = false;
        this.registerOk = true;
        console.log("te logueaste");
        this.miFormulario.reset();
        setTimeout(() => {
          location.reload();    
        }, 3000);
        
      },
      err => {
        this.registerFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      }
    );



  }


  



campoNoValido(campo:string){
  return this.miFormulario.get(campo)?.invalid
     && this.miFormulario.get(campo)?.touched
 }

 
}