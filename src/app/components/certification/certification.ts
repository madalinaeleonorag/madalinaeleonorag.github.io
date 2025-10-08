import { Component, input } from '@angular/core';
import { Certification } from '../../interfaces/certifications';

@Component({
  selector: 'app-certification',
  imports: [],
  templateUrl: './certification.html',
  styleUrl: './certification.scss',
})
export class CertificationComponent {
  certification = input.required<Certification>();
}
