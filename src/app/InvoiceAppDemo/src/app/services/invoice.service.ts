import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvoiceModel } from '../models/invoice-model';

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

  add(invoiceModel: InvoiceModel): Observable<InvoiceModel> {
    return this.httpClient.post<InvoiceModel>(environment.invoiceServiceBaseUrl, invoiceModel);
  }

  delete(id: number) {
    return this.httpClient.delete(`${environment.invoiceServiceBaseUrl}/${id}`);
  }

  update(invoiceModel: InvoiceModel) {
    return this.httpClient.put<InvoiceModel>(environment.invoiceServiceBaseUrl, invoiceModel);
  }
}
