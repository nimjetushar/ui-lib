import { Component } from '@angular/core';
import { ConfirmationDialogConfig, DialogService } from '@fourjs/ng-library';

import { FontAwesomeUrl } from '../../../constants/config';
import { IOptions } from '../../../common';
import { DynamicDialogComponent } from './dynamic-dialog.component';

@Component({
  selector: 'ui-library-documentation-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss'],
})
export class DialogDemoComponent {
  readonly options: IOptions<keyof ConfirmationDialogConfig> = {
    name: 'DialogService',
    componentType: 'Service',
    methods: [
      {
        method: 'open',
        parameter: ['Component', 'DialogConfig'],
        description: 'Display custom dialog based on provided component',
      },
      {
        method: 'openConfirmation',
        parameter: ['ConfirmationDialogConfig'],
        description: 'Display confirmation dialog',
      },
    ],
    options: [
      {
        parameter: 'title',
        type: 'string',
        description: 'Dialog title',
      },
      {
        parameter: 'message',
        type: 'string',
        description: 'Dialog message',
      },
      {
        parameter: 'iconClass',
        type: 'string',
        description: `Icon which need to be displayed in Dialog content. Refer '${FontAwesomeUrl}' for icons`,
      },
      {
        parameter: 'diableBackdropClose',
        type: 'boolean',
        default: 'false',
        description: 'Disabled dialog close when clicked on overlay',
      },
      {
        parameter: 'hideCloseIcon',
        type: 'boolean',
        default: 'false',
        description: 'Hide close icon (x) from dialog',
      },
    ],
  };

  constructor(private dialogService: DialogService) {}

  openConfirmationDialog() {
    const dialogRef = this.dialogService.openConfirmation({
      title: 'Confirmation',
    });
    dialogRef.onClose.subscribe((data) => {
      console.log('Confirmation Dialog on close', data);
    });
    dialogRef.onDestroy.subscribe(() => {
      console.log('Confirmation Dialog on destroy');
    });
  }

  openDeleteDialog() {
    this.dialogService.openConfirmation({
      title: 'Delete',
      message: 'Are you sure do you want to delete !!!',
      iconClass: 'fa-solid fa-trash',
    });
  }

  openDynamicDialog() {
    this.dialogService.open(DynamicDialogComponent, {
      title: 'Dynamic Dialog',
    });
  }
}
