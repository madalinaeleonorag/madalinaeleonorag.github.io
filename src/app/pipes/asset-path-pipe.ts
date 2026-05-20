import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetPath',
  standalone: true,
})
export class AssetPathPipe implements PipeTransform {
  transform(value: string, folder: string = ''): string {
    if (!value) {
      return '';
    }

    if (value.startsWith('http') || value.startsWith('data:') || value.startsWith('/assets/')) {
      return value;
    }

    const cleanFolder = folder.replace(/^\/|\/$/g, '');
    let cleanValue = value;

    if (cleanValue.startsWith('assets/')) {
      cleanValue = cleanValue.substring(7);
    }

    cleanValue = cleanValue.replace(/^\/|\/$/g, '');

    return cleanFolder ? `/assets/${cleanFolder}/${cleanValue}` : `/assets/${cleanValue}`;
  }
}
