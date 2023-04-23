import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AlertTypes, DropdownOptions } from '@fourjs/ng-library';

import { IOptions } from '../../common';

@Component({
  selector: 'ui-library-documentation-alert-demo',
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoComponent implements OnInit {
  hideAlert!: boolean;
  dropdownOption: DropdownOptions<AlertTypes>[] = [
    {
      label: 'info',
      value: 'info',
    },
    {
      label: 'success',
      value: 'success',
    },
    {
      label: 'error',
      value: 'error',
    },
    {
      label: 'warn',
      value: 'warn',
    },
  ];
  dropdownValue = 'info';
  compSyntax!: string[];
  options!: IOptions;

  ngOnInit(): void {
    this.compSyntax = [
      `<t-alert type="success" message="message........"></t-alert>`,
      `<t-alert type="error" title="Title Error" message="message........"></t-alert>`,
      `<t-alert type="info" title="Title Info" message="message........" [enableClose]="true"></t-alert>`,
      `<t-alert type="info" title="Title Info" message="message........" [hideIcon]="true"></t-alert>`,
    ];

    this.options = {
      name: 't-alert',
      options: [
        {
          parameter: 'type',
          type: `success | error | warn | info`,
          description: 'Alert type',
          default: 'info',
        },
        {
          parameter: 'title',
          type: `string`,
          description: 'Alert title',
        },
        {
          parameter: 'message',
          type: `string`,
          description: 'Alert message',
        },
        {
          parameter: 'hideIcon',
          type: `boolean`,
          description: 'Hide alert icon',
          default: false,
        },
        {
          parameter: 'enableClose',
          type: `boolean`,
          description: 'Dispaly close button',
          default: false,
        },
      ],
      methods: [
        {
          method: 'onCloseClick',
          parameter: 'boolean',
          description: `Event triggered on click of close button, close button is just place holder actual logic need's to be implemented using this`,
        },
      ],
    };
  }

  onClose(status: boolean): void {
    this.hideAlert = status;
  }
}
