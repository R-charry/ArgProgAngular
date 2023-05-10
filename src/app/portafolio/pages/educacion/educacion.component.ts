import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../../interfaces/proyecto.interface';
import { TokenService } from '../../services/authServices/token.service';
import { EducacionService } from '../../services/PortafolioServices/educacion.service';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styles: [
  ]
})
export class EducacionComponent {

  educacion: Educacion[] = [];
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(private educacionService: EducacionService,
    private activatedRoute:ActivatedRoute,
              private router:Router,
              private tokenService: TokenService){

  }

  ngOnInit() {
    this.educacionService.getAll().subscribe((res: Educacion[]) => {
      this.educacion = res;
      console.log(res)
    });
    this.activatedRoute.params.subscribe(params => {
    const id = params['id']; });

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
    if ( rol === 'ROLE_ADMIN'){
      this.isAdmin = true; 
    }});
  }


  borrar(id: number | undefined){
    if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
      this.educacionService.delete(id).subscribe(() => {
        const indice = this.educacion.findIndex((r) => r.id === id);
        this.educacion.splice(indice, 1);
      });
    }
  }

  agregar(){

    this.router.navigate(['/educacionform']);

    
    
  }

  // editar(educacion: Educacion): void {
  //   if (educacion.id) {
  //     localStorage.setItem("id", educacion.id.toString());
  //     this.router.navigate(["cursoedit"]);
  //   } else {
  //     console.log('El objeto curso no tiene definida la propiedad id');
  //   }
  // }

  editar(id : Number | undefined): void {
    if (id) {
      localStorage.setItem("id", id.toString());
      this.router.navigate(["educacionedit"]);
    } else {
      console.log('El objeto educacion no tiene definida la propiedad id');
    }
  }
}

