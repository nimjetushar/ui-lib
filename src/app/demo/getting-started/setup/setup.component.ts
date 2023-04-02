import { Component } from '@angular/core';

@Component({
  selector: 'ui-library-documentation-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  primeDependency: string;
  angularCdkDependency: string;

  constructor() {
    this.primeDependency = '15.2.1';
    this.angularCdkDependency = '15.2.5';
  }
}
