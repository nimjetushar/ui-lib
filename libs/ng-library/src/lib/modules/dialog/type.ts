export type DialogConfig = {
  title?: string;
  message?: string;
  diableBackdropClose?: boolean;
};

export type ConfirmationDialogConfig = DialogConfig & {
  message?: string;
  iconClass?: string;
  primaryBtnLabel?: string;
  secondaryBtnLabel?: string;
};
