import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { PANTONE_COLORS, SIGNATURE_COLOR, ThemeColor } from '../database/pantone';
import { buildTheme } from './palette';

/** localStorage keys. THEME_CSS_KEY is also read by the inline script in index.html. */
const THEME_ID_KEY = 'theme-id';
const THEME_CSS_KEY = 'theme-css';

/**
 * The visitor's theme colour. The signature colour is the stylesheet default (styles.scss);
 * any other colour is applied as custom properties on <html>, and remembered. index.html
 * re-applies the remembered properties before the first paint, so there is no flash.
 */
@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly colors: ThemeColor[] = [SIGNATURE_COLOR, ...PANTONE_COLORS];
  readonly selectedId = signal(SIGNATURE_COLOR.id);
  readonly selected = computed(
    () => this.colors.find((color) => color.id === this.selectedId()) ?? SIGNATURE_COLOR,
  );

  constructor() {
    if (this.isBrowser) {
      const saved = this.read(THEME_ID_KEY);
      if (saved && this.colors.some((color) => color.id === saved)) {
        // Rebuild instead of trusting the saved CSS: it may come from an older palette.ts
        // (missing or outdated tokens), which index.html has just applied.
        this.select(saved);
      }
    }
  }

  select(id: string) {
    const color = this.colors.find((item) => item.id === id);
    if (!color || !this.isBrowser) {
      return;
    }
    this.selectedId.set(id);
    const root = this.document.documentElement;
    if (color.id === SIGNATURE_COLOR.id) {
      root.removeAttribute('style');
      this.write(THEME_ID_KEY, null);
      this.write(THEME_CSS_KEY, null);
    } else {
      const css = Object.entries(buildTheme(color.hex, color.secondHex))
        .map(([property, value]) => `${property}:${value}`)
        .join(';');
      root.setAttribute('style', css);
      this.write(THEME_ID_KEY, color.id);
      this.write(THEME_CSS_KEY, css);
    }
    const background = getComputedStyle(root).getPropertyValue('--md-sys-color-background').trim();
    this.document.querySelector('meta[name="theme-color"]')?.setAttribute('content', background);
  }

  // Storage can be blocked (private mode, site data off); the theme then just isn't remembered.
  private read(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  private write(key: string, value: string | null) {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch {
      // Not remembered; the choice still applies to this visit.
    }
  }
}
