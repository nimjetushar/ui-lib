import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HeaderComponent {
    title: string;
    logoSrc: string;
    routeLink: string;
    sideBarToggled: EventEmitter<boolean>;
    logoClickEmitter: EventEmitter<undefined>;
    handleSidebarToggle(): void;
    onLogoClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<HeaderComponent, "t-header", never, { "title": "title"; "logoSrc": "logoSrc"; "routeLink": "routeLink"; }, { "sideBarToggled": "sideBarToggled"; "logoClickEmitter": "logoClickEmitter"; }, never, never>;
}
