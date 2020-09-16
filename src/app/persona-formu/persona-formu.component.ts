import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonaService } from './../servicios/persona.service';

@Component({
  selector: 'app-persona-formu',
  templateUrl: './persona-formu.component.html',
  styleUrls: ['./persona-formu.component.css']
})
export class PersonaFormuComponent implements OnInit {

  text: string = 'Mostrar Formulario';
  personaForm: FormGroup;
  show: any = false;
  personas: any[] = [];
  idPersona: any;
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'acciones'];

  constructor(private fb: FormBuilder, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.getPersona();
  }

  iniciarFormulario() {
    this.personaForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: ['']
    });
  }

  getPersona() {
    this.personaService.getPersonas().subscribe((personas: any) => {
      this.personas = personas;
    });
  }

  editarPersona(persona: any) {
    this.idPersona = persona._id;
    this.personaForm.patchValue({
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    });
  }

  borrarPersona(persona: any) {
    this.idPersona = persona._id;
    this.personaService.borrarPersona(this.idPersona).subscribe(result => console.log('Se borro a: ', persona));
    this.getPersona();
  }

  submit() {
    if (this.idPersona) {
      this.personaService.editarPersona(this.idPersona, this.personaForm.value).subscribe((persona) => {
        console.log('Persona Editada: ', persona);
      });
    } else {
      this.personaService.guardarPersona(this.personaForm.value).subscribe((persona) => {
        console.log('Persona Nueva: ', persona);
      });
    }
    this.getPersona();
  }

  showForm() {
    this.show = !this.show;
    console.log(this.personas);
    if (this.show) {
      this.text = 'Ocultar Formulario';
    }
    else {
      this.text = 'Mostrar Formulario';
    }
  }
}
