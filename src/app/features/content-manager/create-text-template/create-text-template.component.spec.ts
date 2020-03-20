import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextTemplateComponent } from './create-text-template.component';

describe('CreateTextTemplateComponent', () => {
  let component: CreateTextTemplateComponent;
  let fixture: ComponentFixture<CreateTextTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTextTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
