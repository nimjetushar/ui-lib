import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare type AlertTypes = 'success' | 'error' | 'warn' | 'info';
export declare class AlertComponent {
    set type(val: AlertTypes);
    get type(): AlertTypes;
    title: string;
    message: string;
    hideIcon: boolean;
    enableClose: boolean;
    onCloseClick: EventEmitter<boolean>;
    iconClass: string;
    private _type;
    setProperties(type: AlertTypes): void;
    closeHandler(): void;
    static ɵfac: i0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AlertComponent, "t-alert", never, { "type": "type"; "title": "title"; "message": "message"; "hideIcon": "hideIcon"; "enableClose": "enableClose"; }, { "onCloseClick": "onCloseClick"; }, never, never>;
}
