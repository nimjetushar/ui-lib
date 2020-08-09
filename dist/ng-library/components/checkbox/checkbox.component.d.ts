import { EventEmitter } from '@angular/core';
export declare class CheckboxComponent {
    label: string;
    name: string;
    disabled: boolean;
    model: boolean;
    readonly: boolean;
    modelChange: EventEmitter<boolean>;
    checked: boolean;
    handleOnChange(event: any): void;
}
