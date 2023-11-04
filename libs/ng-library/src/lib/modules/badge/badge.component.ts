import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isDefined } from 'tutility';

import { Badge } from './badge.class';

@Component({
  selector: 't-badge',
  template: `
    <span
      *ngIf="hasValue"
      class="badge"
      [ngClass]="typeClassName"
      [style.border-radius]="value && value.length !== 1 ? '10px' : '50%'"
    >
      {{ value }}
    </span>
  `,
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
export class BadgeComponent extends Badge implements OnChanges {
  @Input({
    transform: (value: number | string) => value?.toString(),
  })
  value = '';

  hasValue = false;

  ngOnChanges(changes: SimpleChanges): void {
    const value = changes['value']?.currentValue;
    this.hasValue = isDefined(value) && value !== '';

    this.setBadgeType(this.type);
  }
}
