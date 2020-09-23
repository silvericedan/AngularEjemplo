import { CursoService } from './../servicios/curso.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.itemForm = this.fb.group({
        nombreCurso: [ '' ],
        profesor: [ '' ]
    });
  }

  submit() {
    debugger;
    this.cursoService.saveCurso(this.itemForm.value).subscribe((data) => {
        debugger;
        let cursoNuevo = data;
    })
  }

}
