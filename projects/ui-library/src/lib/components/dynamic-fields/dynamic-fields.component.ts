import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Fields {
  label: string;
  type: 'text' | 'checkbox' | 'radio' | 'select';
  model: string;
  name?: string;
  disabled?: boolean;
  options?: string;
}

export interface Dropdown {
  label: string;
  value: any;
}

export interface Options {
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
export class DynamicFieldsComponent implements OnInit {

  // fields to be rendered
  @Input() set fields(val: Fields[]) {
    if (val && val.length) {
      this.renderFields = val;
    }
  }
  // option parameter required by component to render
  @Input() set options(val: Options) {
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

  constructor() { }

  ngOnInit(): void { }

  primaryClick(): void {
    this.primaryHandler.emit(this.data);
  }

  secondaryClick(): void {
    this.secondaryHandler.emit(this.data);
  }
}
