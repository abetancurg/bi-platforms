import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosIpdialDescargaDepuradorMetlifeComponent } from './modulos-ipdial-descarga-depurador-metlife.component';

describe('ModulosIpdialDescargaDepuradorMetlifeComponent', () => {
  let component: ModulosIpdialDescargaDepuradorMetlifeComponent;
  let fixture: ComponentFixture<ModulosIpdialDescargaDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosIpdialDescargaDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosIpdialDescargaDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
