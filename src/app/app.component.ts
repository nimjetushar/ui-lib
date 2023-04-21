import { Component } from '@angular/core';
import { MenuItem } from '@fourjs/ng-library';

import { APPNAME } from './constants/config';
import { NavModel } from './nav-model';

@Component({
  selector: 'ui-library-documentation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems: MenuItem[];
  appTitle = APPNAME;
  expanded = false;

  constructor() {
    const navModel = new NavModel();
    this.menuItems = navModel.nav;
  }

  sideBarToggled(navStatus: boolean): void {
    this.expanded = navStatus;
  }
}
