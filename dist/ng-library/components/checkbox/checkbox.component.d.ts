import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CheckboxComponent {
    label: string;
    name: string;
    disabled: boolean;
    model: boolean;
    readonly: boolean;
    modelChange: EventEmitter<boolean>;
    checked: boolean;
    handleOnChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CheckboxComponent, "t-checkbox", never, { "label": "label"; "name": "name"; "disabled": "disabled"; "model": "model"; "readonly": "readonly"; }, { "modelChange": "modelChange"; }, never, never>;
}
