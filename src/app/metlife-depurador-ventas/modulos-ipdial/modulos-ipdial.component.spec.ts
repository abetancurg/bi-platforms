import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosIpdialComponent } from './modulos-ipdial.component';

describe('ModulosIpdialComponent', () => {
  let component: ModulosIpdialComponent;
  let fixture: ComponentFixture<ModulosIpdialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosIpdialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosIpdialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
