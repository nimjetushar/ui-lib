import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isDefined } from 'tutility';

import { Severity } from '../../core/core.type';

export const badgeStyles = {
  display: 'inline-block',
  'min-width': '1.5rem',
  height: '1.5rem',
  'line-height': '1.5rem',
  padding: '0',
  'font-size': '0.75rem',
  'text-align': 'center',
  color: '#fff',
  'background-color': 'var(--primary-color)',
  'border-radius': '50%',
};

@Component({
  selector: 't-badge',
  template: `<span *ngIf="hasValue" class="badge" [ngClass]="typeClassName" [ngStyle]="badgeStyles">{{ value }}</span>`,
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

  @Input() value!: number | string;

  @Input() set type(type: Severity | null | undefined) {
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
    this.hasValue = isDefined(changes['value']?.currentValue);
  }
}
