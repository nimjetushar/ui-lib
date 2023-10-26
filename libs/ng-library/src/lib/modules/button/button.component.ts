import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

type BadgePosition = 'left' | 'right';
type ButtonType = 'primary' | 'secondary' | 'tertiary';
// <t-badge *ngIf="badge && bPos === 'left'" [class]="bPos" [badge]="badge"></t-badge>
// <t-badge *ngIf="badge && bPos === 'right'" [class]="bPos" [badge]="badge"></t-badge>

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
      {{ label }}
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    if (val) {
      if (['primary', 'secondary', 'tertiary'].includes(val)) {
        this.buttonType = val;
      } else {
        this.buttonType = 'primary';
        console.warn('invalid button type');
      }
    }
  }

  @HostBinding('class') hostClass = 't-button';

  buttonType: ButtonType = 'primary';
  bPos: BadgePosition = 'left';
}
