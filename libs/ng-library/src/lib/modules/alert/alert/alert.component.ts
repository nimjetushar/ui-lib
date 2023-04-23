import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

export type AlertTypes = 'success' | 'error' | 'warn' | 'info';

@Component({
  selector: 't-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input()
  set type(val: AlertTypes | string) {
    this._type = (val as AlertTypes) || 'info';
    this.setProperties(this._type);
  }
  get type(): AlertTypes {
    return this._type;
  }

  @Input() title?: string;
  @Input() message?: string;
  @Input() hideIcon?: boolean;
  @Input() enableClose?: boolean;

  @Output() onCloseClick: EventEmitter<boolean> = new EventEmitter();

  iconClass?: string;

  private _type!: AlertTypes;

  private setProperties(type: AlertTypes): void {
    if (type) {
      switch (type) {
        case 'success':
          this.iconClass = 'pi-check';
          break;
        case 'error':
          this.iconClass = 'pi-times';
          break;
        case 'warn':
          this.iconClass = 'pi-exclamation-circle';
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
