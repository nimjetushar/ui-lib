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
});
