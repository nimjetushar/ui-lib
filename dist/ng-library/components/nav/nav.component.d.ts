import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export interface MenuItem {
    label: string;
    route?: string;
    badge?: string;
    children?: MenuItem[];
}
export declare class NavComponent implements OnInit {
    private _router;
    menuItems: MenuItem[];
    set expanded(status: boolean);
    get expanded(): boolean;
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
    static ɵfac: i0.ɵɵFactoryDef<NavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NavComponent, "t-nav", never, { "menuItems": "menuItems"; "expanded": "expanded"; "diableDefaultClick": "diableDefaultClick"; }, { "sliderStatus": "sliderStatus"; "menuClickTrigger": "menuClickTrigger"; }, never, never>;
}
