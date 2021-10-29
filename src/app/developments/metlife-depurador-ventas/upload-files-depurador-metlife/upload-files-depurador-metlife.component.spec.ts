import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesDepuradorMetlifeComponent } from './upload-files-depurador-metlife.component';

describe('UploadFilesDepuradorMetlifeComponent', () => {
  let component: UploadFilesDepuradorMetlifeComponent;
  let fixture: ComponentFixture<UploadFilesDepuradorMetlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesDepuradorMetlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesDepuradorMetlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
