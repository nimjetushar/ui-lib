import { Component, Input, forwardRef, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiInput } from '../../class/uiInput.class';

export interface Dropdown {
  label: string;
  value: any;
}

type TooltipPosition = 'right' | 'left' | 'top' | 'bottom';

@Component({
  selector: 't-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true
  }],
  encapsulation: ViewEncapsulation.None
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
  @Input()
  set tooltipPosition(value: TooltipPosition) {
    this._tooltipPosition = value || 'top';
  }
  get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }
  @Input() autoDisplayFirst: boolean;
  @Input() scrollHeight: string;
  @Input() autofocus: boolean;

  // tslint:disable: no-output-on-prefix
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  value: any;

  private _options: Dropdown[];
  private _tooltipPosition: TooltipPosition = 'top';

  writeValue(value: Dropdown): void {
    this.value = value;
    this.onChange(value);
  }

  onChangeHandler(event: any): void {
    this.writeValue(event.value);
  }

  focusHandler(event: FocusEvent): void {
    this.onFocus.emit(event);
  }

  blurHandler(event: FocusEvent): void {
    this.onBlur.emit(event);
  }
}
