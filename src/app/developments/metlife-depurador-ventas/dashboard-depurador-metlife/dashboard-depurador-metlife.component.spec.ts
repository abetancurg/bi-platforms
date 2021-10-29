import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDepuradorMetlifeComponent } from './dashboard-depurador-metlife.component';

describe('DashboardDepuradorMetlifeComponent', () => {
  let component: DashboardDepuradorMetlifeComponent;
  let fixture: ComponentFixture<DashboardDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
