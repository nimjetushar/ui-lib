import { ToastrService, ActiveToast, IndividualConfig } from 'ngx-toastr';
export { ActiveToast } from 'ngx-toastr';
export interface ToastParameters extends IndividualConfig {
    message?: string;
    title?: string;
    type?: 'success' | 'error' | 'warning' | 'info';
}
export declare class ToastService {
    private toastr;
    private defaultParam;
    constructor(toastr: ToastrService);
    show(toastParam: Partial<ToastParameters>): ActiveToast<any>;
}
