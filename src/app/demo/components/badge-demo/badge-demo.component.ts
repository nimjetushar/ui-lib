import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeComponent } from '@fourjs/ng-library';

import { DemoParameters, Options, getComponentParameter } from '../../../common';
import { SeverityTypes } from '../../../constants/constant';

@Component({
  selector: 'ui-library-documentation-badge-demo',
  templateUrl: './badge-demo.component.html',
  styleUrls: ['./badge-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemoComponent implements DemoParameters<BadgeComponent> {
  readonly componentSyntax = [`<t-badge value="2" />`, `<span tBadge="20">content....</span>`];
  readonly importSyntax = `import { BadgeModule } from "@fourjs/ng-library";`;
  readonly options = getBadgeComponentOptions();

  badgeValue: string | number = '';

  updateBadge() {
    if (this.badgeValue === '') {
      this.badgeValue = 0;
      return;
    }
    this.badgeValue = (this.badgeValue as number) + 1;
  }
}

const getBadgeComponentOptions = (): Options<BadgeComponent> => {
  const instance = new BadgeComponent();
  const getParameter = getComponentParameter(instance);

  return {
    name: 't-badge',
    options: [
      {
        parameter: 'value',
        type: 'string | number',
        description: 'Value displayed inside badge',
      },
      getParameter({ parameter: 'type', description: 'Badge with different severity', type: SeverityTypes }),
      {
        parameter: 'type',
        type: SeverityTypes,
        default: 'info',
        description: 'Badge with different severity',
      },
    ],
  };
};
