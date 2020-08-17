import { EventEmitter } from '@angular/core';
import { UiInput } from '../../class/uiInput.class';
import * as i0 from "@angular/core";
export interface Dropdown {
    label: string;
    value: any;
}
declare type TooltipPosition = 'right' | 'left' | 'top' | 'bottom';
export declare class DropdownComponent extends UiInput {
    set options(value: Dropdown[]);
    get options(): Dropdown[];
    readonly: boolean;
    disabled: boolean;
    filter: boolean;
    placeholder: string;
    staticLabel: string;
    name: string;
    tooltip: any;
    set tooltipPosition(value: TooltipPosition);
    get tooltipPosition(): TooltipPosition;
    autoDisplayFirst: boolean;
    scrollHeight: string;
    autofocus: boolean;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    value: any;
    private _options;
    private _tooltipPosition;
    writeValue(value: Dropdown): void;
    onChangeHandler(event: any): void;
    focusHandler(event: FocusEvent): void;
    blurHandler(event: FocusEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DropdownComponent, "t-dropdown", never, { "options": "options"; "readonly": "readonly"; "disabled": "disabled"; "filter": "filter"; "placeholder": "placeholder"; "staticLabel": "staticLabel"; "name": "name"; "tooltip": "tooltip"; "tooltipPosition": "tooltipPosition"; "autoDisplayFirst": "autoDisplayFirst"; "scrollHeight": "scrollHeight"; "autofocus": "autofocus"; }, { "onFocus": "onFocus"; "onBlur": "onBlur"; }, never, never>;
}
export {};
