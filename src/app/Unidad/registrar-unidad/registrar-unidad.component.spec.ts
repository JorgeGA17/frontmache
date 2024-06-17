import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUnidadComponent } from './registrar-unidad.component';

describe('RegistrarUnidadComponent', () => {
  let component: RegistrarUnidadComponent;
  let fixture: ComponentFixture<RegistrarUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarUnidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
