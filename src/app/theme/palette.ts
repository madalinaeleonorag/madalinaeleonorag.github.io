// Builds the site's dark colour tokens from one seed colour, using OKLCH so that lightness
// steps look even across hues. The seed is used as-is for fills (buttons, highlights);
// text colours are derived from it and checked against WCAG contrast.

export type Rgb = [number, number, number];

interface Oklch {
  l: number;
  c: number;
  h: number;
}

export function hexToRgb(hex: string): Rgb {
  const value = parseInt(hex.replace('#', ''), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

const toLinear = (channel: number) => {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const fromLinear = (c: number) =>
  255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);

export function rgbToOklch(rgb: Rgb): Oklch {
  const [r, g, b] = rgb.map(toLinear);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const h = (Math.atan2(B, A) * 180) / Math.PI;
  return { l: L, c: Math.hypot(A, B), h: h < 0 ? h + 360 : h };
}

function oklchToLinear(l: number, c: number, h: number): Rgb {
  const rad = (h * Math.PI) / 180;
  const A = c * Math.cos(rad);
  const B = c * Math.sin(rad);
  const l_ = (l + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m_ = (l - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s_ = (l - 0.0894841775 * A - 1.291485548 * B) ** 3;
  return [
    4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.707614701 * s_,
  ];
}

const inGamut = (rgb: Rgb) => rgb.every((v) => v >= -0.0001 && v <= 1.0001);

/** OKLCH → sRGB. Out-of-gamut colours keep their lightness and hue and lose chroma. */
export function oklch(l: number, c: number, h: number): Rgb {
  const L = Math.min(Math.max(l, 0), 1);
  let chroma = Math.max(c, 0);
  if (!inGamut(oklchToLinear(L, chroma, h))) {
    let low = 0;
    let high = chroma;
    for (let i = 0; i < 20; i++) {
      const mid = (low + high) / 2;
      if (inGamut(oklchToLinear(L, mid, h))) {
        low = mid;
      } else {
        high = mid;
      }
    }
    chroma = low;
  }
  return oklchToLinear(L, chroma, h).map((v) =>
    Math.round(Math.min(255, Math.max(0, fromLinear(Math.min(1, Math.max(0, v)))))),
  ) as Rgb;
}

export function luminance(rgb: Rgb): number {
  const [r, g, b] = rgb.map(toLinear);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrast(a: Rgb, b: Rgb): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const css = (rgb: Rgb) => `rgb(${rgb.join(' ')})`;
const triple = (rgb: Rgb) => rgb.join(' ');

/**
 * All colour tokens of the dark theme for a seed colour (and an optional second colour,
 * for the years Pantone chose two). Keys are CSS custom property names.
 */
export function buildTheme(seedHex: string, secondHex?: string): Record<string, string> {
  const seed = hexToRgb(seedHex);
  const { l, c, h } = rgbToOklch(seed);

  // Neutrals carry a trace of the seed hue.
  const tint = Math.min(c * 0.25, 0.02);
  const neutral = (lightness: number, chromaScale = 1) => oklch(lightness, tint * chromaScale, h);
  const background = neutral(0.17);

  // Accent text: the seed hue, lightened until it reads at 7:1 on the background.
  const accentChroma = Math.min(c, 0.16);
  let accentLightness = Math.min(Math.max(l, 0.78), 0.95);
  let primary = oklch(accentLightness, accentChroma, h);
  while (contrast(primary, background) < 7 && accentLightness < 0.97) {
    accentLightness += 0.01;
    primary = oklch(accentLightness, accentChroma, h);
  }

  // Text on the seed fill: a light or dark tone of the seed hue, whichever contrasts more.
  // Mid-tone seeds (Mocha Mousse) reach 4.5:1 with neither; they get pure white or black.
  const light = oklch(0.97, Math.min(c, 0.03), h);
  const dark = oklch(0.2, Math.min(c, 0.06), h);
  const tinted = contrast(light, seed) >= contrast(dark, seed) ? light : dark;
  const white: Rgb = [255, 255, 255];
  const black: Rgb = [0, 0, 0];
  const onFill =
    contrast(tinted, seed) >= 4.5
      ? tinted
      : contrast(white, seed) >= contrast(black, seed)
        ? white
        : black;
  const fillHover = oklch(l > 0.6 ? l - 0.07 : l + 0.07, c, h);

  const second = secondHex
    ? hexToRgb(secondHex)
    : oklch(Math.min(Math.max(l, 0.45), 0.6), c, h + 25);
  const tertiary = secondHex ? second : oklch(0.72, Math.min(c, 0.08), h + 50);

  return {
    '--md-sys-color-primary': css(primary),
    '--md-sys-color-on-primary': css(oklch(0.25, Math.min(c, 0.1), h)),
    '--md-sys-color-primary-container': css(seed),
    '--md-sys-color-primary-container-hover': css(fillHover),
    '--md-sys-color-on-primary-container': css(onFill),
    '--md-sys-color-tertiary': css(tertiary),
    '--md-sys-color-background': css(background),
    '--md-sys-color-on-surface': css(neutral(0.95, 0.5)),
    '--md-sys-color-on-surface-variant': css(neutral(0.84, 1.5)),
    '--md-sys-color-outline': css(neutral(0.63, 1.5)),
    '--md-sys-color-outline-variant': css(neutral(0.38, 1.5)),
    '--md-sys-color-surface-container-lowest': css(neutral(0.145)),
    '--md-sys-color-surface-container-low': css(neutral(0.19)),
    '--md-sys-color-surface-container': css(neutral(0.215)),
    '--md-sys-color-surface-container-high': css(neutral(0.25)),
    '--md-sys-color-surface-container-highest': css(neutral(0.285)),
    '--brand-rgb': triple(seed),
    // Translucent backgrounds behind text use this, not the seed: the seed hue at a lightness
    // of at most 0.5, so light seeds (Cloud Dancer) never turn into a pale wash under light text.
    '--tint-rgb': triple(oklch(Math.min(l, 0.5), c, h)),
    // Light seeds (Cloud Dancer, Peach Fuzz) would turn the hero glow into a pale haze behind
    // white text, so the glow gets weaker as the seed gets lighter.
    '--glow-strength': String(l > 0.8 ? 0.14 : l > 0.65 ? 0.28 : 0.55),
    '--accent-2-rgb': triple(second),
  };
}
