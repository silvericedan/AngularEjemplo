import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService{
    private authUrl = 'http://localhost:3002/api/modules/auth/';

    constructor(private http: HttpClient) {}

    login(credenciales): Observable<any> {
        return this.http.post(
            this.authUrl + 'login', 
            {username: credenciales.username, password: credenciales.password }, httpOptions)
    }
}
