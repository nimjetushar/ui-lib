import { Component, Input } from '@angular/core';

export type AlertTypes = 'success' | 'error' | 'warn' | 'info';

@Component({
  selector: 't-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input()
  set type(val: AlertTypes) {
    this._type = val;
    this.setProperties(val);
  }
  get type(): AlertTypes {
    return this._type;
  }

  @Input() title: string;
  @Input() message: string;
  @Input() hideIcon: boolean;

  iconClass: string;

  private _type: AlertTypes;

  setProperties(type: AlertTypes): void {
    if (type) {
      switch (type) {
        case 'success':
          this.iconClass = 'fa-check';
          break;
        case 'error':
          this.iconClass = 'fa-times';
          break;
        case 'warn':
          this.iconClass = 'fa-exclamation-triangle';
          break;
        case 'info':
          this.iconClass = 'fa-info';
          break;
        default:
          throw new Error('invalid Alert type');
      }
    }
  }
}
