import { Dropdown } from '../dropdown/dropdown.component';

export interface DynamicFields {
    label: string;
    type: 'text' | 'checkbox' | 'radio' | 'select' | 'number';
    model: string;
    name?: string;
}

export interface DynamicFieldButtonOptions {
    primaryLabel?: string;
    secondaryLabel?: string;
    removeSecondaryButton?: boolean;
}

export interface DynamicFieldDisabledOptions {
    [key: string]: boolean;
}

export interface DynamicFieldDropdownOptions {
    [key: string]: Dropdown[];
}

export interface DynamicFieldDataModel {
    [key: string]: any;
}
