import { Component } from '@angular/core';

import { MenuItem } from 'ui-library';
import { NavModel } from './nav-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuItems: Array<MenuItem>;

  constructor() {
    const navModel = new NavModel();
    this.menuItems = navModel.nav;
  }
}
