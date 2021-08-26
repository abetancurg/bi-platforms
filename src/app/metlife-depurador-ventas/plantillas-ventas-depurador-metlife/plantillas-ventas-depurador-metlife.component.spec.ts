import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillasVentasDepuradorMetlifeComponent } from './plantillas-ventas-depurador-metlife.component';

describe('PlantillasVentasDepuradorMetlifeComponent', () => {
  let component: PlantillasVentasDepuradorMetlifeComponent;
  let fixture: ComponentFixture<PlantillasVentasDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillasVentasDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillasVentasDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
