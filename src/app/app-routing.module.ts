import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { PersonaFormuComponent } from './componentes/persona-formu/persona-formu.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';


const routes: Routes = [
  { path: 'app-persona-formu', component: PersonaFormuComponent },
  { path: 'app-crear-curso', component: CrearCursoComponent },
  { path: 'app-crear-curso/:id', component: CrearCursoComponent },
  { path: 'app-listar-cursos', component: ListarCursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
