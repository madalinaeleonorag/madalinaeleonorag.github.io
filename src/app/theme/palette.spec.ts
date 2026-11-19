import { PANTONE_COLORS, SIGNATURE_COLOR } from '../database/pantone';
import { buildTheme, contrast, hexToRgb, oklch, rgbToOklch, Rgb } from './palette';

const parse = (value: string): Rgb => value.match(/\d+/g)!.slice(0, 3).map(Number) as Rgb;

describe('palette', () => {
  it('converts to OKLCH and back without drift', () => {
    for (const hex of ['#7A1E2E', '#F0EFEB', '#0F4C81', '#88B04B']) {
      const rgb = hexToRgb(hex);
      const { l, c, h } = rgbToOklch(rgb);
      oklch(l, c, h).forEach((channel, i) =>
        expect(Math.abs(channel - rgb[i])).toBeLessThanOrEqual(1),
      );
    }
  });

  for (const color of [SIGNATURE_COLOR, ...PANTONE_COLORS]) {
    it(`${color.year || 'signature'} ${color.name}: readable text in every pairing`, () => {
      const theme = buildTheme(color.hex, color.secondHex);
      const background = parse(theme['--md-sys-color-background']);
      const fill = parse(theme['--md-sys-color-primary-container']);

      // The Pantone colour itself is the fill.
      expect(fill).toEqual(hexToRgb(color.hex));
      // Accent text (headings, links) on the page background.
      expect(contrast(parse(theme['--md-sys-color-primary']), background)).toBeGreaterThanOrEqual(
        7,
      );
      // Button text on the fill.
      expect(
        contrast(parse(theme['--md-sys-color-on-primary-container']), fill),
      ).toBeGreaterThanOrEqual(4.5);
      // Body text.
      expect(
        contrast(parse(theme['--md-sys-color-on-surface']), background),
      ).toBeGreaterThanOrEqual(12);
      expect(
        contrast(parse(theme['--md-sys-color-on-surface-variant']), background),
      ).toBeGreaterThanOrEqual(7);

      // Text and icons on the strongest translucent tint the site uses (60%, expertise icons).
      const tint = parse(`rgb(${theme['--tint-rgb']})`);
      const tinted = tint.map((value, i) => value * 0.6 + background[i] * 0.4) as Rgb;
      expect(contrast(parse(theme['--md-sys-color-on-surface']), tinted)).toBeGreaterThanOrEqual(
        4.5,
      );
      expect(contrast(parse(theme['--md-sys-color-primary']), tinted)).toBeGreaterThanOrEqual(3);
    });
  }
});
