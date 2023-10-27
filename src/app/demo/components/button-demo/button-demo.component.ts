import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@fourjs/ng-library';

import { DemoParameters, Options } from '../../../common';

@Component({
  selector: 'ui-library-documentation-button-demo',
  templateUrl: './button-demo.component.html',
  styleUrls: ['./button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent implements DemoParameters<ButtonComponent> {
  readonly componentSyntax: string[] = ['<t-button label="Home" type="primary" />'];
  readonly importSyntax = 'import { ButtonModule } from "@fourjs/ng-library";';

  readonly options: Options<ButtonComponent> = {
    name: 't-button',
    options: [
      {
        parameter: 'label',
        type: 'string',
        description: 'Button label',
      },
      {
        parameter: 'type',
        type: 'primary | secondary',
        description: 'Type of button, valid values are primary, secondary',
        default: 'primary',
      },
      {
        parameter: 'size',
        type: 'normal | large | small',
        default: 'normal',
        description: 'Increases button size when true',
      },
      {
        parameter: 'disabled',
        default: 'false',
        type: 'boolean',
        description: 'Disabled button',
      },
    ],
  };

  clickHandler(): void {
    alert('button clicked !!!!');
  }
}
