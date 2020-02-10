import { EventEmitter } from '@angular/core';
export declare class RadioComponent {
    label: string;
    disabled: boolean;
    name: string;
    value: string | boolean;
    model: boolean | string;
    modelChange: EventEmitter<boolean | string>;
    checked: boolean;
    private _model;
    handleOnChange(event: any): void;
}
