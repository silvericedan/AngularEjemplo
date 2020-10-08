import { Injectable } from '@angular/core';

const TOKEN = 'auth-token';

@Injectable()
export class TokenStorageService {
    constructor() {

    }

    public saveToken(token: string): void {
        window.sessionStorage.setItem(TOKEN, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN);
    }
}