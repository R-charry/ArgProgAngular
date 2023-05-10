import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ExperienciaComponent } from './portafolio/pages/experiencia/experiencia.component';
import { SobreMiComponent } from './portafolio/pages/sobremi/sobre-mi.component';
import { CursosComponent } from './portafolio/pages/cursos/cursos.component';
import { ContactoComponent } from './portafolio/pages/contacto/contacto.component';
import { EducacionComponent } from "./portafolio/pages/educacion/educacion.component";
import { CursoFormComponent } from './portafolio/formularios/curso-form/cursoform.component';
import { ExperienciaFormComponent } from './portafolio/formularios/experiencia-form/experienciaform.component';
import { EducacionFormComponent } from './portafolio/formularios/educacion-form/educacionform.component';
import { CursoeditComponent } from './portafolio/formularios/cursoedit/cursoedit.component';
import { EducacioneditComponent } from './portafolio/formularios/educacionedit/educacionedit.component';
import { ExperienciaeditComponent } from './portafolio/formularios/experienciaedit/experienciaedit.component';


const routers: Routes = [
    {
        path: '',
        component: SobreMiComponent,
        pathMatch: 'full',   
    },
    {
        path:'cursos',
        component: CursosComponent
    },
    {
        path:'experiencia',
        component:ExperienciaComponent
    },
    {
        path: 'contacto',
        component:ContactoComponent
    },
    {
        path: 'cursoform',
        component:CursoFormComponent
    },
   
    
    {
        path: 'experienciaform',
        component:ExperienciaFormComponent
    },
    {
        path: 'educacionform',
        component:EducacionFormComponent
    },
    {
        path: 'cursoedit',
        component:CursoeditComponent
    },
    {
        path: 'educacionedit',
        component:EducacioneditComponent
    },
    {
        path: 'experienciaedit',
        component:ExperienciaeditComponent
    },

    { path: 'educacion',
    component:EducacionComponent
    },
    {
        path: '**',
        redirectTo: '' 
    }
]



@NgModule({
    imports:[RouterModule.forRoot(routers)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}