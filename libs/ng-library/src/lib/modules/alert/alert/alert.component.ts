import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { AlertTypes } from '../types';

const defaultAlertType = 'info';

@Component({
  selector: 't-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 't-alert t-alert-wrapper' },
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent {
  @HostBinding('class')
  @Input({ required: true })
  set type(val: AlertTypes) {
    this._alertType = val || defaultAlertType;
    this.setProperties(this._alertType);
  }
  get type(): AlertTypes {
    return this._alertType;
  }

  @Input() title?: string;
  @Input() message?: string;
  @Input() hideIcon = false;
  @Input() enableClose = false;

  @Output() onCloseClick = new EventEmitter<boolean>();

  iconClass?: string;

  private _alertType: AlertTypes;

  constructor() {
    this._alertType = defaultAlertType;
  }

  private setProperties(alertType: AlertTypes): void {
    if (alertType) {
      switch (alertType) {
        case 'success':
          this.iconClass = 'fa-solid fa-circle-check fa-xl';
          break;
        case 'error':
          this.iconClass = 'fa-solid fa-circle-xmark fa-xl';
          break;
        case 'warn':
          this.iconClass = 'fa-solid fa-triangle-exclamation fa-xl';
          break;
        case 'info':
          this.iconClass = 'fa-solid fa-circle-info fa-xl';
          break;
        default:
          console.warn('invalid Alert type');
      }
    }
  }

  closeHandler(): void {
    this.onCloseClick.emit(true);
  }
}
