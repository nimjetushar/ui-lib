import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
  DynamicFieldButtonOptions,
  DynamicFieldDisabledOptions,
  DynamicFieldDropdownOptions,
  DynamicFields,
  DynamicFieldsComponent,
} from '@fourjs/ng-library';

import { IOptions } from '../../../common';

type OutputModel = {
  name?: string;
  isNew?: boolean;
  brand?: string;
};

@Component({
  selector: 'ui-library-documentation-dynamic-fields-demo',
  templateUrl: './dynamic-fields-demo.component.html',
  styleUrls: ['./dynamic-fields-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFieldsDemoComponent {
  @ViewChild(DynamicFieldsComponent, { static: true })
  dyFieldComp!: DynamicFieldsComponent;

  readonly compSyntax: string[] = [
    `<t-dynamic-fields [fields]="field" [data]="data" [dropdownOptions]="dropdownOptions" [disabledFields]="disabledOptions" [buttonOptions]="buttonOptions" (primaryHandler)="onSearch($event)" (secondaryHandler)="onReset($event)" ></t-dynamic-fields>`,
  ];

  readonly options: IOptions = {
    name: 't-dynamic-fields',
    options: [
      {
        parameter: 'fields',
        type: 'DynamicFields[]',
        description: 'Array of object to display fields',
      },
      {
        parameter: 'data',
        type: 'DynamicFieldDataModel',
        description: 'Object which initialize the fields with default value.',
      },
      {
        parameter: 'dropdownOptions',
        type: 'DynamicFieldDropdownOptions',
        description: 'Dropdown options used to initalize dropdown if present in fields',
      },
      {
        parameter: 'disabledFields',
        type: 'DynamicFieldDisabledOptions',
        description: 'Disables field if specified true',
      },
      {
        parameter: 'disableDefaultAction',
        type: 'boolean',
        description: 'Hides default action buttons',
      },
      {
        parameter: 'buttonOptions',
        type: 'DynamicFieldButtonOptions',
        description: 'Customize button labels and its properties.',
      },
    ],
    methods: [
      {
        method: 'primaryHandler',
        parameter: 'DynamicFieldDataModel',
        description: 'Emits fields data to parent component',
      },
      {
        method: 'secondaryHandler',
        parameter: 'DynamicFieldDataModel',
        description: 'Emits fields data to parent component',
      },
    ],
  };

  readonly field: DynamicFields<keyof OutputModel>[] = [
    {
      label: 'Car Name',
      type: 'text',
      model: 'name',
      name: 'carName',
    },
    {
      label: 'New model',
      type: 'checkbox',
      model: 'isNew',
      name: 'newModel',
    },
    {
      label: 'Select Brand',
      type: 'select',
      model: 'brand',
      name: 'selectBrand',
    },
  ];

  readonly dropdownOptions: DynamicFieldDropdownOptions<OutputModel> = {
    brand: [
      {
        label: 'Maruti',
        value: 'maruti',
      },
      {
        label: 'Hyundai',
        value: 'hyundai',
      },
      {
        label: 'Ford',
        value: 'ford',
      },
    ],
  };

  readonly disabledOptions: DynamicFieldDisabledOptions<OutputModel> = {};

  readonly buttonOptions: DynamicFieldButtonOptions = {
    primaryLabel: 'Submit',
  };

  output: OutputModel = {
    isNew: true,
  };

  onSearch(param: OutputModel): void {
    console.log(param);
    this.output = Object.assign({}, param);
  }

  onReset(param: OutputModel): void {
    console.log(param);
    this.output = {};
    this.dyFieldComp.reset();
  }
}
