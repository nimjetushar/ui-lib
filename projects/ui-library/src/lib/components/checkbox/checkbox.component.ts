import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() label: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;

  @Output() handleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  handleOnChange(event: any): void {
    this.checked = event.target.checked;
    this.handleChange.emit(this.checked);
  }
}
