import { UiInput } from '../../class/uiInput.class';
export interface Dropdown {
    label: string;
    value: any;
}
export declare class DropdownComponent extends UiInput {
    options: Dropdown[];
    readonly: boolean;
    disabled: boolean;
    filter: boolean;
    placeholder: string;
    staticLabel: string;
    name: string;
    tooltip: any;
    tooltipPosition: 'right' | 'left' | 'top' | 'bottom';
    tooltipDisabled: boolean;
    value: any;
    private _options;
    writeValue(value: Dropdown): void;
    onChangeHandler(event: any): void;
}
