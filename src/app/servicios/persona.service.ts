import { Persona } from './../modules/personas/interfaces/persona.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PersonaService {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    private personaUrl = 'http://localhost:3002/api/modules/personas/';

    constructor(private httpClient: HttpClient) { }

    getPersonas() {
        return this.httpClient.get(this.personaUrl + 'persona');
    }

    guardarPersona(persona: any) {
        return this.httpClient.post(this.personaUrl + 'persona', JSON.stringify(persona), this.httpOptions);
    }

    editarPersona(idPersona, persona): Observable<{ [k: string]: any, persona: Persona }> {
        return this.httpClient.put<{ [k: string]: any, persona: Persona }>(`${this.personaUrl}persona/${idPersona}`,
            JSON.stringify(persona), this.httpOptions);

    }

    borrarPersona(idPersona) {
        return this.httpClient.delete(this.personaUrl + 'persona/' + idPersona, this.httpOptions);
    }
}
