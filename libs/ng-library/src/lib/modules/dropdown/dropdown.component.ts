import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
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
      this._options = [...options];
    }
  }

  @Input() placeholder = '';

  @HostBinding('class.disabled')
  @Input()
  disabled = false;

  @Input() scrollHeight = '200px';
  @Input() showFilter = false;
  @Input() disableClear = false;
  @Input() emptyMessage = '';
  @Input() inputId = '';
  @Input() name = '';

  @Output() onFocus = new EventEmitter<Event>();
  @Output() onBlur = new EventEmitter<Event>();
  @Output() onChange = new EventEmitter<T | null>();

  @ViewChild('inputField') inputField!: ElementRef;

  dropdownOptions: DropdownOptionsUI<T>[] = [];
  selectedOptions: DropdownOptions<T> | null | undefined;
  isPanelOpen = false;
  isFocused = false;
  onTouched: unknown = noop;
  readonly filterCriteria = new FormControl('');

  private _onChange: (value: T | null) => void = noop;
  private readonly _destroysubscription$ = new Subject();
  private _options: DropdownOptions[] = [];
  private _cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.filterCriteria.valueChanges.pipe(debounceTime(200), takeUntil(this._destroysubscription$)).subscribe(value => {
      const compare = value?.toLowerCase() ?? '';
      this.dropdownOptions = compare
        ? this._options.filter(o => o.label.toLowerCase().includes(compare)) ?? []
        : this._options;
      this._cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this._destroysubscription$.next(null);
    this._destroysubscription$.complete();
  }

  writeValue(value: T): void {
    const option = this.dropdownOptions.find(o => o.value === value);
    if (option) {
      this.optionSelectHandler(option);
    }
    this.updateModel(value);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: unknown): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
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
    this.updateModel(option.value);
  }

  clearSelection(event: Event): void {
    event.stopPropagation();
    this.selectedOptions = null;
    this.dropdownOptions.forEach(o => {
      delete o.isSelected;
    });
    this.updateModel(null);
  }

  focusHandler(event: Event): void {
    if (this.disabled) return;
    if (this.isFocused) return;

    this.isFocused = true;
    this.inputField.nativeElement.focus();
    this.onFocus.emit({ ...event, type: 'focus' });
  }

  blurHandler(event: Event): void {
    if (!this.isFocused) return;

    this.isFocused = false;
    this.isPanelOpen = false;
    this.inputField.nativeElement.blur();
    this.onBlur.emit({ ...event, type: 'blur' });
  }

  optionsTrackBy(index: number): number {
    return index;
  }

  private updateModel(value: T | null): void {
    this.onChange.emit(value);
    this._onChange(value);
  }
}
