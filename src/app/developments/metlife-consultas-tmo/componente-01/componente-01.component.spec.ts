import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosIpdialTmoMetlifeComponent } from './componente-01.component';

describe('ModulosIpdialTmoMetlifeComponent', () => {
  let component: ModulosIpdialTmoMetlifeComponent;
  let fixture: ComponentFixture<ModulosIpdialTmoMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosIpdialTmoMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosIpdialTmoMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
