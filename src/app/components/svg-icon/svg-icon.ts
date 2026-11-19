import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Company logos are static files in public/assets/logos/, loaded as images so they stay out of
 * the JavaScript bundle. Keys are the `logo` and `company` values used in the database files.
 */
const LOGO_FILES: Record<string, string> = {
  Cognizant: 'cognizant.svg',
  SSNC: 'ssc.svg',
  'SS&C Technologies': 'ssc.svg',
  Deloitte: 'deloitte.svg',
  'Deloitte Digital': 'deloitte.svg',
  IBM: 'ibm.svg',
  Renault: 'renault.svg',
  'Renault Group': 'renault.svg',
};

/**
 * Inline UI icons (they take the text colour, or the accent colour with `useAccentColor`)
 * and company logos. Icons are decorative: put the accessible name on the parent link or button.
 */
@Component({
  selector: 'app-svg-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './svg-icon.html',
  styleUrl: './svg-icon.scss',
  host: { '[class.accent-color]': 'useAccentColor()' },
})
export class SvgIcon {
  readonly type = input<string | null>(null);
  readonly useAccentColor = input<boolean>(false);

  protected readonly logoSrc = computed(() => {
    const file = LOGO_FILES[this.type() ?? ''];
    return file ? `/assets/logos/${file}` : null;
  });
}
