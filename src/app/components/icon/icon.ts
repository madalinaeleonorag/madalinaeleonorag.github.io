import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  name = input.required<string>();
  color = input<'primary' | 'white'>('primary');

  public readonly icons = {
    EMAIL: 'email',
    FACEBOOK: 'facebook',
    GITHUB: 'github',
    INSTAGRAM: 'instagram',
    LINKEDIN: 'linkedin',
    MEDIUM: 'medium',
    SETTING: 'setting',
  };
}
