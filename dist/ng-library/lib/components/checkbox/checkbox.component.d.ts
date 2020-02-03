import { EventEmitter } from '@angular/core';
export declare class CheckboxComponent {
    label: string;
    name: string;
    disabled: boolean;
    model: boolean;
    modelChange: EventEmitter<boolean>;
    handleChange: EventEmitter<boolean>;
    checked: boolean;
    constructor();
    handleOnChange(event: any): void;
}
