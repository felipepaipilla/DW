import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvoiceDetailModel } from '../models/invoice-detail-model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {

  constructor(private httpClient: HttpClient) {

  }

  getByInvoiceId(invoiceId: number): Observable<InvoiceDetailModel[]> {
    return this.httpClient.get<InvoiceDetailModel[]>(`${environment.invoiceDetailBaseUrl}/invoice/${invoiceId}`);
  }
}
