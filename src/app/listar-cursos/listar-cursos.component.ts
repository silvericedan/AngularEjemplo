import { CursoService } from './../servicios/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  displayedColumns: string[] = ['nombreCurso', 'profesor'];
  dataSource: any[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((data: any) => { 
      this.dataSource = data;
    });
    
  }
}
