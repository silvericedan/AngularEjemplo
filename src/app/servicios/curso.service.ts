import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursoService{
    private cursoUrl = 'http://localhost:3002/api/modules/cursos/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {}

    getCursoById(idCurso: string){
        return this.http.get(this.cursoUrl + 'cursoId/' + idCurso);
    }

    getCursos() {
        return this.http.get(this.cursoUrl + 'curso');
    }

    saveCurso(curso: any) {
        return this.http.post(this.cursoUrl + 'curso', JSON.stringify(curso), this.httpOptions);
    }
}
