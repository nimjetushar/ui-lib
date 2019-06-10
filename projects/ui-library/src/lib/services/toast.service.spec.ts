import { ToastrService, ToastrModule } from 'ngx-toastr';
import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ToastrModule.forRoot()],
    providers: [ToastrService]
  }));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });

  it('should show success toast', () => {
    const service: ToastService = TestBed.get(ToastService);
    spyOn(service['toastr'], 'success');
    service.show({ type: 'success' });
    expect(service['toastr'].success).toHaveBeenCalled();
  });

  it('should show error toast', () => {
    const service: ToastService = TestBed.get(ToastService);
    spyOn(service['toastr'], 'error');
    service.show({ type: 'error' });
    expect(service['toastr'].error).toHaveBeenCalled();
  });
});
