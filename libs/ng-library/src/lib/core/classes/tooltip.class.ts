import { Directive, Input } from '@angular/core';

import { TooltipPosition } from '../../modules/tooltip';

@Directive()
export class Tooltip {
  @Input() tooltip: any;
  @Input()
  set tooltipPosition(value: TooltipPosition) {
    if (value) {
      this._tooltipPosition = ['right', 'left', 'top', 'bottom'].includes(value) ? value : 'top';
    }
  }
  get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }

  private _tooltipPosition: TooltipPosition = 'top';
}
