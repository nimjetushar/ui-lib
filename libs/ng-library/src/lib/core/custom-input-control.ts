import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export function createCustomInputControlValueAccessor<T>(extendedInputComponent: T) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => extendedInputComponent),
    multi: true,
  };
}
