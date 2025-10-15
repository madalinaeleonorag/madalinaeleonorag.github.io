import { Component, inject, input } from '@angular/core';
import { Certification } from '../../interfaces/certifications';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-certification',
  imports: [],
  templateUrl: './certification.html',
  styleUrl: './certification.scss',
})
export class CertificationComponent {
  certification = input.required<Certification>();

  commonService = inject(CommonService);

  openLink(link: string) {
    this.commonService.openLinkNewTab(link);
  }
}
