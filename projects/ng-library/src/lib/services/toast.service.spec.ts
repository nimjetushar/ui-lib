import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ToastModule],
    providers: [MessageService]
  }));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });

  it('should show success toast', () => {
    const service: ToastService = TestBed.get(ToastService);
    spyOn(service['messageService'], 'add');
    service.show({ type: 'success' });
    expect(service['messageService'].add).toHaveBeenCalledWith({ severity: 'success', life: 5000 });
  });

  it('should show error toast', () => {
    const service: ToastService = TestBed.get(ToastService);
    spyOn(service['messageService'], 'add');
    service.show({ type: 'error' });
    expect(service['messageService'].add).toHaveBeenCalledWith({ severity: 'error', life: 5000 });
  });
});
