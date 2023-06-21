export type ToastParameters = {
  id?: string;
  key?: string;
  title?: string;
  message?: string;
  type?: 'success' | 'error' | 'warn' | 'info';
  closeButton?: boolean;
  timeOut?: number;
  sticky?: boolean;
  data?: unknown;
};
