import { Component } from '@angular/core';
import { DialogService } from '@fourjs/ng-library';

import { IOptions } from '../../../common';

@Component({
  selector: 'ui-library-documentation-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
})
export class DialogDemoComponent {
  readonly compSyntax = [];

  readonly options: IOptions = {
    name: 'DialogService',
  };

  constructor(private dialogService: DialogService) {}

  openConfirmationDialog() {
    this.dialogService
      .openConfirmation({
        title: 'Confirmation',
        diableBackdropClose: true,
      })
      .onClose.subscribe((data) => {
        console.log('Confirmation Dialog data', data);
      });
  }
}
