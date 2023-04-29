import { Input, Directive } from '@angular/core';

import { TooltipPosition } from './types';

@Directive()
export class Tooltip {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() tooltip: any;
  @Input()
  set tooltipPosition(value: TooltipPosition | string) {
    if (value) {
      this._tooltipPosition = ['right', 'left', 'top', 'bottom'].includes(value)
        ? (value as TooltipPosition)
        : 'top';
    }
  }
  get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }

  private _tooltipPosition: TooltipPosition = 'top';
}
