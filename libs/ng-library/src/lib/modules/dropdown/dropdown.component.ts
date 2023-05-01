import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { noop } from 'tutility';

import { Tooltip } from '../tooltip';
import { DropdownOptions } from './types';

@Component({
  selector: 't-dropdown',
  template: `<p-dropdown
    [options]="options"
    [ngModel]="value"
    [placeholder]="placeholder"
    [filter]="filter"
    [readonly]="readonly"
    [disabled]="disabled"
    [name]="name"
    [tooltip]="tooltip"
    [tooltipPosition]="tooltipPosition"
    [autoDisplayFirst]="autoDisplayFirst"
    [scrollHeight]="scrollHeight"
    [autofocus]="autofocus"
    (onChange)="onChangeHandler($event)"
    (onFocus)="focusHandler($event)"
    (onBlur)="blurHandler($event)"
  >
  </p-dropdown>`,
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent extends Tooltip implements ControlValueAccessor {
  @Input() options: DropdownOptions[] = [];
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() filter = false;
  @Input() placeholder!: string;
  @Input() staticLabel?: string;
  @Input() name = 't-dropdown';
  @Input() autoDisplayFirst = false;
  @Input() scrollHeight = '200px';
  @Input() autofocus = false;

  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  @HostBinding('class') hostClass = 't-dropdown';

  value: unknown;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any = noop;
  onTouched: unknown = noop;

  writeValue(value: DropdownOptions): void {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: unknown): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: unknown): void {
    this.onTouched = fn;
  }

  onChangeHandler(event: { value: DropdownOptions }): void {
    this.writeValue(event.value);
  }

  focusHandler(event: Event): void {
    this.onFocus.emit(event);
  }

  blurHandler(event: Event): void {
    this.onBlur.emit(event);
  }
}
