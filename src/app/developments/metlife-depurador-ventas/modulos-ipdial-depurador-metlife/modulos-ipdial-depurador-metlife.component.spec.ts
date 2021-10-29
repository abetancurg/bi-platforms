import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosIpdialDepuradorMetlifeComponent } from './modulos-ipdial-depurador-metlife.component';

describe('ModulosIpdialDepuradorMetlifeComponent', () => {
  let component: ModulosIpdialDepuradorMetlifeComponent;
  let fixture: ComponentFixture<ModulosIpdialDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosIpdialDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosIpdialDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
