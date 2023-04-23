import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { AlertTypes } from '../types';

@Component({
  selector: 't-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input()
  set type(val: AlertTypes | string) {
    this.alertType = (val as AlertTypes) || this.defaultAlertType;
    this.setProperties(this.alertType);
  }
  get type(): AlertTypes {
    return this.alertType;
  }

  @Input() title?: string;
  @Input() message?: string;
  @Input() hideIcon?: boolean;
  @Input() enableClose?: boolean;

  @Output() onCloseClick = new EventEmitter<boolean>();

  iconClass?: string;

  private alertType: AlertTypes;
  private readonly defaultAlertType: AlertTypes = 'info';

  constructor() {
    this.alertType = this.defaultAlertType;
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
