import { Severity } from '../../core/core.type';

export type ToastType = Severity;

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'
  | 'center';

export type ToastConfig = {
  title?: string;
  message?: string;
  type?: ToastType;
  closeButton?: boolean;
  timeout?: number;
  disableTimeout?: boolean;
  data?: unknown;
  position?: ToastPosition;
  baseZIndex?: number;
};
