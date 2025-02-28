import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRepeatingCharactersComponent } from './non-repeating-characters.component';

describe('NonRepeatingCharactersComponent', () => {
  let component: NonRepeatingCharactersComponent;
  let fixture: ComponentFixture<NonRepeatingCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonRepeatingCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonRepeatingCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
