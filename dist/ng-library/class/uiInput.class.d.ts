import { ControlValueAccessor } from '@angular/forms';
export declare class UiInput implements ControlValueAccessor {
    onChange: any;
    onTouched: any;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
}
