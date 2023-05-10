import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../services/PortafolioServices/educacion.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-educacionform',
  templateUrl: './educacionform.component.html',
  styles: [
  ]
})
export class EducacionFormComponent {
  miFormulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private educacionService: EducacionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      institucion: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  guardar() {
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      this.educacionService.create(this.miFormulario.value)
          .subscribe(
            (result)=> {this.miFormulario.reset({});
                        console.log('Formulario Cargado'); 
                        this.router.navigate(['/educacion']);
                        }
          )}
    else {
      console.log('Formulario inválido');
    }
  
}
}