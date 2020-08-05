import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
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
export declare class ToastService {
    private messageService;
    private defaultParam;
    constructor(messageService: MessageService);
    show(toastParam: ToastParameters): void;
    showMultiple(toastParam: ToastParameters[]): void;
    private formatConfig;
    static ɵfac: i0.ɵɵFactoryDef<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ToastService>;
}
