import { EventEmitter } from '@angular/core';
import { DynamicFields, DynamicFieldButtonOptions, DynamicFieldDisabledOptions, DynamicFieldDropdownOptions, DynamicFieldDataModel } from './dynamicFields.interface';
export declare class DynamicFieldsComponent {
    fields: DynamicFields[];
    buttonOptions: DynamicFieldButtonOptions;
    data: DynamicFieldDataModel;
    dropdownOptions: DynamicFieldDropdownOptions;
    disabledFields: DynamicFieldDisabledOptions;
    hideDefaultAction: boolean;
    primaryHandler: EventEmitter<DynamicFieldDataModel>;
    secondaryHandler: EventEmitter<DynamicFieldDataModel>;
    renderFields: DynamicFields[];
    removeSecondaryButton: boolean;
    primaryLabel: string;
    secondaryLabel: string;
    private _primaryLabel;
    private _secondaryLabel;
    private _dropdownOptions;
    private _disabled;
    private _data;
    primaryClick(): void;
    secondaryClick(): void;
    reset(): void;
}
