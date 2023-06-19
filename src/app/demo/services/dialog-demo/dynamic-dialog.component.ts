import { Component } from '@angular/core';
import { DialogRef } from '@fourjs/ng-library';

@Component({
  selector: 'ui-library-documentation-dynamic-dialog',
  template: `<div>
    <span>Content</span>
    <div>
      <t-button (click)="close()">Click me!!!</t-button>
    </div>
  </div>`,
})
export class DynamicDialogComponent {
  dialogRef!: DialogRef;

  close() {
    this.dialogRef.close({ closeDialog: true });
  }
}
