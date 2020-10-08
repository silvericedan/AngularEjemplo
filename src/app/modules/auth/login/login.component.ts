import { TokenStorageService } from './../services/token-storage.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    itemForm: FormGroup;

    constructor(private tokenService: TokenStorageService, private auth: AuthService, private fb: FormBuilder) {}

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.itemForm = this.fb.group({
            username: [''],
            password: ['']
        });
    }

    submit(){
        let credenciales = this.itemForm.value;
        debugger;
        this.auth.login(credenciales).subscribe((data) => {
            debugger;
            let user = data;
            this.tokenService.saveToken(data.token);
        })
    }
}