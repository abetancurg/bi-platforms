import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDescargaDepuradorMetlifeComponent } from './date-descarga-depurador-metlife.component';

describe('DateDescargaDepuradorMetlifeComponent', () => {
  let component: DateDescargaDepuradorMetlifeComponent;
  let fixture: ComponentFixture<DateDescargaDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDescargaDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDescargaDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
