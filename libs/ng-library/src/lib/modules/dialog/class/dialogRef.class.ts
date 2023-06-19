import { Observable, Subject } from 'rxjs';

export class DialogRef<T = any> {
  private readonly _onClose = new Subject<T | undefined>();
  private readonly _onDestroy = new Subject<null>();

  /**
   * Event triggered on dialog is closed.
   * @group Events
   */
  onClose: Observable<T | undefined> = this._onClose.asObservable();

  /**
   * Event triggered on dialog instance is destroyed.
   * @group Events
   */
  onDestroy: Observable<null> = this._onDestroy.asObservable();

  /**
   * Closes dialog.
   * @group Method
   */
  close(result?: T) {
    this._onClose.next(result);
  }
  /**
   * Destroys the dialog instance.
   * @group Method
   */
  destroy() {
    this._onDestroy.complete();
  }
}
