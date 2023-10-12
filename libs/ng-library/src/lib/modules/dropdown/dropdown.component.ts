import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { noop } from 'tutility';

import { Tooltip } from '../../core/classes/tooltip.class';
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
export class DropdownComponent<T = any> extends Tooltip implements ControlValueAccessor, OnInit, OnDestroy {
  @Input()
  set options(options: DropdownOptions<T>[] | null | undefined) {
    if (options?.length) {
      this.dropdownOptions = [...options];
      this.originalOptions = [...options];
    }
  }

  @Input() placeholder!: string;

  @HostBinding('class.disabled')
  @Input()
  disabled = false;

  @Input() panelHeight?: string;
  @Input() showFilter = false;
  @Input() showClear = false;

  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();

  dropdownOptions: DropdownOptionsUI<T>[] = [];
  selectedOptions: DropdownOptions<T> | null | undefined;
  isPanelOpen = false;
  isFocused = false;
  onChange: any = noop;
  onTouched: unknown = noop;
  readonly filterCriteria = new FormControl('');

  private readonly destroysubscription$ = new Subject();
  private originalOptions: DropdownOptions[] = [];

  ngOnInit(): void {
    this.filterCriteria.valueChanges.pipe(debounceTime(200), takeUntil(this.destroysubscription$)).subscribe(value => {
      const compare = value?.toLowerCase() ?? '';
      this.dropdownOptions = compare
        ? this.originalOptions.filter(o => o.label.toLowerCase().includes(compare)) ?? []
        : this.originalOptions;
    });
  }

  ngOnDestroy(): void {
    this.destroysubscription$.next(null);
    this.destroysubscription$.complete();
  }

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

  /**
   * updated ngmodel when option is selected
   * hilight selected option
   * close panel
   *
   * @param {DropdownOptionsUI<T>} option
   * @return {*}  {void}
   * @memberof DropdownComponent
   */
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
