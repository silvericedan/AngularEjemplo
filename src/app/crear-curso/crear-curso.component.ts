import { CursoService } from './../servicios/curso.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  itemForm: FormGroup;
  idCurso: string;

  constructor(private fb: FormBuilder, private cursoService: CursoService, private paramRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramRoute.paramMap.subscribe(param => {
      debugger;
      this.idCurso = param.get('id');
      
      if (this.idCurso !== 'new'){
        this.getCursoById(this.idCurso);
      }
    });

    this.initForm();
  }

  getCursoById(idCurso: string){
    this.cursoService.getCursoById(idCurso).subscribe(data => {
      debugger;
      let cursoId = data;

      this.itemForm.patchValue(cursoId);
    })
  }
  initForm() {
    this.itemForm = this.fb.group({
        nombreCurso: [ '' ],
        profesor: [ '' ]
    });
  }

  submit() {
    this.cursoService.saveCurso(this.itemForm.value).subscribe((data) => {
        let cursoNuevo = data;
    })
  }

}
