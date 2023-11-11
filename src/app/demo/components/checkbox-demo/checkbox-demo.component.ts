import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckboxComponent } from '@fourjs/ng-library';

import { Options, getComponentParameter } from '../../../common';

@Component({
  selector: 'ui-library-documentation-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoComponent {
  readonly compSyntax = [
    `<t-checkbox name="checkbox" label="Checkbox" [binary]="true" [(model)]="modelValue" />`,
    `<t-checkbox name="checkbox" label="Checkbox" [value]="hello" [(model)]="modelValue" />`,
    `<t-checkbox label="Checkbox" disabled="true" />`,
  ];

  readonly options = getCheckboxComponentOptions();

  modelValue = true;

  modelChangeHandler(event: any) {
    console.log(event);
  }
}

const getCheckboxComponentOptions = (): Options<CheckboxComponent> => {
  const instance = new CheckboxComponent();
  const getParameter = getComponentParameter(instance);

  return {
    name: 't-checkbox',
    options: [
      getParameter({
        parameter: 'value',
        description: 'Value of the checkbox.',
        type: 'any',
      }),
      getParameter({
        parameter: 'name',
        description: 'Name of the checkbox group.',
      }),
      getParameter({
        parameter: 'disabled',
        description: 'Disable element',
      }),
      getParameter({
        parameter: 'binary',
        description: 'Allows to select a boolean value instead of multiple values.',
      }),
      getParameter({
        parameter: 'label',
        description: 'Checkbox label',
      }),
    ],
  };
};
