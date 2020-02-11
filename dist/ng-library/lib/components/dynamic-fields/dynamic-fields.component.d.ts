import { EventEmitter } from '@angular/core';
import { DynamicFields, DynamicFieldButtonOptions, DisabledFields, DropdownOptions } from './dynamicFields.interface';
export declare class DynamicFieldsComponent {
    fields: DynamicFields[];
    buttonOptions: DynamicFieldButtonOptions;
    data: {
        [key: string]: any;
    };
    hideDefaultAction: boolean;
    dropdownOptions: DropdownOptions;
    disabledFields: DisabledFields;
    primaryHandler: EventEmitter<{
        [key: string]: any;
    }>;
    secondaryHandler: EventEmitter<{
        [key: string]: any;
    }>;
    renderFields: DynamicFields[];
    removeSecondaryButton: boolean;
    primaryLabel: string;
    secondaryLabel: string;
    private _primaryLabel;
    private _secondaryLabel;
    private _dropdownOptions;
    private _disabled;
    primaryClick(): void;
    secondaryClick(): void;
    reset(): void;
}
