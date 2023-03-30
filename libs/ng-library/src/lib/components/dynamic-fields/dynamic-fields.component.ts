import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  DynamicFields, DynamicFieldButtonOptions,
  DynamicFieldDisabledOptions, DynamicFieldDropdownOptions, DynamicFieldDataModel
} from './dynamicFields.interface';

@Component({
  selector: 't-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsComponent {

  // fields to be rendered
  @Input() set fields(val: DynamicFields[]) {
    if (val && val.length) {
      this.renderFields = val;
    }
  }
  // option parameter required by component to render
  @Input() set buttonOptions(val: DynamicFieldButtonOptions) {
    if (val) {
      const { primaryLabel, secondaryLabel, removeSecondaryButton } = val;
      this.primaryLabel = primaryLabel;
      this.secondaryLabel = secondaryLabel;
      this.removeSecondaryButton = removeSecondaryButton;
    }
  }

  @Input()
  set data(data: DynamicFieldDataModel) {
    if (data) {
      this._data = data;
    }
  }
  get data(): DynamicFieldDataModel {
    return this._data || {};
  }

  @Input()
  set dropdownOptions(data: DynamicFieldDropdownOptions) {
    if (data) {
      this._dropdownOptions = data;
    }
  }
  get dropdownOptions(): DynamicFieldDropdownOptions {
    return this._dropdownOptions || {};
  }

  @Input()
  set disabledFields(data: DynamicFieldDisabledOptions) {
    if (data) {
      this._disabled = data;
    }
  }
  get disabledFields(): DynamicFieldDisabledOptions {
    return this._disabled || {};
  }

  @Input() hideDefaultAction: boolean;

  @Output() primaryHandler: EventEmitter<DynamicFieldDataModel> = new EventEmitter();
  @Output() secondaryHandler: EventEmitter<DynamicFieldDataModel> = new EventEmitter();

  renderFields: DynamicFields[] = [];
  removeSecondaryButton: boolean;

  set primaryLabel(label: string) {
    this._primaryLabel = label;
  }
  get primaryLabel(): string {
    return this._primaryLabel || 'Search';
  }

  set secondaryLabel(label: string) {
    this._secondaryLabel = label;
  }
  get secondaryLabel(): string {
    return this._secondaryLabel || 'Reset';
  }

  private _primaryLabel: string;
  private _secondaryLabel: string;
  private _dropdownOptions: DynamicFieldDropdownOptions = {};
  private _disabled: DynamicFieldDisabledOptions = {};
  private _data: DynamicFieldDataModel = {};

  primaryClick(): void {
    this.primaryHandler.emit(this.data);
  }

  secondaryClick(): void {
    this.secondaryHandler.emit(this.data);
  }

  reset(): void {
    this.data = {};
  }
}
