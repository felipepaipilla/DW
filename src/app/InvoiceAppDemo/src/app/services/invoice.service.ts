import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<InvoiceModel[]> {
    return this.httpClient.get<InvoiceModel[]>(environment.invoiceServiceBaseUrl);
  }

  get(id: number): Observable<InvoiceModel> {
    return this.httpClient.get<InvoiceModel>(`${environment.invoiceServiceBaseUrl}/${id}`);
  }

  add(): Observable<InvoiceModel> {
    return this.httpClient.post<InvoiceModel>(environment.invoiceServiceBaseUrl, null);
  }
}
