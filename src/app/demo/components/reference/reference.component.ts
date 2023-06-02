import { ChangeDetectionStrategy, Component } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let require: any;
const packageJson = require('../../../../../package.json');

@Component({
  selector: 'ui-library-documentation-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
  libLists: { name: string; url: string; icon: string }[] = [];

  constructor() {
    let angularversion = packageJson.dependencies['@angular/core'];
    angularversion = angularversion.replace(/[~^]/gi, '');

    this.libLists = [
      {
        name: `Angular (${angularversion})`,
        url: 'https://angular.io/api',
        icon: 'pi-google',
      },
      {
        name: 'Grid system',
        url: 'https://nimjetushar.github.io/grid-css/',
        icon: 'pi-list',
      }
    ];
  }
}
