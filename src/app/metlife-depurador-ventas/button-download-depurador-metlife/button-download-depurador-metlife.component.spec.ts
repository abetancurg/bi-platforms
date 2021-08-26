import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDownloadDepuradorMetlifeComponent } from './button-download-depurador-metlife.component';

describe('ButtonDownloadDepuradorMetlifeComponent', () => {
  let component: ButtonDownloadDepuradorMetlifeComponent;
  let fixture: ComponentFixture<ButtonDownloadDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDownloadDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDownloadDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
