import { TokenStorageService } from './../services/token-storage.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
	roles: string[] = [];
	itemForm: FormGroup;

    constructor(private fb: FormBuilder, private tokenStorage: TokenStorageService, private authService: AuthService, private router : Router) {}

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
		}  
		this.iniciarFormulario();
		 
	}
	
	iniciarFormulario() {
		this.itemForm = this.fb.group({
		  username: [''],
		  password: ['']
		});
	  }

    submit(): void {
		this.authService.login(this.itemForm.value).subscribe(
			(data) => {
				debugger;
				this.tokenStorage.saveToken(data.token);
				// this.tokenStorage.saveUser(data);

				this.isLoginFailed = false;
				this.isLoggedIn = true;

				this.router.navigate(['/persona/crearPersona']);
				// this.roles = this.tokenStorage.getUser().roles;
				// this.reloadPage();
			},
			(err) => {
				this.errorMessage = err.error.message;
				this.isLoginFailed = true;
			}
		);
	}

	reloadPage(): void {
		window.location.reload();
	}
}