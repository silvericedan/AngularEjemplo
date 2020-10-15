import { PersonaFormuComponent } from './../../modules/personas/persona-formu/persona-formu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
        {
            path: 'crearPersona',
            component: PersonaFormuComponent
        }
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PersonaRoutingModule { }