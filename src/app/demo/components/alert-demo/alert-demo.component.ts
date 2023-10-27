import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent, AlertTypes, DropdownOptions } from '@fourjs/ng-library';

import { DemoParameters, Options } from '../../../common';
import { SeverityTypes } from '../../../constants/constant';

@Component({
  selector: 'ui-library-documentation-alert-demo',
  templateUrl: './alert-demo.component.html',
  styleUrls: ['./alert-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoComponent implements DemoParameters<AlertComponent> {
  readonly dropdownOption: DropdownOptions<AlertTypes>[] = [
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
  readonly componentSyntax = [
    `<t-alert type="success" message="message........" />`,
    `<t-alert type="error" title="Title Error" message="message........" />`,
    `<t-alert type="info" title="Title Info" message="message........" [enableClose]="true" />`,
    `<t-alert type="info" title="Title Info" message="message........" [hideIcon]="true"><p>html content...</p></t-alert>`,
  ];
  readonly importSyntax = 'import { AlertModule } from "@fourjs/ng-library";';
  readonly options = getAlertComponentOptions();

  dropdownValue = this.dropdownOption[0].value;

  onClose(status: boolean): void {
    console.info('alert close triggered', { status });
  }
}

const getAlertComponentOptions = (): Options<AlertComponent> => {
  return {
    name: 't-alert',
    options: [
      {
        parameter: 'type',
        type: SeverityTypes,
        description: 'Alert type',
        default: 'info',
      },
      {
        parameter: 'header',
        type: `string`,
        description: 'Alert header/title',
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
        default: 'false',
      },
      {
        parameter: 'enableClose',
        type: `boolean`,
        description: 'Dispaly close button',
        default: 'false',
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
};
