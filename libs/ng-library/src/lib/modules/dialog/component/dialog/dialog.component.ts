import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Dialog } from '../../class/dialog';

@Component({
  selector: 't-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent extends Dialog {
  close(): void {
    this.removeElement();
    this.dialogRef.close(undefined);
  }

  submit(): void {
    this.removeElement();
    this.dialogRef.close(undefined);
  }
}
