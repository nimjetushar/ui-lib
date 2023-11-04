import { Directive, Input } from '@angular/core';

import { Severity } from '../../core/core.type';

@Directive()
export class Badge {
  @Input() type: Severity = 'info';

  typeClassName?: string;

  protected setBadgeType(type: Severity | null | undefined) {
    if (type) {
      switch (type) {
        case 'success':
          this.typeClassName = 'success';
          break;
        case 'error':
          this.typeClassName = 'error';
          break;
        case 'warning':
          this.typeClassName = 'warning';
          break;
      }
    }
  }
}
