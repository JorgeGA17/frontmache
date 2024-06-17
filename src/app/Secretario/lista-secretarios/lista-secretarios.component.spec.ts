import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSecretariosComponent } from './lista-secretarios.component';

describe('ListaSecretariosComponent', () => {
  let component: ListaSecretariosComponent;
  let fixture: ComponentFixture<ListaSecretariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaSecretariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSecretariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
