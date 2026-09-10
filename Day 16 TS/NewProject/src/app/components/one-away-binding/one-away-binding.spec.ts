import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAwayBinding } from './one-away-binding';

describe('OneAwayBinding', () => {
  let component: OneAwayBinding;
  let fixture: ComponentFixture<OneAwayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneAwayBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(OneAwayBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
