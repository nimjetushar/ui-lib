import { EventEmitter } from '@angular/core';
import { DynamicFields, DynamicFieldButtonOptions, DynamicFieldDisabledOptions, DynamicFieldDropdownOptions, DynamicFieldDataModel } from './dynamicFields.interface';
export declare class DynamicFieldsComponent {
    set fields(val: DynamicFields[]);
    set buttonOptions(val: DynamicFieldButtonOptions);
    set data(data: DynamicFieldDataModel);
    get data(): DynamicFieldDataModel;
    set dropdownOptions(data: DynamicFieldDropdownOptions);
    get dropdownOptions(): DynamicFieldDropdownOptions;
    set disabledFields(data: DynamicFieldDisabledOptions);
    get disabledFields(): DynamicFieldDisabledOptions;
    hideDefaultAction: boolean;
    primaryHandler: EventEmitter<DynamicFieldDataModel>;
    secondaryHandler: EventEmitter<DynamicFieldDataModel>;
    renderFields: DynamicFields[];
    removeSecondaryButton: boolean;
    set primaryLabel(label: string);
    get primaryLabel(): string;
    set secondaryLabel(label: string);
    get secondaryLabel(): string;
    private _primaryLabel;
    private _secondaryLabel;
    private _dropdownOptions;
    private _disabled;
    private _data;
    primaryClick(): void;
    secondaryClick(): void;
    reset(): void;
}
