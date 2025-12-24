import {
  AfterViewInit,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CERTIFICATIONS } from '../../../assets/infos/certifications';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CertificationsComponent implements AfterViewInit {
  readonly CERTIFICATIONS = CERTIFICATIONS;

  commonService = inject(CommonService);

  ngAfterViewInit() {
    const swiper = new Swiper('.cert-swiper', {
      modules: [Autoplay],
      loop: true,
      speed: 3000,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 40 },
        1400: { slidesPerView: 6, spaceBetween: 50 },
      },
    });
  }

  openLink(link: string) {
    this.commonService.openLinkNewTab(link);
  }
}
