import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

import { AlertTypes } from '../types';

@Component({
  selector: 't-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 't-alert t-alert-wrapper' },
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit, OnChanges {
  @HostBinding('class')
  @Input({ transform: transformAlertTypeInput })
  type: AlertTypes = 'info';

  @Input() header = '';
  @Input() message = '';
  @Input() hideIcon = false;
  @Input() enableClose = false;

  @Output() onCloseClick = new EventEmitter<boolean>();

  iconClass?: string;

  ngOnInit(): void {
    this.setProperties(this.type);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && changes['type'].currentValue !== changes['type'].previousValue) {
      this.setProperties(this.type);
    }
  }

  closeHandler(): void {
    this.onCloseClick.emit(true);
  }

  private setProperties(alertType: AlertTypes): void {
    if (alertType) {
      switch (alertType) {
        case 'success':
          this.iconClass = 'fa-solid fa-check fa-xl';
          break;
        case 'error':
          this.iconClass = 'fa-solid fa-xmark fa-xl';
          break;
        case 'warning':
          this.iconClass = 'fa-solid fa-exclamation fa-xl';
          break;
        case 'info':
          this.iconClass = 'fa-solid fa-info fa-xl';
          break;
        default:
          console.warn('invalid Alert type');
      }
    }
  }
}

function transformAlertTypeInput(value?: AlertTypes) {
  return value ?? 'info';
}
