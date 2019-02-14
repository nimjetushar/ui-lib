import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from './nav.interface';

@Component({
  selector: 'lib-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() menuItems: Array<MenuItem> = [];
  @Input() set expanded(status: boolean) {
    this._expanded = status;
  }
  get expanded(): boolean {
    return this._expanded;
  }
  @Input() diableDefaultClick: boolean;

  @Output() sliderStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() menuClickTrigger: EventEmitter<{ isParent: boolean, menu: MenuItem, subMenu?: MenuItem }> = new EventEmitter();

  private _expanded: boolean;

  expandedMenu: number;
  selectedMenu: { idx: number, subMenuIdx: number } = <any>{};

  constructor(private _router: Router) { }

  toggleMenu(): void {
    this.expanded = !this.expanded;
    this.sliderStatus.emit(this.expanded);
  }

  onMenuClick(menu: MenuItem, index: number): void {
    if (this.expandedMenu === undefined || this.expandedMenu !== index) {
      this.expandedMenu = index;
      this.menuClickTrigger.emit({ isParent: true, menu: menu });
    } else {
      this.expandedMenu = undefined;
    }
  }

  onSubMenuClick(menu: MenuItem, subMenu: MenuItem, index: number, subIdx: number): void {
    this.selectedMenu = { idx: index, subMenuIdx: subIdx };

    if (!this.diableDefaultClick) {
      this._router.navigate([subMenu.route]);
      this.expanded = false;
    }
    this.menuClickTrigger.emit({ isParent: false, menu: menu, subMenu: subMenu });
  }
}
