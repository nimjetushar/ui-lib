import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dropdown } from '../dropdown/dropdown.component';

export interface Fields {
  label: string;
  type: 'text' | 'checkbox' | 'radio' | 'select' | 'number';
  model: string;
  name?: string;
  disabled?: boolean;
  options?: string;
}

export interface DynamicFieldOptions {
  dropdown?: { [key: string]: Dropdown[] };
  defaultBtn?: {
    primaryLabel?: string;
    secondaryLabel?: string;
    removeSecBtn?: boolean;
  };
}

@Component({
  selector: 't-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss']
})
export class DynamicFieldsComponent {

  // fields to be rendered
  @Input() set fields(val: Fields[]) {
    if (val && val.length) {
      this.renderFields = val;
    }
  }
  // option parameter required by component to render
  @Input() set options(val: DynamicFieldOptions) {
    if (val) {
      if (val.dropdown) {
        this.dropdownOptions = val.dropdown;
      }
      if (val.defaultBtn) {
        this.primaryBtnLabel = val.defaultBtn.primaryLabel;
        this.secondaryBtnLabel = val.defaultBtn.secondaryLabel;
        this.removeSecBtn = val.defaultBtn.removeSecBtn;
      }
    }
  }
  // disable default action button
  @Input() disableDefaultAction: boolean;
  // custom action button
  @Input() customActionBtn: {
    label: string;
    action: (param: { [key: string]: any }) => void;
    badge?: string;
  }[] = [];

  @Output() primaryHandler: EventEmitter<{ [key: string]: any }> = new EventEmitter();
  @Output() secondaryHandler: EventEmitter<{ [key: string]: any }> = new EventEmitter();

  renderFields: Fields[] = [];
  data: { [key: string]: any } = {};
  dropdownOptions: { [key: string]: Dropdown[] } = {};
  primaryBtnLabel: string = 'Search';
  secondaryBtnLabel: string = 'Reset';
  removeSecBtn: boolean;

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
