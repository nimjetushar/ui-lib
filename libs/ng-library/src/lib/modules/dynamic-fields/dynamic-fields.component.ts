import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnInit,
  HostBinding,
} from '@angular/core';
import { isUndefined } from 'tutility';

import {
  DynamicFields,
  DynamicFieldButtonOptions,
  DynamicFieldDisabledOptions,
  DynamicFieldDropdownOptions,
  DynamicFieldDataModel,
} from './types';

@Component({
  selector: 't-dynamic-fields',
  templateUrl: './dynamic-fields.component.html',
  styleUrls: ['./dynamic-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFieldsComponent implements OnInit {
  // fields to be rendered
  @Input() fields?: DynamicFields[];
  // option parameter required by component to render
  @Input() buttonOptions?: DynamicFieldButtonOptions;
  @Input() hideActionSection = false;

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

  @Output() primaryHandler = new EventEmitter<DynamicFieldDataModel>();
  @Output() secondaryHandler = new EventEmitter<DynamicFieldDataModel>();

  @HostBinding('class') hostClass = 't-dynamic-fields';

  showSecondaryButton = false;
  primaryLabel: string;
  secondaryLabel: string;

  private readonly defaultPrimaryBtnLabel = 'Search';
  private readonly defaultSecondaryBtnLabel = 'Reset';
  private _dropdownOptions: DynamicFieldDropdownOptions = {};
  private _disabled: DynamicFieldDisabledOptions = {};
  private _data: DynamicFieldDataModel = {};

  constructor() {
    this.primaryLabel = this.defaultPrimaryBtnLabel;
    this.secondaryLabel = this.defaultSecondaryBtnLabel;
  }

  ngOnInit(): void {
    if (!isUndefined(this.buttonOptions)) {
      const { primaryLabel, secondaryLabel, showSecondaryButton } =
        this.buttonOptions;
      this.primaryLabel = primaryLabel || this.defaultPrimaryBtnLabel;
      this.secondaryLabel = secondaryLabel || this.defaultSecondaryBtnLabel;
      this.showSecondaryButton = !!showSecondaryButton;
    }
  }

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
