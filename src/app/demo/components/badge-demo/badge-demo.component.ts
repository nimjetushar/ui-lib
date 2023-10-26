import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from '@fourjs/ng-library';

import { Options } from '../../../common';
import { SeverityTypes } from '../../../constants/constant';

@Component({
  selector: 'ui-library-documentation-badge-demo',
  templateUrl: './badge-demo.component.html',
  styleUrls: ['./badge-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemoComponent {
  readonly compSyntax = [`<t-badge value="2" />`, `<span tBadge="20">content....</span>`];
  readonly importSyntax = `import { BadgeModule } from '@fourjs/ng-library';`;

  readonly options: Options<BadgeComponent> = {
    name: 't-badge',
    options: [
      {
        parameter: 'value',
        type: 'string | number',
        description: 'Value displayed inside badge',
      },
      {
        parameter: 'type',
        type: SeverityTypes,
        default: 'info',
        description: 'Badge with different severity',
      },
    ],
  };

  badgeValue = '';
}
