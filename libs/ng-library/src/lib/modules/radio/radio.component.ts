import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

type ModelValue = any;

@Component({
  selector: 't-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent {
  @Input() label?: string;
  @Input() disabled = false;
  @Input() name = 't-radio';
  @Input() value: string | boolean = true;
  @Input()
  set model(value: ModelValue) {
    this._model = value;
    this.checked = value === this.value;
  }
  get model(): ModelValue {
    return this._model;
  }

  @Output() modelChange = new EventEmitter<ModelValue>();

  @HostBinding('class') hostClass = 't-radio';

  checked = false;

  private _model!: ModelValue;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOnChange(event: any): void {
    const checked = event.target.checked;
    this.checked = checked && this.value === this.model ? true : false;
    const value = checked ? this.value : false;
    this.modelChange.emit(value);
  }
}
