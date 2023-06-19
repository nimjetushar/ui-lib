import { Component, Input } from '@angular/core';

import { Dialog } from '../../class/dialog';
import { ConfirmationDialogConfig } from '../../type';

@Component({
  selector: 't-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent extends Dialog {
  @Input() override config!: ConfirmationDialogConfig;

  okay(): void {
    super.removeElement();
    this.dialogRef.close('okay');
  }

  close(): void {
    super.removeElement();
    this.dialogRef.close();
  }
}
