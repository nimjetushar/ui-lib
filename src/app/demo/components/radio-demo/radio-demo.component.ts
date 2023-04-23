import { Component } from '@angular/core';
import { IOptions } from '../../demo-base/demo-wrapper/demo-wrapper.component';

@Component({
  selector: 'app-radio-demo',
  templateUrl: './radio-demo.component.html',
  styleUrls: ['./radio-demo.component.scss'],
})
export class RadioDemoComponent {
  groupVal = 'groupA';
  individualVal: boolean;

  compSyntax: string[] = [
    `<t-radio label="Radio" name="radio" [(model)]="model"></t-radio>`,
  ];

  options: IOptions = {
    name: 't-radio',
    options: [
      {
        parameter: 'label',
        type: 'string',
        desc: 'Radio button label',
      },
      {
        parameter: 'name',
        type: 'string',
        desc: 'Radio button name',
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        desc: 'Disable component',
      },
    ],
  };

  clearRadio(): void {
    this.individualVal = undefined;
  }
}
