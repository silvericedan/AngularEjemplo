import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from './../servicios/persona.service';

@Component({
  selector: 'app-persona-formu',
  templateUrl: './persona-formu.component.html',
  styleUrls: ['./persona-formu.component.css']
})
export class PersonaFormuComponent implements OnInit {

  personaForm: FormGroup;

  personas: any[] = [];
  idPersona: any;

  constructor(private fb: FormBuilder, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.personaForm = this.fb.group({
      nombre: [ '' ],
      apellido: [ '' ],
      edad: [ '' ]
    });
  }

  submit() {
    this.personaService.guardarPersona(this.personaForm.value).subscribe((persona) => {
        console.log('Persona Nueva: ', persona);
    });
  }

}
