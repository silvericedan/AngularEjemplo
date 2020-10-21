import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { PersonaService } from '../../../servicios/persona.service';

@Component({
  selector: 'app-persona-formu',
  templateUrl: './persona-formu.component.html',
  styleUrls: ['./persona-formu.component.css']
})
export class PersonaFormuComponent implements OnInit {

  tiposOrdenamientos = [{ nombre: 'Sin Orden', valor: 'default' }, { nombre: 'Por Edad', valor: 'edad' }, { nombre: 'Alfabetico', valor: 'nombre' }];
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
    this.personaService.getPersonas().pipe(take(1)).subscribe((personas: any) => {
      this.personas = personas;
    });
  }
  ordenarLista(campo: string) {
    const newArray = [...this.personas];
    switch (campo) {
      case 'edad':
        newArray.sort((a, b) => a.edad - b.edad);
        this.personas = newArray;
        break;
      case 'nombre':
        newArray.sort((a, b) => a[campo].localeCompare(b[campo]));
        this.personas = newArray;
        break;
      default:
        break;
    }
  }
  editarPersona(persona: any) {
    this.idPersona = persona._id;
    this.personaForm.patchValue({
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    });
  }

  async borrarPersona(persona: any) {
    try {
      this.idPersona = persona._id;
      await this.personaService.borrarPersona(this.idPersona).toPromise();
      const index = this.personas.findIndex((item) => item._id === this.idPersona);
      if (index < 0) { return; }
      const personalist = [...this.personas];
      personalist.splice(index, 1);
      this.personas = personalist;
    } catch (error) {
      console.log(error);
    }
  }

  submit() {
    if (this.idPersona) {
      this.personaService.editarPersona(this.idPersona, this.personaForm.value).subscribe((response) => {
        const index = this.personas.findIndex((item) => item._id === this.idPersona);
        const personalist = [...this.personas];
        personalist[index] = { _id: response.persona._id, ...this.personaForm.value };
        this.personas = personalist;
      });
    } else {
      this.personaService.guardarPersona(this.personaForm.value).subscribe((persona) => {
        this.personas = [...this.personas, persona];
      });
    }
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
