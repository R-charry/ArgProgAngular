import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from '../../services/PortafolioServices/experiencia.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experienciaform',
  templateUrl: './experienciaform.component.html',
  styles: [
  ]
})
export class ExperienciaFormComponent {
  miFormulario!: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    private experienciaService: ExperienciaService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      nombre_empresa: ['', Validators.required],
      referencia: ['', Validators.required],
      imagen: ['', Validators.required],
      puesto: ['', Validators.required]
    });
  }

  guardar() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      this.experienciaService.create(this.miFormulario.value)
          .subscribe(
            (result)=> {this.miFormulario.reset({});
                        console.log('Formulario Cargado'); 
                        this.router.navigate(['/experiencia']);
                        }
          )}
    else {
      console.log('Formulario inválido');
    }
  
}
}