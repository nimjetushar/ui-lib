import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { MenuItem } from '../types';

@Component({
  selector: 't-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  @Input() set expanded(status: boolean) {
    document.getElementsByTagName('body')[0].style.overflow = status
      ? 'hidden'
      : 'auto';
    this._expanded = status;
  }
  get expanded(): boolean {
    return this._expanded;
  }

  @Input() diableDefaultClick = false;

  @Output() sliderStatus = new EventEmitter<boolean>();
  @Output() menuClickTrigger = new EventEmitter<{
    isParent: boolean;
    menu: MenuItem;
    subMenu?: MenuItem;
  }>();

  expandedMenu?: number;
  selectedMenu: { idx?: number; subMenuIdx?: number } = {};

  private _expanded = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        let i = 0,
          k = -1;
        const curRoute = route.url,
          menuItemLen = this.menuItems.length;
        const menuHighlight = (menu: MenuItem): boolean => {
          if (menu.route && curRoute.includes(menu.route)) {
            this.selectedMenu = { idx: i, subMenuIdx: k };
            this.expandedMenu = i;
            return true;
          }
          return false;
        };

        for (i = 0; i < menuItemLen; i++) {
          const menuItem = this.menuItems[i];
          if (menuItem.route && !menuItem.children) {
            const dobreak = menuHighlight(menuItem);
            if (dobreak) {
              return;
            }
          }

          if (menuItem.children) {
            const subMenuLen = menuItem.children.length;
            for (k = 0; k < subMenuLen; k++) {
              const subMenu = menuItem.children[k];
              const dobreak = menuHighlight(subMenu);
              if (dobreak) {
                return;
              }
            }
          }
        }

        this.selectedMenu = {};
        this.expandedMenu = undefined;
      }
    });
  }

  toggleMenu(): void {
    this.expanded = !this.expanded;
    this.sliderStatus.emit(this.expanded);
  }

  onMenuClick(menu: MenuItem, index: number): void {
    if (menu.route) {
      this.selectedMenu = { idx: index, subMenuIdx: -1 };
      this.router.navigate([menu.route]);
      this.toggleMenu();
      return;
    }
    if (this.expandedMenu === undefined || this.expandedMenu !== index) {
      this.expandedMenu = index;
      this.menuClickTrigger.emit({ isParent: true, menu });
    } else {
      this.expandedMenu = undefined;
    }
  }

  onSubMenuClick(
    menu: MenuItem,
    subMenu: MenuItem,
    index: number,
    subIdx: number
  ): void {
    this.selectedMenu = { idx: index, subMenuIdx: subIdx };

    if (!this.diableDefaultClick) {
      this.router.navigate([subMenu.route]);
      this.toggleMenu();
    }
    this.menuClickTrigger.emit({ isParent: false, menu, subMenu });
  }
}
