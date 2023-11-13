import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckboxComponent } from '@fourjs/ng-library';

import { Options, getComponentParameter } from '../../../common';

@Component({
  selector: 'ui-library-documentation-checkbox-demo',
  templateUrl: './checkbox-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemoComponent implements OnInit {
  readonly compSyntax = [
    `<t-checkbox name="checkbox" label="Checkbox" [binary]="true" [(model)]="modelValue" />`,
    `<t-checkbox name="checkbox" label="Checkbox" [value]="hello" [(model)]="modelValue" />`,
    `<t-checkbox label="Checkbox" disabled="true" />`,
  ];
  readonly options = getCheckboxComponentOptions();
  readonly formGroup = new FormGroup({
    city: new FormControl<string | null>(null),
  });
  readonly formGroupCodeSample = `
  <form [formGroup]="formGroup">
    <t-checkbox label="Pune" value="Pune" name="city" formControlName="city" />
  </form>`;
  readonly customLabelCodeSample = `<label for="customLabel" style="margin-right: 0.5em">Custom label</label>
  <t-checkbox value="Pune" name="city" inputId="customLabel" />`;

  modelValue = true;

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(value => console.log('form group value change', value));
  }

  modelChangeHandler(value: boolean | null) {
    console.log('model change handler', value);
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
      getParameter({
        parameter: 'inputId',
        description: 'Identifier of the focus input to match a label defined for the component.',
      }),
    ],
  };
};
