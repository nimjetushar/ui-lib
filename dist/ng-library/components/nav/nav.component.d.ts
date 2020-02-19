import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface MenuItem {
    label: string;
    route?: string;
    badge?: string;
    children?: MenuItem[];
}
export declare class NavComponent implements OnInit {
    private _router;
    menuItems: MenuItem[];
    expanded: boolean;
    diableDefaultClick: boolean;
    sliderStatus: EventEmitter<boolean>;
    menuClickTrigger: EventEmitter<{
        isParent: boolean;
        menu: MenuItem;
        subMenu?: MenuItem;
    }>;
    expandedMenu: number;
    selectedMenu: {
        idx: number;
        subMenuIdx: number;
    };
    private _expanded;
    constructor(_router: Router);
    ngOnInit(): void;
    toggleMenu(): void;
    onMenuClick(menu: MenuItem, index: number): void;
    onSubMenuClick(menu: MenuItem, subMenu: MenuItem, index: number, subIdx: number): void;
}
