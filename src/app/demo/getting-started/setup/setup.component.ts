import { Component } from '@angular/core';
import * as packageJson from 'libs/ng-library/package.json';

@Component({
  selector: 'ui-library-documentation-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  primeDependency: string;
  angularCdkDependency: string;

  constructor() {
    this.primeDependency = packageJson.peerDependencies.primeng;
    this.angularCdkDependency = packageJson.peerDependencies['@angular/cdk'];
  }
}
