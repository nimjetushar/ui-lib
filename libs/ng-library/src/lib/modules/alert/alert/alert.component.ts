import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { AlertTypes } from '../types';

const defaultAlertType = 'info';

@Component({
  selector: 't-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 't-alert' },
})
export class AlertComponent {
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
          this.iconClass = 'pi-check';
          break;
        case 'error':
          this.iconClass = 'pi-times';
          break;
        case 'warn':
          this.iconClass = 'pi-exclamation-triangle';
          break;
        case 'info':
          this.iconClass = 'pi-info-circle';
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
