import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Zoomable } from '../../../components/image-viewer/zoomable';
import { CERTIFICATIONS } from '../../../database/certifications';
import { EDUCATION } from '../../../database/education';
import { AssetPathPipe } from '../../../pipes/asset-path-pipe';

interface Credential {
  id: string;
  type: 'education' | 'certification';
  sortYear: number;
  date: string;
  title: string;
  issuer: string;
  grade: string;
  logo: string;
  url: string;
}

/** Degrees and certificates together, newest first. */
@Component({
  selector: 'app-home-credentials',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AssetPathPipe, Zoomable],
  templateUrl: './home-credentials.html',
  styleUrl: './home-credentials.scss',
})
export class HomeCredentials {
  readonly credentials: Credential[] = [
    ...EDUCATION.map((edu, index): Credential => {
      const [start, end] = edu.period.split('-').map((part) => part.trim());
      return {
        id: `edu-${index}`,
        type: 'education',
        sortYear: parseInt(end || start),
        date: edu.period,
        title: edu.degree,
        issuer: edu.institution,
        grade: edu.grade,
        logo: edu.logo,
        url: '',
      };
    }),
    ...CERTIFICATIONS.map(
      (cert, index): Credential => ({
        id: `cert-${index}`,
        type: 'certification',
        sortYear: parseInt(cert.issueDate.split(' ')[1] || cert.issueDate),
        date: cert.issueDate,
        title: cert.name,
        issuer: cert.organization,
        grade: '',
        logo: cert.logo,
        url: cert.url ?? '',
      }),
    ),
  ].sort((a, b) => b.sortYear - a.sortYear);
}
