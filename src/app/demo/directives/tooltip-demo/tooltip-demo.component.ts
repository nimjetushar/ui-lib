import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownOptions, TooltipDirective } from '@fourjs/ng-library';

import { Options } from '../../../common';

@Component({
  selector: 'ui-library-documentation-tooltip-demo',
  templateUrl: './tooltip-demo.component.html',
  styleUrls: ['./tooltip-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipDemoComponent {
  readonly compSyntax: string[] = [
    `<div tTooltip="Content to be shown in the tooltip" [tooltipDisabled]="false"> Element on which tooltip is added </div>`,
  ];

  readonly options: Options<TooltipDirective> = {
    name: 'tTooltip',
    componentType: 'Directive',
    options: [
      {
        parameter: 'tTooltip',
        type: 'string | TooltipContent',
        description: 'Content to be displayed inside tooltip',
      },
      {
        parameter: 'tooltipDisabled',
        type: 'boolean',
        description: 'Disable tooltip',
      },
      {
        parameter: 'tooltipPosition',
        type: 'top | bottom | left | right',
        default: 'bottom',
        description: 'Tooltip placement',
      },
    ],
  };

  readonly tooltipOption: DropdownOptions<string>[] = [
    { label: 'top', value: 'top' },
    { label: 'right', value: 'right' },
    { label: 'bottom', value: 'bottom' },
    { label: 'left', value: 'left' },
  ];
  tooltipPosition = 'top' as const;
}
