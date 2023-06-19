import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';

import { DialogComponent } from './component/dialog/dialog.component';
import {
  ConfirmationDialogConfig,
  ConfirmationDialogReturnType,
  DialogConfig,
  DynamicDialogComponentType,
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

  open<T = any>(
    componentRef: DynamicDialogComponentType,
    config: DialogConfig
  ) {
    const dialogRef = new DialogRef<T>();

    const modalComponentFactory =
      this.resolver.resolveComponentFactory(DialogComponent);
    const modalComponent = modalComponentFactory.create(this.injector);
    modalComponent.instance.childComponentType = componentRef;
    return this.openDialog(modalComponent, dialogRef, config);
  }

  openConfirmation(config: ConfirmationDialogConfig) {
    const dialogRef = new DialogRef<ConfirmationDialogReturnType>();

    const modalComponentFactory = this.resolver.resolveComponentFactory(
      ConfirmationComponent
    );
    const modalComponent = modalComponentFactory.create(this.injector);
    return this.openDialog(modalComponent, dialogRef, config);
  }

  private openDialog(
    modalComponent: ComponentRef<Dialog>,
    dialogRef: DialogRef,
    config: DialogConfig | ConfirmationDialogConfig
  ): DialogRef {
    modalComponent.instance.config = config;
    modalComponent.instance.dialogRef = dialogRef;

    const onCloseSub = dialogRef.onClose.subscribe(() => {
      modalComponent.instance.removeElement();
    });

    const onDestroySub = dialogRef.onDestroy.subscribe(() => {
      modalComponent.instance.removeElement();
      onCloseSub.unsubscribe();
      onDestroySub.unsubscribe();
    });

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    return dialogRef;
  }
}
