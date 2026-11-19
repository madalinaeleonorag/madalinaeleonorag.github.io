import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Theme } from '../../theme/theme';

/**
 * Round button in the top right corner that opens the list of Pantone Colors of the Year.
 * Uses the native Popover API: it opens in the top layer, closes with Escape or a click outside,
 * and needs no JavaScript to open or close. Picking a colour applies it at once.
 */
@Component({
  selector: 'app-theme-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './theme-picker.html',
  styleUrl: './theme-picker.scss',
})
export class ThemePicker {
  protected readonly theme = inject(Theme);

  protected swatch(hex: string, secondHex?: string): string {
    return secondHex ? `linear-gradient(135deg, ${hex} 50%, ${secondHex} 50%)` : hex;
  }
}
