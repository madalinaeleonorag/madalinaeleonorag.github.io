import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBar } from './tab-bar';

describe('TabBar', () => {
  let fixture: ComponentFixture<TabBar>;
  let emitted: number[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TabBar] }).compileComponents();
    fixture = TestBed.createComponent(TabBar);
    fixture.componentRef.setInput('tabs', [
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' },
      { id: 'c', label: 'C' },
    ]);
    fixture.componentRef.setInput('selected', 1);
    emitted = [];
    fixture.componentInstance.selectedChange.subscribe((index) => emitted.push(index));
    await fixture.whenStable();
  });

  const tabs = () =>
    Array.from(fixture.nativeElement.querySelectorAll('[role="tab"]')) as HTMLElement[];
  const press = (key: string) =>
    fixture.nativeElement
      .querySelector('[role="tablist"]')
      .dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));

  it('marks the selected tab and keeps only it in the Tab order', () => {
    expect(tabs().map((tab) => tab.getAttribute('aria-selected'))).toEqual([
      'false',
      'true',
      'false',
    ]);
    expect(tabs().map((tab) => tab.getAttribute('tabindex'))).toEqual(['-1', '0', '-1']);
    expect(tabs()[1].getAttribute('aria-controls')).toBe('panel-b');
  });

  it('moves with the arrow keys, wrapping around, and with Home / End', () => {
    press('ArrowRight');
    press('ArrowLeft');
    press('Home');
    press('End');
    expect(emitted).toEqual([2, 0, 0, 2]);
  });

  it('selects a tab on click', () => {
    tabs()[2].click();
    expect(emitted).toEqual([2]);
  });
});
