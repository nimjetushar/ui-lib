// tslint:disable: no-empty
import { ControlValueAccessor } from '@angular/forms';

const noop = () => { };

export class UiInput implements ControlValueAccessor {

    onChange: any = noop;
    onTouched: any = noop;
    writeValue(_obj: any): void { }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(_isDisabled: boolean): void { }
}
