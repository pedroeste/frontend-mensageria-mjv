import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRegistrationComponent } from './feature-registration.component';

describe('FeatureRegistrationComponent', () => {
  let component: FeatureRegistrationComponent;
  let fixture: ComponentFixture<FeatureRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
