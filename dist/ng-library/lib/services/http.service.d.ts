import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class HttpService {
    private http;
    header: HttpHeaders;
    constructor(http: HttpClient);
    deleteRequest(url: string, params?: any): Observable<any>;
    getRequest(url: string, params: any): Observable<any>;
    postRequest(url: string, body: any): Observable<any>;
    putRequest(url: string, body: any): Observable<any>;
}
