import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  header: HttpHeaders;

  constructor(private http: HttpClient) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json');
    this.header = header;
  }

  getRequest(url: string, params: any): Observable<any> {
    return this.http.get(url, { headers: this.header, params: params });
  }

  postRequest(url: string, body: any): Observable<any> {
    return this.http.post(url, body, { headers: this.header });
  }

  putRequest(url: string, body: any): Observable<any> {
    return this.http.put(url, body, { headers: this.header });
  }

  deleteRequest(url: string, params?: any): Observable<any> {
    return this.http.delete(url, { headers: this.header, params: params });
  }
}
