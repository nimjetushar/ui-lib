import { Component } from '@angular/core';
import { MenuItem } from '@fourjs/ng-library';

import { APPNAME } from './constants/config';
import { getNavigationModel } from './nav-model';

@Component({
  selector: 'ui-library-documentation-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly menuItems: MenuItem[];
  readonly appTitle = APPNAME;
  expanded = false;

  constructor() {
    this.menuItems = getNavigationModel();
  }

  sideBarToggled(navStatus: boolean): void {
    this.expanded = navStatus;
  }
}
