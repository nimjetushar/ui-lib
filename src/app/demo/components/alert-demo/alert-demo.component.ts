import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlertComponent, AlertTypes, DropdownOptions } from '@fourjs/ng-library';

import { DemoParameters, Options, getComponentParameter } from '../../../common';
import { SeverityTypes } from '../../constant/constant';

@Component({
  selector: 'ui-library-documentation-alert-demo',
  templateUrl: './alert-demo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDemoComponent implements DemoParameters<AlertComponent> {
  readonly dropdownOption: DropdownOptions<AlertTypes>[] = (['info', 'success', 'error', 'warning'] as AlertTypes[])
    .sort()
    .map(i => ({
      label: i,
      value: i,
    }));
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
  const instance = new AlertComponent();
  const getParameter = getComponentParameter(instance);

  return {
    name: 't-alert',
    options: [
      getParameter({ parameter: 'type', description: 'Alert type', type: SeverityTypes }),
      getParameter({ parameter: 'header', description: 'Alert header/title' }),
      getParameter({ parameter: 'message', description: 'Alert message' }),
      getParameter({ parameter: 'hideIcon', description: 'Hide alert icon' }),
      getParameter({ parameter: 'enableClose', description: 'Dispaly close button' }),
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
