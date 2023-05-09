import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SobreMiComponent } from './pages/sobremi/sobre-mi.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { BannerComponent } from './components/banner/banner.component'; // Actualización aquí
import { NavbarComponent } from './components/navbar/navbar.component'; // Actualización aquí
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ModalComponent } from './components/modal/modal.component';
import { Modal1Component } from './components/modal1/modal1.component';

import { CursoFormComponent } from './formularios/curso-form/cursoform.component';
import { EducacionFormComponent } from './formularios/educacion-form/educacionform.component';
import { ExperienciaFormComponent } from './formularios/experiencia-form/experienciaform.component';
import { CursoeditComponent } from './formularios/cursoedit/cursoedit.component';
import { EducacioneditComponent } from './formularios/educacionedit/educacionedit.component';
import { ExperienciaeditComponent } from './formularios/experienciaedit/experienciaedit.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ExperienciaComponent,
    CursosComponent,
    SobreMiComponent,
    EducacionComponent,
    BannerComponent,
    ContactoComponent,
    ToggleComponent,
    ModalComponent,
    Modal1Component,
    ExperienciaFormComponent,
    CursoFormComponent,
    EducacionFormComponent,
    CursoeditComponent,
    EducacioneditComponent,
    ExperienciaeditComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ 
    NavbarComponent,
    ExperienciaComponent,
    CursosComponent,
    SobreMiComponent,
    EducacionComponent,
    BannerComponent,
    ReactiveFormsModule,
    FormsModule,
    ContactoComponent,
    

  ]
})

export class PortafolioModule {}