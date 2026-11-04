import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { COPYRIGHT, LEGAL_DOCUMENTS, LEGAL_UPDATED, Language, LegalDocumentId } from '../../database/dosesync-legal';

const UPDATED_LABEL: Record<Language, string> = { en: 'Last updated', ro: 'Ultima actualizare' };

/** Public copies of the DoseSync privacy policy and terms of use, linked from Google Play. English first, Romanian on request. */
@Component({
  selector: 'app-dosesync-legal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './dosesync-legal.html',
  styleUrl: './dosesync-legal.scss',
})
export class DoseSyncLegal {
  private readonly id = inject(ActivatedRoute).snapshot.data['document'] as LegalDocumentId;
  readonly language = signal<Language>('en');
  readonly document = computed(() => LEGAL_DOCUMENTS[this.id][this.language()]);
  readonly updated = computed(() => `${UPDATED_LABEL[this.language()]}: ${LEGAL_UPDATED}`);
  readonly otherDocument = this.id === 'privacy' ? { path: '/projects/dosesync/terms', label: 'Terms of use' } : { path: '/projects/dosesync/privacy', label: 'Privacy policy' };
  readonly copyright = COPYRIGHT;
}
