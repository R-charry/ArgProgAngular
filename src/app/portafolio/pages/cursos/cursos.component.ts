import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from '../../interfaces/proyecto.interface';
import { TokenService } from '../../services/authServices/token.service';
import { CursosService } from '../../services/PortafolioServices/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [
  ]
})


export class CursosComponent{

  cursos: Cursos[] = [];
  roles: string[] = [];
  isAdmin: boolean = false;
  

 
  constructor(private cursosService: CursosService,
            private activatedRoute:ActivatedRoute,
              private router:Router,
              private tokenService: TokenService){

  }

  ngOnInit() {
    this.cursosService.getAll().subscribe((res: Cursos[]) => {
      this.cursos = res;
      console.log(res);
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
      this.cursosService.delete(id).subscribe(() => {
        const indice = this.cursos.findIndex((r) => r.id === id);
        this.cursos.splice(indice, 1);
      });
    }
  }

  agregar(){

    this.router.navigate(['/cursoform']);


    
  }

  editar(id: number | undefined): void {
    if (id) {
      localStorage.setItem("id", id.toString());
      this.router.navigate(["cursoedit"]);
    } else {
      console.log('El objeto curso no tiene definida la propiedad id');
    }
  }
 

}
