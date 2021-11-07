import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer-model';
import { InvoiceModel } from 'src/app/models/invoice-model';
import { CustomerService } from 'src/app/services/customer.service';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-index',
  templateUrl: './invoice-index.component.html',
  styleUrls: ['./invoice-index.component.css']
})
export class InvoiceIndexComponent implements OnInit {

  invoiceDataSource: InvoiceModel[] = [];
  customerDataSource: CustomerModel[];
  isBusy: boolean;

  constructor(private router: Router,
    private invoiceService: InvoiceService,
    private customerService: CustomerService) {
    this.invoiceDataSource = [];
    this.customerDataSource = [];
    this.isBusy = false;
  }

  ngOnInit(): void {
    this.getInvoiceList();
    this.getCustomers();
  }

  getInvoiceList() {
    this.invoiceService.getAll().subscribe(resp => {
      this.invoiceDataSource = resp;
    });
  }

  dataGridOnRowInserted(data: any) {
    let dataGridinvoice = (data.data as InvoiceModel);
    let newInvoice: InvoiceModel = {
      id: 0,
      customerId: dataGridinvoice.customerId,
      date: dataGridinvoice.date,
      deleted: false,
      invoiceSequence: 0,
      prefix: ''
    };

    this.invoiceService.add(newInvoice).subscribe(() => {
      this.getInvoiceList();
    });
  }

  dataGridOnSaving() {
    this.isBusy = true;
  }

  dataGridOnSaved() {
    this.isBusy = false;
  }

  getCustomers() {
    this.customerService.getAll().subscribe(resp => {
      this.customerDataSource = resp;
    });
  }

  dataGridOnRowRemoved(data: any): void {
    let id = (data.data as InvoiceModel).id ?? 0;

    if (id == 0) {
      return;
    }

    this.invoiceService.delete(id).subscribe(() => {
      this.getInvoiceList();
    });
  }

  dataGridOnRowUpdated(data: any) {
    this.invoiceService.update((data.data as InvoiceModel)).subscribe(() => {
      this.getInvoiceList();
    });
  }

}
