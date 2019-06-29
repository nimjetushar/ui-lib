import { Component } from '@angular/core';
import { Options } from '../../common/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  compSyntax: string = `<t-checkbox label="Checkbox" (handleChange)="handleChange($event)"></t-checkbox> \n
  <t-checkbox label="Checkbox" disabled="true"></t-checkbox>`;

  public options: Options = {
    name: 't-checkbox',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'checkbox label'
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        desc: 'Disable button'
      }
    ],
    methods: [
      {
        method: 'handleChange',
        param: ['event: boolean'],
        desc: 'triggers event on checkbox value change'
      }
    ]
  };

  constructor() { }

  handleChange(event: any): void {
    console.log(event);
  }
}
