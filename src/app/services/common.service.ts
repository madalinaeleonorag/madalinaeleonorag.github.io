import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  openLinkNewTab(link: string) {
    window.open(link, '_blank');
  }
}
