import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSecretarioComponent } from './registrar-secretario.component';

describe('RegistrarSecretarioComponent', () => {
  let component: RegistrarSecretarioComponent;
  let fixture: ComponentFixture<RegistrarSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarSecretarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
