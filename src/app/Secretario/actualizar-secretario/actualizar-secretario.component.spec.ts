import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSecretarioComponent } from './actualizar-secretario.component';

describe('ActualizarSecretarioComponent', () => {
  let component: ActualizarSecretarioComponent;
  let fixture: ComponentFixture<ActualizarSecretarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarSecretarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarSecretarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
