import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFixComponent } from './input-fix.component';

describe('InputFixComponent', () => {
  let component: InputFixComponent;
  let fixture: ComponentFixture<InputFixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFixComponent]
    });
    fixture = TestBed.createComponent(InputFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
