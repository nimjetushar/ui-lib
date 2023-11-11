import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { noop } from 'tutility';

import { createCustomInputControlValueAccessor } from '../../../core';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [createCustomInputControlValueAccessor(CheckboxComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 't-checkbox',
  },
})
export class CheckboxComponent<T = any> implements ControlValueAccessor {
  @Input() label = '';
  @Input() value?: T | null;
  @Input() name = 'p-checkbox';
  @Input() disabled = false;
  @Input() binary = false;

  @Output() onChange = new EventEmitter<T>();

  checked = false;
  onTouched: unknown = noop;

  private _onChange: (value: T | null | undefined) => void = noop;

  writeValue(value: T | null | undefined): void {
    this.checked = this.binary ? !!value : value === this.value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  modelChangehandler(event: boolean) {
    const currentValue: T = this.value === undefined ? (true as any) : this.value;
    this._onChange(event ? currentValue : undefined);
  }
}
