import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isDefined } from 'tutility';

import { Severity } from '../../core/core.type';
import { badgeStyles } from './badge.constant';

@Component({
  selector: 't-badge',
  template: `<span
    *ngIf="hasValue"
    class="badge"
    [ngClass]="typeClassName"
    [ngStyle]="badgeStyles"
    [style.border-radius]="value && value.length !== 1 ? '10px' : '50%'"
    >{{ value }}</span
  >`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .success {
        background-color: var(--success-color) !important;
      }
      .error {
        background-color: var(--error-color) !important;
      }
      .warning {
        background-color: var(--attention-color) !important;
      }
    `,
  ],
  host: {
    class: 't-badge',
    '[attr.aria-hidden]': 'true',
  },
})
export class BadgeComponent implements OnChanges {
  @HostBinding('class')
  @Input()
  badge!: string;

  @Input({
    transform: (value: number | string) => value?.toString(),
  })
  value!: string;

  @Input()
  set type(type: Severity | null | undefined) {
    if (type) {
      switch (type) {
        case 'success':
          this.typeClassName = 'success';
          break;
        case 'error':
          this.typeClassName = 'error';
          break;
        case 'warn':
          this.typeClassName = 'warning';
          break;
      }
    }
  }

  readonly badgeStyles = badgeStyles;

  typeClassName?: string;
  hasValue = false;

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['value']?.currentValue;
    this.hasValue = isDefined(value) && value !== '';
  }
}
