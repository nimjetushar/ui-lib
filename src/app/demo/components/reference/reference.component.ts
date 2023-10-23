import { ChangeDetectionStrategy, Component } from '@angular/core';

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
        icon: 'fa-brands fa-angular color-angular fa-lg',
      },
      {
        name: 'Grid system',
        url: 'https://nimjetushar.github.io/grid-css/',
        icon: 'fa-solid fa-list fa-lg',
      },
      {
        name: 'Font Awesome',
        url: 'https://fontawesome.com/search',
        icon: 'fa-brands fa-font-awesome color-fontawesome fa-lg',
      },
    ];
  }
}
