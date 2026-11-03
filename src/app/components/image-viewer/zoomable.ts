import { Directive, ElementRef, inject, input } from '@angular/core';
import { ImageViewer, ViewerImage } from '../../services/image-viewer';

/**
 * Makes an image open full screen on click, tap or Enter.
 * Images with the same group name open as one set with previous / next, in page order.
 * Usage: <img appZoomable="dosesync" [zoomCaption]="caption" ... />
 */
@Directive({
  selector: 'img[appZoomable]',
  host: {
    role: 'button',
    tabindex: '0',
    class: 'zoomable',
    '[attr.aria-label]': '"Open image: " + element.alt',
    '[attr.data-zoom-group]': 'appZoomable() || null',
    '[attr.data-zoom-caption]': 'zoomCaption() || null',
    '(click)': 'open()',
    '(keydown.enter)': 'open()',
    '(keydown.space)': '$event.preventDefault(); open()',
  },
})
export class Zoomable {
  readonly appZoomable = input<string>('');
  readonly zoomCaption = input<string>('');
  private readonly viewer = inject(ImageViewer);
  protected readonly element = inject<ElementRef<HTMLImageElement>>(ElementRef).nativeElement;

  open(): void {
    // Focus first, so closing the viewer brings focus back here.
    this.element.focus({ preventScroll: true });
    const group = this.appZoomable();
    const images = group
      ? Array.from(document.querySelectorAll<HTMLImageElement>(`img[data-zoom-group="${CSS.escape(group)}"]`))
      : [this.element];
    // The same image can appear twice on a page (hidden tabs); keep the first of each.
    // src, not currentSrc: lazy images further down have not loaded yet and have no currentSrc.
    const unique = images.filter((image, index) => images.findIndex((other) => other.src === image.src) === index);
    const start = Math.max(0, unique.findIndex((image) => image.src === this.element.src));
    this.viewer.open(unique.map(toViewerImage), start);
  }
}

function toViewerImage(image: HTMLImageElement): ViewerImage {
  return { src: image.src, alt: image.alt, caption: image.dataset['zoomCaption'] ?? '' };
}
