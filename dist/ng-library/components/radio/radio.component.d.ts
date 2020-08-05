import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class RadioComponent {
    label: string;
    disabled: boolean;
    name: string;
    value: string | boolean;
    set model(value: boolean | string);
    get model(): boolean | string;
    modelChange: EventEmitter<boolean | string>;
    checked: boolean;
    private _model;
    handleOnChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<RadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RadioComponent, "t-radio", never, { "label": "label"; "disabled": "disabled"; "name": "name"; "value": "value"; "model": "model"; }, { "modelChange": "modelChange"; }, never, never>;
}
