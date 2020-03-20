import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUploadComponent } from './service-upload.component';

describe('ServiceUploadComponent', () => {
  let component: ServiceUploadComponent;
  let fixture: ComponentFixture<ServiceUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
