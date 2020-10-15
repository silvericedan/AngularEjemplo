import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./modules/personas/persona.module').then((m) => m.PersonaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
