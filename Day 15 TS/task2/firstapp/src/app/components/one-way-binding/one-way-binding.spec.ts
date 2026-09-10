import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBinding } from './one-way-binding';

describe('OneWayBinding', () => {
  let component: OneWayBinding;
  let fixture: ComponentFixture<OneWayBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneWayBinding],
    }).compileComponents();

    fixture = TestBed.createComponent(OneWayBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
