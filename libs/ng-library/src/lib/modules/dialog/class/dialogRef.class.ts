import { Observable, Subject } from 'rxjs';

export class DialogRef {
  private readonly _onClose = new Subject<any>();
  private readonly _onDestroy = new Subject<any>();

  /**
   * Event triggered on dialog is closed.
   * @group Events
   */
  onClose: Observable<any> = this._onClose.asObservable();

  /**
   * Event triggered on dialog instance is destroyed.
   * @group Events
   */
  onDestroy: Observable<any> = this._onDestroy.asObservable();

  /**
   * Closes dialog.
   * @group Method
   */
  close(result?: any) {
    this._onClose.next(result);
  }
  /**
   * Destroys the dialog instance.
   * @group Method
   */
  destroy() {
    this._onDestroy.next(null);
  }
}
