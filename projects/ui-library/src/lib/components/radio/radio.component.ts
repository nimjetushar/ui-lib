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

  @Input() set model(value: boolean) {
    this._model = value;
    this.checked = value;
  }
  get model(): boolean {
    return this._model;
  }
  @Output() modelChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() handleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  checked: boolean;
  private _model: boolean;

  constructor() { }

  handleOnChange(event: any): void {
    this.checked = event.target.checked;
    this.handleChange.emit(this.checked);
    this.modelChange.emit(this.checked);
  }
}
