import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUploadDepuradorMetlifeComponent } from './button-upload-depurador-metlife.component';

describe('ButtonUploadDepuradorMetlifeComponent', () => {
  let component: ButtonUploadDepuradorMetlifeComponent;
  let fixture: ComponentFixture<ButtonUploadDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonUploadDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonUploadDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
