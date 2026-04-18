import { Component, input, output, signal } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'lib-select',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './select.html',
  styleUrl: './select.scss',
})
export class SelectComponent {
  options = input.required<string[]>();
  value = input<string>('');
  placeholder = input<string>('Select...');

  valueChange = output<string>();

  isOpen = signal(false);

  selectOption(selectedValue: string) {
    this.valueChange.emit(selectedValue);
    this.isOpen.set(false);
  }
}
