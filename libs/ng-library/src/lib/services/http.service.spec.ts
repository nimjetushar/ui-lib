import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: HttpService = TestBed.inject(HttpService);
    expect(service).toBeTruthy();
  });

  it('should consist get, post, put, delete methods', () => {
    const service: HttpService = TestBed.inject(HttpService);
    expect(service.getRequest).toBeTruthy();
    expect(service.postRequest).toBeTruthy();
    expect(service.putRequest).toBeTruthy();
    expect(service.deleteRequest).toBeTruthy();
  });
});
