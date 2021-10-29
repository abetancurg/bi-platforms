import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDescargaTmoMetlifeComponent } from './date-descarga-tmo-metlife.component';

describe('DateDescargaTmoMetlifeComponent', () => {
  let component: DateDescargaTmoMetlifeComponent;
  let fixture: ComponentFixture<DateDescargaTmoMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDescargaTmoMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDescargaTmoMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
