import { EventEmitter } from '@angular/core';
import { UiInput } from '../../class/uiInput.class';
export interface Dropdown {
    label: string;
    value: any;
}
declare type TooltipPosition = 'right' | 'left' | 'top' | 'bottom';
export declare class DropdownComponent extends UiInput {
    options: Dropdown[];
    readonly: boolean;
    disabled: boolean;
    filter: boolean;
    placeholder: string;
    staticLabel: string;
    name: string;
    tooltip: any;
    tooltipPosition: TooltipPosition;
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
}
export {};
