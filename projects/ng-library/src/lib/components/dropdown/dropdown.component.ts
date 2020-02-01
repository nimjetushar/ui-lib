import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInput } from '../../class/uiInput.class';

export interface Dropdown {
  label: string;
  value: any;
}

@Component({
  selector: 't-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }]
})
export class DropdownComponent extends UiInput {

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
  @Input() staticLabel: string;
  @Input() name: string;
  @Input() tooltip: any;
  @Input() tooltipPosition: 'right' | 'left' | 'top' | 'bottom' = 'top';
  @Input() tooltipDisabled: boolean;

  value: any;

  private _options: Dropdown[];

  writeValue(value: Dropdown): void {
    this.value = value;
    this.onChange(value);
  }

  onChangeHandler(event: any): void {
    this.writeValue(event.value);
  }
}
