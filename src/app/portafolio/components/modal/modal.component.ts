import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginUsuario } from '../../interfaces/loginUsuario';
import { AuthService } from '../../services/authServices/auth.service';
import { TokenService } from '../../services/authServices/token.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  
})
export class ModalComponent implements OnInit {


  constructor(
              private tokenService: TokenService,
              private authService: AuthService,
              private fb: FormBuilder
    ) {}

    miFormulario: FormGroup = this.fb.group({
      usuario: [, [Validators.required, Validators.minLength(3)]],   
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
      
    });

    isLogged = false;
    isLoginFail = false;
    submitted = false;
    loginUsuario!: LoginUsuario;
    roles: string[] = [];
    errMsj!: string;

    ngOnInit() {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
    }

    onLogin(): void {
      const nombreUsuario = this.miFormulario.value.usuario;
      const password = this.miFormulario.value.password;
      this.loginUsuario = new LoginUsuario(nombreUsuario, password);
      this.submitted = false;
     // console.log(this.loginUsuario);
      this.authService.login(this.loginUsuario).subscribe(data => {
          this.isLogged = true;
          this.isLoginFail = false;
          this.submitted = true;

          this.tokenService.setToken(data.token);
          this.tokenService.setUserName(data.nombreUsuario);
          this.tokenService.setAuthorities(data.authorities);
          this.roles = data.authorities;
          console.log("te logueaste");
          location.reload();
      }, 
        err => {
        this.isLoginFail = true;
        this.submitted = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj)
        });
    }

}
