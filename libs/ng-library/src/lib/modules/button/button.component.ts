import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { buttonSizeInput, buttonTypeInput, getButtonClass } from './button.utility';
import { ButtonSize, ButtonType } from './type';

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
  @Input() label = '';
  @Input({ transform: buttonTypeInput }) type: ButtonType = 'primary';
  @Input() disabled = false;
  @Input({ transform: buttonSizeInput }) size: ButtonSize = 'normal';
  @Input() link = false;

  getButtonClass() {
    return getButtonClass({
      type: this.type,
      size: this.size,
      disabled: this.disabled,
      link: this.link,
    });
  }
}
