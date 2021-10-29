import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDownloadTmoMetlifeComponent } from './button-download-tmo-metlife.component';

describe('ButtonDownloadTmoMetlifeComponent', () => {
  let component: ButtonDownloadTmoMetlifeComponent;
  let fixture: ComponentFixture<ButtonDownloadTmoMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDownloadTmoMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDownloadTmoMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
