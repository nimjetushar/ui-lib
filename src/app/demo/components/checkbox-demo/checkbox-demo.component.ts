import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IOptions } from '../../common';

@Component({
  selector: 'ui-library-documentation-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  styleUrls: ['./checkbox-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoComponent {
  readonly compSyntax = [
    `<t-checkbox name="checkbox" label="Checkbox" [(value)]="modelValue"></t-checkbox>`,
    `<t-checkbox label="Checkbox" disabled="true"></t-checkbox>`,
  ];

  readonly options: IOptions = {
    name: 't-checkbox',
    options: [
      {
        parameter: 'label',
        type: 'string',
        description: 'Checkbox label',
      },
      {
        parameter: 'name',
        type: 'string',
        description: 'Checkbox name',
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        description: 'Disable component',
      },
      {
        parameter: 'readonly',
        default: 'false',
        type: 'boolean',
        description: 'Component cannot be edited',
      },
    ],
  };

  modelValue = true;
}
