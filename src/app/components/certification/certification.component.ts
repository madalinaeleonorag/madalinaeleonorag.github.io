import { Component, inject, input } from '@angular/core';
import { Certification } from '../../models/certification.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-certification',
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.scss',
})
export class CertificationComponent {
  certification = input.required<Certification>();

  commonService = inject(CommonService);

  openLink(link: string) {
    this.commonService.openLinkNewTab(link);
  }
}
