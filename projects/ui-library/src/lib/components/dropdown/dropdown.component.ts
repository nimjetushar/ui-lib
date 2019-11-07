import { Dropdown } from './../dynamic-fields/dynamic-fields.component';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Dropdown {
  label: string;
  value: any;
}

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownComponent),
  multi: true
};

@Component({
  selector: 't-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DropdownComponent implements OnInit, ControlValueAccessor {

  @Input()
  set options(value: Dropdown[]) {
    this._options = value;
  }
  get options(): Dropdown[] {
    return this._options;
  }

  @Input() readonly: boolean;
  @Input() disabled: boolean;
  @Input() filter: boolean;
  @Input() placeholder: string;

  value: any;

  private _options: Dropdown[];

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { }

  ngOnInit(): void {
  }

  // From ControlValueAccessor interface
  writeValue(value: any): void {
    if (value !== this.value) {
      this.value = value;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
