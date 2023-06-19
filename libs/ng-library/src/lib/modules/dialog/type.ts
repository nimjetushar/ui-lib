import { Type } from '@angular/core';

export type DialogConfig = {
  title?: string;
  message?: string;
  diableBackdropClose?: boolean;
  hideCloseIcon?: boolean;
};

export type ConfirmationDialogConfig = DialogConfig & {
  message?: string;
  iconClass?: string;
  primaryBtnLabel?: string;
  secondaryBtnLabel?: string;
};

export type ConfirmationDialogReturnType = 'ok' | 'cancel' | undefined;

export type DynamicDialogComponentType = Type<any>;
