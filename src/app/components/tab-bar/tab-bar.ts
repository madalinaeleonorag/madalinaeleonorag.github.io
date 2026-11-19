import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
} from '@angular/core';

export interface Tab {
  /** Used in the URL fragment and in the element ids: tab-<id>, panel-<id>. */
  id: string;
  label: string;
}

/**
 * Tab list following the WAI-ARIA tabs pattern: arrow keys, Home and End move between tabs,
 * and only the selected tab is in the Tab order. The page renders the panels itself, as
 * `<section role="tabpanel" id="panel-<id>" aria-labelledby="tab-<id>">`.
 */
@Component({
  selector: 'app-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tab-list" role="tablist" [attr.aria-label]="label()" (keydown)="onKeydown($event)">
      @for (tab of tabs(); track tab.id; let i = $index) {
        <button
          type="button"
          role="tab"
          class="tab"
          [id]="'tab-' + tab.id"
          [attr.aria-controls]="'panel-' + tab.id"
          [attr.aria-selected]="i === selected()"
          [attr.tabindex]="i === selected() ? 0 : -1"
          (click)="selectedChange.emit(i)"
        >
          {{ tab.label }}
        </button>
      }
    </div>
  `,
  styleUrl: './tab-bar.scss',
})
export class TabBar {
  readonly tabs = input.required<Tab[]>();
  readonly selected = input(0);
  readonly label = input('Sections');
  readonly selectedChange = output<number>();

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  onKeydown(event: KeyboardEvent) {
    const count = this.tabs().length;
    const moves: Record<string, number> = {
      ArrowRight: (this.selected() + 1) % count,
      ArrowLeft: (this.selected() - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    const next = moves[event.key];
    if (next === undefined) {
      return;
    }
    event.preventDefault();
    this.selectedChange.emit(next);
    this.host.nativeElement.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
  }
}
