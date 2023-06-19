import { DOCUMENT } from '@angular/common';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';

import { DialogComponent } from './component/dialog/dialog.component';
import { ConfirmationDialogConfig, DialogConfig } from './type';
import { DialogRef } from './class/dialogRef.class';
import { Dialog } from './class/dialog';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(config: DialogConfig) {
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(DialogComponent);
    return this.openDialog(modalComponentFactory, config);
  }

  openConfirmation(config: ConfirmationDialogConfig) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(
      ConfirmationComponent
    );
    return this.openDialog(modalComponentFactory, config);
  }

  private openDialog(
    modalComponentFactory: ComponentFactory<Dialog>,
    config: DialogConfig | ConfirmationDialogConfig
  ): DialogRef {
    const modalComponent = modalComponentFactory.create(this.injector);

    const dialogRef = new DialogRef();

    modalComponent.instance.config = config;
    modalComponent.instance.dialogRef = dialogRef;
    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    return dialogRef;
  }
}
