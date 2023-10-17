import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-library-documentation-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetupComponent {
  angularCdkDependency: string;

  constructor() {
    this.angularCdkDependency = '16.2.9';
  }
}
