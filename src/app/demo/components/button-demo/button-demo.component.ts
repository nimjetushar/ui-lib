import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IOptions } from '../../../common';

@Component({
  selector: 'ui-library-documentation-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent {
  compSyntax: string[] = [
    '<t-button label="Home" type="primary" badge="pi-home"></t-button>',
  ];

  options: IOptions = {
    name: 't-button',
    options: [
      {
        parameter: 'label',
        type: 'string',
        description: 'Button label',
      },
      {
        parameter: 'type',
        type: 'string',
        description:
          'Type of button, valid values are primary, secondary, tertiary',
        default: 'primary',
      },
      {
        parameter: 'badge',
        type: 'string',
        description: 'Icon class to render badge',
      },
      {
        parameter: 'badgePosition',
        type: 'string',
        default: 'left',
        description: 'Badge position in button, valid values are right, left',
      },
      {
        parameter: 'isLarge',
        type: 'boolean',
        default: 'false',
        description: 'Increases button size when true',
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        description: 'Disabled button',
      },
    ],
  };

  clickHandler(): void {
    alert('button clicked !!!!');
  }
}
