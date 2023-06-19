import { Component, ViewEncapsulation } from '@angular/core';

import { Dialog } from '../../class/dialog';
import {
  ConfirmationDialogConfig,
  ConfirmationDialogReturnType,
} from '../../type';
import { DialogRef } from '../../class/dialogRef.class';

@Component({
  selector: 't-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmationComponent extends Dialog {
  override config!: ConfirmationDialogConfig;
  override dialogRef!: DialogRef<ConfirmationDialogReturnType>;

  okay(): void {
    this.dialogRef.close('ok');
    super.removeElement();
  }

  close(): void {
    this.dialogRef.close('cancel');
    super.removeElement();
  }
}
