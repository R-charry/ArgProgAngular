import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Experiencia } from '../../interfaces/proyecto.interface';
import { ExperienciaService } from '../../services/PortafolioServices/experiencia.service';

@Component({
  selector: 'app-experienciaedit',
  templateUrl: './experienciaedit.component.html'
})
export class ExperienciaeditComponent {
  miFormulario!: FormGroup;
  experiencia: Experiencia[] = [];
  idCurso: number | undefined;

  constructor(private formBuilder: FormBuilder,
    private experienciaService: ExperienciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.miFormulario = this.formBuilder.group({
        id : ['', Validators.required],
        nombre_empresa: ['', Validators.required],
        referencia: ['', Validators.required],
        imagen: ['', Validators.required],
        puesto: ['', Validators.required]

      });
      this.editar();
    
    }

    editar(){
      let id = localStorage.getItem("id");
    if (id) {
      this.experienciaService.getExperienciaPorId(+id)
        .subscribe((data: Experiencia[]) =>{
          this.experiencia = data;
          this.miFormulario.patchValue(this.experiencia);
        });
    } else {
      alert('El objeto experiencia no tiene definida la propiedad id');
    }
  }

  enviarEditar(){
    this.experienciaService.update (this.miFormulario.value)
            .subscribe(
              (result)=> {this.miFormulario.reset({});
                          console.log('Formulario Cargado'); 
                          this.router.navigate(['/experiencia']);
                          }
            )}

}
