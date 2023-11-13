import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { isUndefined, noop } from 'tutility';

import { createCustomInputControlValueAccessor } from '../../../core';
import { getUiqueIdentifier } from '../../../utility/utilities';

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
export class CheckboxComponent<T = any> implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() value?: T | null;
  @Input() name = '';
  @Input() disabled = false;
  @Input() binary = false;
  @Input() inputId = '';

  @Output() onChange = new EventEmitter<T>();

  checked = false;
  onTouched: unknown = noop;

  private _onChange: (value: T | null | undefined) => void = noop;

  ngOnInit(): void {
    this.name = 'pb-checkbox';
    this.inputId = this.inputId ?? getUiqueIdentifier();
  }

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
    const currentValue: T = isUndefined(this.value) ? (true as any) : this.value;
    this._onChange(event ? currentValue : null);
  }
}
