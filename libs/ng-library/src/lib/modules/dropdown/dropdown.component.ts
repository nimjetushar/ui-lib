import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { noop } from 'tutility';

import { createCustomInputControlValueAccessor } from '../../core/custom-input-control';
import { DropdownOptions } from './types';

type DropdownOptionsUI<T = any> = DropdownOptions<T> & { isSelected?: boolean };

@Component({
  selector: 't-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [createCustomInputControlValueAccessor(DropdownComponent)],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 't-dropdown' },
})
export class DropdownComponent<T = any> implements ControlValueAccessor {
  @Input()
  set options(options: DropdownOptions<T>[] | null | undefined) {
    if (options?.length) {
      this.dropdownOptions = [...options];
    }
  }

  @Input() placeholder!: string;
  @Input() panelHeight?: string;

  @HostBinding('class.disabled')
  @Input()
  disabled = false;

  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  dropdownOptions: DropdownOptionsUI<T>[] = [];
  selectedOptions: DropdownOptions<T> | null | undefined;
  isPanelOpen = false;
  isFocused = false;

  onChange: any = noop;
  onTouched: unknown = noop;

  writeValue(value: T): void {
    const option = this.dropdownOptions.find(o => o.value === value);
    if (option) {
      this.optionSelectHandler(option);
    }
    this.onChange(value);
  }

  registerOnChange(fn: unknown): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: unknown): void {
    this.onTouched = fn;
  }

  togglePanel(): void {
    if (this.disabled) return;

    this.isPanelOpen = !this.isPanelOpen;
  }

  optionSelectHandler(option: DropdownOptionsUI<T>): void {
    if (this.disabled) return;

    this.selectedOptions = option;
    this.dropdownOptions.forEach(o => {
      delete o.isSelected;
    });
    option.isSelected = true;
    this.isPanelOpen = false;
    this.onChange(option.value);
  }

  focusHandler(event: Event): void {
    if (this.disabled) return;
    if (this.isFocused) return;

    this.isFocused = true;
    this.onFocus.emit({ ...event, type: 'focus' });
  }

  blurHandler(event: Event): void {
    if (!this.isFocused) return;

    this.isFocused = false;
    this.isPanelOpen = false;
    this.onBlur.emit({ ...event, type: 'blur' });
  }

  optionsTrackBy(index: number): number {
    return index;
  }
}
