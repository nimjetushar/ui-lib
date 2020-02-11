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
export interface DisabledFields {
    [key: string]: boolean;
}
export interface DropdownOptions {
    [key: string]: Dropdown[];
}
