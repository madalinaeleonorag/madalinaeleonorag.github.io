import { ChangeDetectionStrategy, Component, ElementRef, effect, inject, viewChild } from '@angular/core';
import { ImageViewer } from '../../services/image-viewer';

/** Full-screen image view. A native <dialog>: Escape closes it and focus stays inside while it is open. */
@Component({
  selector: 'app-image-viewer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.scss',
  host: {
    '(document:keydown.arrowleft)': 'viewer.current() && viewer.step(-1)',
    '(document:keydown.arrowright)': 'viewer.current() && viewer.step(1)',
  },
})
export class ImageViewerDialog {
  protected readonly viewer = inject(ImageViewer);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private touchStartX: number | null = null;
  private opener: HTMLElement | null = null;

  constructor() {
    effect(() => {
      const dialog = this.dialog().nativeElement;
      if (this.viewer.current() && !dialog.open) {
        this.opener = document.activeElement as HTMLElement | null;
        dialog.showModal();
      } else if (!this.viewer.current() && dialog.open) {
        dialog.close();
      }
    });
  }

  /** Escape, the close button and a tap outside the image all end here. */
  onClosed(): void {
    this.viewer.close();
    this.opener?.focus();
    this.opener = null;
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.dialog().nativeElement.close();
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0]?.clientX ?? null;
  }

  onTouchEnd(event: TouchEvent): void {
    const start = this.touchStartX;
    const end = event.changedTouches[0]?.clientX;
    this.touchStartX = null;
    if (start !== null && end !== undefined && Math.abs(end - start) > 50) {
      this.viewer.step(end < start ? 1 : -1);
    }
  }

  close(): void {
    this.dialog().nativeElement.close();
  }
}
