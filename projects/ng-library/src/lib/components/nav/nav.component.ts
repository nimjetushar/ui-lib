import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface MenuItem {
  label: string;
  route?: string;
  badge?: string;
  children?: MenuItem[];
}

@Component({
  selector: 't-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];
  @Input() set expanded(status: boolean) {
    document.getElementsByTagName('body')[0].style.overflow = status ? 'hidden' : 'auto';
    this._expanded = status;
  }
  get expanded(): boolean {
    return this._expanded;
  }
  @Input() diableDefaultClick: boolean;

  @Output() sliderStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() menuClickTrigger: EventEmitter<{ isParent: boolean, menu: MenuItem, subMenu?: MenuItem }> = new EventEmitter();

  expandedMenu: number;
  selectedMenu: { idx: number, subMenuIdx: number } = {} as any;

  private _expanded: boolean;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((route: NavigationEnd) => {
      let i = 0, k = -1;
      const curRoute = route.url,
        menuHighlight = (menu: MenuItem) => {
          if (curRoute.includes(menu.route)) {
            this.selectedMenu = { idx: i, subMenuIdx: k };
            this.expandedMenu = i;
            return true;
          }
        };

      for (const menuItem of this.menuItems) {

        if (menuItem.route && !menuItem.children) {
          const dobreak = menuHighlight(menuItem);
          if (dobreak) {
            return;
          }
        }

        if (menuItem.children) {
          for (const subMenu of menuItem.children) {
            const dobreak = menuHighlight(subMenu);
            if (dobreak) {
              return;
            }
          }
        }
      }

      this.selectedMenu = {} as any;
      this.expandedMenu = undefined;
    });
  }

  toggleMenu(): void {
    this.expanded = !this.expanded;
    this.sliderStatus.emit(this.expanded);
  }

  onMenuClick(menu: MenuItem, index: number): void {
    if (menu.route) {
      this.selectedMenu = { idx: index, subMenuIdx: -1 };
      this._router.navigate([menu.route]);
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

  onSubMenuClick(menu: MenuItem, subMenu: MenuItem, index: number, subIdx: number): void {
    this.selectedMenu = { idx: index, subMenuIdx: subIdx };

    if (!this.diableDefaultClick) {
      this._router.navigate([subMenu.route]);
      this.toggleMenu();
    }
    this.menuClickTrigger.emit({ isParent: false, menu, subMenu });
  }
}
