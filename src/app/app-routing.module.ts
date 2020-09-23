import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { PersonaFormuComponent } from './persona-formu/persona-formu.component';


const routes: Routes = [
  { path: 'app-persona-formu', component: PersonaFormuComponent },
  { path: 'app-crear-curso', component: CrearCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
