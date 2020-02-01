import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

  @Input() label: string;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() value: string | boolean = true;

  @Input() set model(value: boolean | string) {
    this._model = value;
    this.checked = value === this.value ? true : false;
  }
  get model(): boolean | string {
    return this._model;
  }
  @Output() modelChange: EventEmitter<boolean | string> = new EventEmitter<boolean | string>();

  @Output() handleChange: EventEmitter<boolean | string> = new EventEmitter<boolean | string>();

  checked: boolean;
  private _model: boolean | string;

  handleOnChange(event: any): void {
    const checked = event.target.checked;
    this.checked = (checked && this.value === this.model) ? true : false;
    const value = checked ? this.value : false;
    this.handleChange.emit(value);
    this.modelChange.emit(value);
  }
}
