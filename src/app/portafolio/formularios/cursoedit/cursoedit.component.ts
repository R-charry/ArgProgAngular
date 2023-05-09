import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../services/PortafolioServices/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cursos } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-cursoedit',
  templateUrl: './cursoedit.component.html',
  styles: [
  ]
})
export class CursoeditComponent {
    miFormulario!: FormGroup;
    cursos: Cursos[] = [];
    idCurso: number | undefined;

    constructor(private formBuilder: FormBuilder,
                private cursosService: CursosService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.miFormulario = this.formBuilder.group({
        id : ['', Validators.required],
        institucion: ['', Validators.required],
        nombre_curso: ['', Validators.required],
        imagen: ['', Validators.required]

      });

      this.editar();
    }
  
  
    
    editar(){
      let id = localStorage.getItem("id");
    if (id) {
      this.cursosService.getCursoPorId(+id)
        .subscribe((data: Cursos[]) =>{
          this.cursos = data;
          this.miFormulario.patchValue(this.cursos);
        });
    } else {
      alert('El objeto curso no tiene definida la propiedad id');
    }
  }

    enviarEditar(){
      this.cursosService.update (this.miFormulario.value)
              .subscribe(
                (result)=> {this.miFormulario.reset({});
                            console.log('Formulario Cargado'); 
                            this.router.navigate(['/cursos']);
                            }
              )}
    

  }


    
    
  
  
  

