import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() label: string;
  @Input() name: string;
  @Input() disabled: boolean;

  @Input() model: boolean;
  @Output() modelChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() handleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  checked: boolean;

  constructor() { }

  handleOnChange(event: any): void {
    this.checked = event.target.checked;
    this.handleChange.emit(this.checked);
    this.modelChange.emit(this.checked);
  }
}
