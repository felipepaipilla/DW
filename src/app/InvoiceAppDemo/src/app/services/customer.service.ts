import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(environment.customerBaseUrl);
  }

  get(id: number): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(`${environment.customerBaseUrl}/${id}`);
  }
}
