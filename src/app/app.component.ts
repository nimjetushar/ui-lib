import { Component } from '@angular/core';

import { MenuItem } from 'ui-library';
import { NavModel } from './nav-model';
import { AppName } from './constants/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: Array<MenuItem>;
  appTitle: string = AppName;
  expanded: boolean;

  constructor() {
    const navModel = new NavModel();
    this.menuItems = navModel.nav;
  }

  sideBarToggled(navStatus: boolean): void {
    this.expanded = navStatus;
  }
}
