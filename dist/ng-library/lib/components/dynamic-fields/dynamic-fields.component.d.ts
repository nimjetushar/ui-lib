import { OnInit, EventEmitter } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown.component';
export interface Fields {
    label: string;
    type: 'text' | 'checkbox' | 'radio' | 'select' | 'number';
    model: string;
    name?: string;
    disabled?: boolean;
    options?: string;
}
export interface Options {
    dropdown?: {
        [key: string]: Dropdown[];
    };
    defaultBtn?: {
        primaryLabel?: string;
        secondaryLabel?: string;
        removeSecBtn?: boolean;
    };
}
export declare class DynamicFieldsComponent implements OnInit {
    fields: Fields[];
    options: Options;
    disableDefaultAction: boolean;
    customActionBtn: {
        label: string;
        action: (param: {
            [key: string]: any;
        }) => void;
        badge?: string;
    }[];
    primaryHandler: EventEmitter<{
        [key: string]: any;
    }>;
    secondaryHandler: EventEmitter<{
        [key: string]: any;
    }>;
    renderFields: Fields[];
    data: {
        [key: string]: any;
    };
    dropdownOptions: {
        [key: string]: Dropdown[];
    };
    primaryBtnLabel: string;
    secondaryBtnLabel: string;
    removeSecBtn: boolean;
    constructor();
    ngOnInit(): void;
    primaryClick(): void;
    secondaryClick(): void;
    reset(): void;
}
