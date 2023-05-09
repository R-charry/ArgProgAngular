import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from '../../services/PortafolioServices/experiencia.service';
import { Experiencia } from '../../interfaces/proyecto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../../services/authServices/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [
  ]
  
})
export class ExperienciaComponent implements OnInit{
  experiencia: Experiencia[] = [];


  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(private experienciaService: ExperienciaService,
    private activatedRoute:ActivatedRoute,
              private router:Router,
              private tokenService: TokenService){

  }

  ngOnInit() {
    this.experienciaService.getAll().subscribe((res: Experiencia[]) => {
      this.experiencia = res;
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
      this.experienciaService.delete(id).subscribe(() => {
        const indice = this.experiencia.findIndex((r) => r.id === id);
        this.experiencia.splice(indice, 1);
      });
    }
  }
  agregar(){

    this.router.navigate(['/experienciaform']);

    
    
  }

  editar(id: number | undefined): void {
    if (id) {
      localStorage.setItem("id", id.toString());
      this.router.navigate(["experienciaedit"]);
    } else {
      console.log('El objeto experiencia no tiene definida la propiedad id');
    }
  }





}
