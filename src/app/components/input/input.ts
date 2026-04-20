import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  type = input<string>('text');
  placeholder = input<string>('');
  value = input<string>('');

  valueChange = output<string>();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
