import { Component } from '@angular/core';
import { Options as DemoOptions } from '../../common/demo-wrapper/demo-wrapper.component';
import { Fields, Options } from './../../../../../projects/ui-library/src/lib/components/dynamic-fields/dynamic-fields.component';

@Component({
  selector: 'app-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsComponent {

  public compSyntax: string = '<t-dynamic-fields [fields]="field" [options]="option" ></t-dynamic-fields>';

  public options: DemoOptions = {
    name: 't-dynamic-fields',
    options: []
  };

  field: Fields[] = [
    {
      label: 'Name',
      type: 'text',
      model: 'name'
    },
    {
      label: 'New model',
      type: 'checkbox',
      model: 'isNew'
    },
    {
      label: 'Brand',
      type: 'select',
      model: 'brand',
      options: 'brand'
    }
  ];

  option: Options = {
    dropdown: {
      brand: [
        {
          label: 'Maruti',
          value: 'maruti'
        },
        {
          label: 'Hyundai',
          value: 'hyundai'
        },
        {
          label: 'Ford',
          value: 'ford'
        }
      ]
    }
  }

  constructor() { }
}
