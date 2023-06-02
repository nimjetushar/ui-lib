export interface ToastParameters {
  id?: any;
  key?: string;
  title?: string;
  message?: string;
  type?: 'success' | 'error' | 'warn' | 'info';
  closeButton?: boolean;
  timeOut?: number;
  sticky?: boolean;
  data?: any;
}
