import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@fourjs/ng-library';

import { DemoParameters, Options, getComponentParameter } from '../../../common';

@Component({
  selector: 'ui-library-documentation-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent implements DemoParameters<ButtonComponent> {
  readonly componentSyntax: string[] = ['<t-button label="Home" type="primary" />'];
  readonly importSyntax = 'import { ButtonModule } from "@fourjs/ng-library";';
  readonly options = getButtonComponentOptions();

  clickHandler(): void {
    alert('button clicked !!!!');
  }
}

const getButtonComponentOptions = (): Options<ButtonComponent> => {
  const instance = new ButtonComponent();
  const getParameter = getComponentParameter(instance);

  return {
    name: 't-button',
    options: [
      getParameter({
        parameter: 'label',
        description: 'Button label',
      }),
      getParameter({
        parameter: 'type',
        type: 'primary | secondary',
        description: 'Type of button, valid values are primary, secondary',
      }),
      getParameter({
        parameter: 'size',
        type: 'normal | large | small',
        description: 'Increases button size when true',
      }),
      getParameter({
        parameter: 'disabled',
        description: 'Disabled button',
      }),
      getParameter({
        parameter: 'link',
        description: 'Add a link style to the button.',
      }),
    ],
  };
};
