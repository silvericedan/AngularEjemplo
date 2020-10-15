import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: 'login',
            component: LoginComponent,
            data: { returnUrl: window.location.pathname }
        }
    ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }