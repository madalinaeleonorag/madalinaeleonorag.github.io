import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DoseSync } from './dosesync';

describe('DoseSync', () => {
  let component: DoseSync;
  let fixture: ComponentFixture<DoseSync>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoseSync],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DoseSync);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
