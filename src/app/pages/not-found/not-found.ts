import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Any unknown URL. Prerendered and copied to 404.html, which GitHub Pages serves for missing pages. */
@Component({
  selector: 'app-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section class="not-found">
      <p class="code" aria-hidden="true">404</p>
      <h1>This page doesn’t exist</h1>
      <p>The link may be old, or the address may have a typo.</p>
      <div class="actions">
        <a class="btn btn-primary" routerLink="/">Go to the home page</a>
        <a class="btn btn-secondary" routerLink="/projects/dosesync">See the DoseSync case study</a>
      </div>
    </section>
  `,
  styles: `
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-md);
      min-height: 60vh;
      justify-content: center;
      padding: var(--space-xl) var(--page-gutter);
      text-align: center;
    }
    .code {
      margin: 0;
      font-size: clamp(5rem, 18vw, 10rem);
      font-weight: 800;
      line-height: 1;
      letter-spacing: -0.04em;
      color: transparent;
      background: linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-primary-container));
      background-clip: text;
    }
    h1 {
      font-size: var(--font-h2);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-sm);
    }
  `,
})
export class NotFound {}
