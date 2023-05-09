import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Educacion } from '../../interfaces/proyecto.interface';
import { EducacionService } from '../../services/PortafolioServices/educacion.service';

@Component({
  selector: 'app-educacionedit',
  templateUrl: './educacionedit.component.html'
})

export class EducacioneditComponent {


    miFormulario!: FormGroup;
    educacion: Educacion[] = [];
    idCurso: number | undefined;

    constructor(private formBuilder: FormBuilder,
                private educacionService: EducacionService,
                private router: Router,
                private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      this.miFormulario = this.formBuilder.group({
        id : ['', Validators.required],
        institucion: ['', Validators.required],
        descripcion: ['', Validators.required],
        imagen: ['', Validators.required]
      
      });

      this.editar();
    }
  
  
    
    editar(){
      let id = localStorage.getItem("id");
    if (id) {
      this.educacionService.getEducacionPorId(+id)
        .subscribe((data: Educacion[]) =>{
          this.educacion = data;
          this.miFormulario.patchValue(this.educacion);
        });
    } else {
      alert('El objeto curso no tiene definida la propiedad id');
    }
  }

    enviarEditar(){
      this.educacionService.update (this.miFormulario.value)
              .subscribe(
                (result)=> {this.miFormulario.reset({});
                            console.log('Formulario Cargado'); 
                            this.router.navigate(['/educacion']);
                            }
              )}
    

  }


    
    
  
  
  

