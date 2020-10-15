import { CursoService } from './servicios/curso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonaFormuComponent } from './modules/personas/persona-formu/persona-formu.component';
import { PersonaService } from './servicios/persona.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { MatCardModule } from '@angular/material/card';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaFormuComponent,
    CrearCursoComponent,
    ListarCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [PersonaService, CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
