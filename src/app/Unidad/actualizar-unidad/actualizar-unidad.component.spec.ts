import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUnidadComponent } from './actualizar-unidad.component';

describe('ActualizarUnidadComponent', () => {
  let component: ActualizarUnidadComponent;
  let fixture: ComponentFixture<ActualizarUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarUnidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
