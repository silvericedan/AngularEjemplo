import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { TokenStorageService } from './services/token-storage.service';


@NgModule({
    declarations: [ LoginComponent ],
    imports: [ ReactiveFormsModule, HttpClientModule, CommonModule, AppRoutingModule,
    MatFormFieldModule, MatInputModule ],
    providers: [ AuthService, TokenStorageService ],
  })
  export class AuthModule { }