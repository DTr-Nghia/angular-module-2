import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string, params: any): Observable<any> {
    return this.http.get(url, { params });
  }

  post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}