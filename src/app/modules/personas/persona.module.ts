import { AuthService } from './../auth/services/auth.service';
import { PersonaRoutingModule } from './persona-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { TokenStorageService } from './../auth/services/token-storage.service';

@NgModule({
    declarations: [  ],
    imports: [ ReactiveFormsModule, HttpClientModule, CommonModule, PersonaRoutingModule,
    MatFormFieldModule, MatInputModule ],
    providers: [ AuthService, TokenStorageService ],
  })
  export class PersonaModule { }