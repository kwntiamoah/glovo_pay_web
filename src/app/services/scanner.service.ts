import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(private http: HttpClient) { }

  scanToPay(body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/driver_pay`, body)
  }
}
