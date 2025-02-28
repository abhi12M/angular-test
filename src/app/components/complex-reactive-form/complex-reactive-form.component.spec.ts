import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexReactiveFormComponent } from './complex-reactive-form.component';

describe('ComplexReactiveFormComponent', () => {
  let component: ComplexReactiveFormComponent;
  let fixture: ComponentFixture<ComplexReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplexReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComplexReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
