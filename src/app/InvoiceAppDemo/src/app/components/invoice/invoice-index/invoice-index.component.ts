import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceModel } from 'src/app/models/invoice-model';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-index',
  templateUrl: './invoice-index.component.html',
  styleUrls: ['./invoice-index.component.css']
})
export class InvoiceIndexComponent implements OnInit {

  invoiceDataSource: InvoiceModel[] = [];

  constructor(private invoiceService: InvoiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.invoiceDataSource = [];
  }

  ngOnInit(): void {
    this.getInvoiceList();
  }

  getInvoiceList() {
    this.invoiceService.getAll().subscribe(resp => {
      this.invoiceDataSource = resp;
    });
  }

  addInvoice() {
    this.invoiceService.add().subscribe(() => {
      this.getInvoiceList();
    });
  }

  selectionChanged(data: any){

  }

}
