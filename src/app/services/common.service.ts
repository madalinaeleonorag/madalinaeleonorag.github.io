import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  /**
   * Checking if an image is reachable
   * @param url string with the url of the image to be checked
   * @returns either the url of the image, or the path to the fallback image
   */
  public async returnImageURL(url: string): Promise<string> {
    const res: any = await fetch(url, { method: 'HEAD' });
    return res.ok ? url : './../../assets/image-not-found.png';
  }

  public openLink(link: string): void {
    window.open(link, '_blank');
  }
}
