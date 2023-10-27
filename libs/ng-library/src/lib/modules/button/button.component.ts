import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { buttonSizeInput, buttonTypeInput } from './input-transform';
import { ButtonSize, ButtonType } from './type';

const buttonType = {
  primary: 'primary',
  secondary: 'secondary',
} as const;

const buttonSize = {
  normal: 'normal',
  large: 'large',
  small: 'small',
} as const;

@Component({
  selector: 't-button',
  template: `
    <button [ngClass]="getButtonClass()" [disabled]="disabled">
      {{ label }}
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 't-button',
  },
})
export class ButtonComponent {
  @Input() label?: string;
  @Input({ transform: buttonTypeInput }) type: ButtonType = 'primary';
  @Input() disabled = false;
  @Input({ transform: buttonSizeInput }) size: ButtonSize = 'normal';
  @Input() link = false;

  getButtonClass() {
    const type = `btn-${buttonType[this.type]}`;
    const size = `btn-${buttonSize[this.size]}`;
    return {
      btn: true,
      disabled: this.disabled,
      [type]: true,
      [size]: true,
      'btn-link': this.link,
    };
  }
}
