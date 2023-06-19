import { DOCUMENT } from '@angular/common';
import {
  ComponentFactory,
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';

import { DialogComponent } from './component/dialog/dialog.component';
import {
  ConfirmationDialogConfig,
  ConfirmationDialogReturnType,
  DialogConfig,
} from './type';
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

  open<T = any>(config: DialogConfig) {
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(DialogComponent);
    const dialogRef = new DialogRef<T>();

    return this.openDialog(modalComponentFactory, dialogRef, config);
  }

  openConfirmation(config: ConfirmationDialogConfig) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(
      ConfirmationComponent
    );
    const dialogRef = new DialogRef<ConfirmationDialogReturnType>();
    return this.openDialog(modalComponentFactory, dialogRef, config);
  }

  private openDialog(
    modalComponentFactory: ComponentFactory<Dialog>,
    dialogRef: DialogRef,
    config: DialogConfig | ConfirmationDialogConfig
  ): DialogRef {
    const modalComponent = modalComponentFactory.create(this.injector);

    modalComponent.instance.config = config;
    modalComponent.instance.dialogRef = dialogRef;

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    return dialogRef;
  }
}
