import { Component, HostBinding, Input } from '@angular/core';

type BadgePosition = 'left' | 'right';
type ButtonType = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 't-button',
  template: `
    <button
      class="btn waves-effect waves-light {{ buttonType }}"
      [ngClass]="{
        disabled: disabled,
        'btn-large': isLarge,
        'btn-small': !isLarge
      }"
      [disabled]="disabled"
    >
      <t-badge
        *ngIf="badge && bPos === 'left'"
        [class]="bPos"
        [badge]="badge"
      ></t-badge>
      {{ label }}
      <t-badge
        *ngIf="badge && bPos === 'right'"
        [class]="bPos"
        [badge]="badge"
      ></t-badge>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() badge!: string;
  @Input() disabled = false;
  @Input() isLarge = false;
  @Input() set badgePosition(val: BadgePosition) {
    this.bPos = ['right', 'left'].includes(val) ? val : 'left';
  }

  @Input() set type(val: ButtonType) {
    this.buttonType = ['primary', 'secondary', 'tertiary'].includes(val)
      ? val
      : 'primary';
  }

  @HostBinding('class') hostClass = 't-button';

  buttonType: ButtonType = 'primary';
  bPos: BadgePosition = 'left';
}
