import { TestBed } from '@angular/core/testing';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ToastService } from './toast.service';

const life = 4000;

describe('ToastService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ToastModule],
      providers: [MessageService],
    })
  );

  it('should be created', () => {
    const service: ToastService = TestBed.inject(ToastService);
    expect(service).toBeTruthy();
  });

  it('should show success toast', () => {
    const service: ToastService = TestBed.inject(ToastService);
    jest.spyOn(service['messageService'], 'add');
    service.show({ type: 'success' });
    expect(service['messageService'].add).toHaveBeenCalledWith({
      severity: 'success',
      life,
    });
  });

  it('should show error toast', () => {
    const service: ToastService = TestBed.inject(ToastService);
    jest.spyOn(service['messageService'], 'add');
    service.show({ type: 'error' });
    expect(service['messageService'].add).toHaveBeenCalledWith({
      severity: 'error',
      life,
    });
  });
});
