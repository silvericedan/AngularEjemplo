import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaFormuComponent } from './persona-formu.component';

describe('PersonaFormuComponent', () => {
  let component: PersonaFormuComponent;
  let fixture: ComponentFixture<PersonaFormuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaFormuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaFormuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
