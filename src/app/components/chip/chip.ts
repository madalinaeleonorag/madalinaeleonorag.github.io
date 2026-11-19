import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chip.html',
  styleUrl: './chip.scss',
})
export class Chip {
  readonly label = input<string>();
}
