import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 't-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  @Input() label?: string;
  @Input() name = 'p-checkbox';
  @Input() disabled = false;
  @Input() value = false;
  @Input() readonly = false;

  @Output() valueChange = new EventEmitter<boolean>();

  @HostBinding('class') hostClass = 't-checkbox';

  checked = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleOnChange(event: any): void {
    this.checked = event.target?.checked || false;
    this.valueChange.emit(this.checked);
  }
}
