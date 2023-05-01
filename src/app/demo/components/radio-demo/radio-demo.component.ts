import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IOptions } from '../../../common';

@Component({
  selector: 'ui-library-documentation-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioDemoComponent {
  groupVal = 'groupA';
  individualVal: boolean | undefined = false;

  readonly compSyntax: string[] = [
    `<t-radio label="Radio" name="radio" [(model)]="model"></t-radio>`,
  ];

  readonly options: IOptions = {
    name: 't-radio',
    options: [
      {
        parameter: 'label',
        type: 'string',
        description: 'Radio button label',
      },
      {
        parameter: 'name',
        type: 'string',
        description: 'Radio button name',
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        description: 'Disable component',
      },
    ],
  };

  clearRadio(): void {
    this.individualVal = undefined;
  }
}
