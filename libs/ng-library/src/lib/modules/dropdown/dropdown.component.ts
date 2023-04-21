import {
  Component,
  Input,
  forwardRef,
  ViewEncapsulation,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { UiInput } from '../../class/uiInput.class';

export interface DropdownOptions<T = unknown> {
  label: string;
  value: T;
}

type TooltipPosition = 'right' | 'left' | 'top' | 'bottom';

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends UiInput {
  @Input()
  set options(value: DropdownOptions[]) {
    this._options = value;
  }
  get options(): DropdownOptions[] {
    return this._options;
  }

  @Input() readonly = false;
  @Input() disabled = false;
  @Input() filter = false;
  @Input() placeholder!: string;
  @Input() staticLabel?: string;
  @Input() name = 't-dropdown';
  @Input() tooltip: any;
  @Input()
  set tooltipPosition(value: TooltipPosition) {
    this._tooltipPosition = value || 'top';
  }
  get tooltipPosition(): TooltipPosition {
    return this._tooltipPosition;
  }
  @Input() autoDisplayFirst = false;
  @Input() scrollHeight = '200px';
  @Input() autofocus = false;

  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  value: any;

  private _options!: DropdownOptions[];
  private _tooltipPosition: TooltipPosition = 'top';

  override writeValue(value: DropdownOptions): void {
    this.value = value;
    this.onChange(value);
  }

  onChangeHandler(event: any): void {
    this.writeValue(event.value);
  }

  focusHandler(event: Event): void {
    this.onFocus.emit(event);
  }

  blurHandler(event: Event): void {
    this.onBlur.emit(event);
  }
}
