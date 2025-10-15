import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Icon } from './icon.component';

describe('Icon', () => {
  let component: Icon;
  let fixture: ComponentFixture<Icon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Icon],
    }).compileComponents();

    fixture = TestBed.createComponent(Icon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
