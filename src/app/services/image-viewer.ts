import { Injectable, computed, signal } from '@angular/core';

export interface ViewerImage {
  src: string;
  alt: string;
  caption: string;
}

/** Which image is open full screen, and the set it belongs to (for previous / next). */
@Injectable({ providedIn: 'root' })
export class ImageViewer {
  readonly images = signal<ViewerImage[]>([]);
  readonly index = signal(0);
  readonly current = computed(() => this.images()[this.index()] ?? null);

  open(images: ViewerImage[], index: number): void {
    this.images.set(images);
    this.index.set(Math.max(0, Math.min(index, images.length - 1)));
  }

  close(): void {
    this.images.set([]);
  }

  /** Wraps around, so the last image leads back to the first. */
  step(amount: number): void {
    const count = this.images().length;
    if (count > 1) {
      this.index.set((this.index() + amount + count) % count);
    }
  }
}
