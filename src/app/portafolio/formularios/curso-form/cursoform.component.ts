import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../services/PortafolioServices/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursoform',
  templateUrl: './cursoform.component.html',
  styles: [
  ]
})
export class CursoFormComponent {
  miFormulario!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private cursoService: CursosService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      institucion: ['', Validators.required],
      nombre_curso: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  guardar() {
      if (this.miFormulario.valid) {
        console.log(this.miFormulario.value);
        this.cursoService.create(this.miFormulario.value)
            .subscribe(
              (result)=> {this.miFormulario.reset({});
                          console.log('Formulario Cargado'); 
                          this.router.navigate(['/cursos']);
                          }
            )}
      else {
        console.log('Formulario inválido');
      }
    
}

}
