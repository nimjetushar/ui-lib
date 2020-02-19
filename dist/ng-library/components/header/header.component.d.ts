import { EventEmitter } from '@angular/core';
export declare class HeaderComponent {
    title: string;
    logoSrc: string;
    routeLink: string;
    sideBarToggled: EventEmitter<boolean>;
    logoClickEmitter: EventEmitter<undefined>;
    handleSidebarToggle(): void;
    onLogoClick(): void;
}
