import { Component, signal } from '@angular/core';
import { SvgIcon } from './components/svg-icon/svg-icon';
import { Chip } from './components/chip/chip';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SvgIcon, Chip],
})
export class App {
  readonly socialLinks = [
    { type: 'email', url: 'mailto:madalinaeleonora.gheorghe@gmail.com' },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/madalinaeleonorag/',
    },
    {
      type: 'github',
      url: 'https://github.com/madalinaeleonorag',
    },
    // TODO maybe change medium with another more dev related platform
    {
      type: 'medium',
      url: 'https://madalinaeleonorag.medium.com/',
    },
  ];

  downloadFile(type: 'CV' | 'Recommendations') {
    const fileName =
      type === 'CV'
        ? 'Madalina-Eleonora-Gheorghe-CV'
        : 'Madalina-Eleonora-Gheorghe-Recommendations';
    const fileUrl = `/${fileName}.pdf`;
    window.open(fileUrl, '_blank');
  }
}
