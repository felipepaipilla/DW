import { Component, Input, OnInit,  } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDetailModel } from 'src/app/models/invoice-detail-model';
import { ProductModel } from 'src/app/models/product-model';
import { InvoiceDetailService } from 'src/app/services/invoice-detail.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-invoice-detail-index',
  templateUrl: './invoice-detail-index.component.html',
  styleUrls: ['./invoice-detail-index.component.css']
})
export class InvoiceDetailIndexComponent implements OnInit {

  @Input() invoiceId: number;
  invoiceDetails: InvoiceDetailModel[];
  products:ProductModel[];

  constructor(private invoiceDetailService: InvoiceDetailService,
    private productService: ProductService) {
    this.invoiceId = 0;
    this.invoiceDetails = [];
    this.products = [];
    this.getProducts().subscribe(resp =>{
      this.products = resp;
    });
  }

  ngOnInit(): void {
    this.getInvoiceDetail();
  }

  getInvoiceDetail() {
    this.invoiceDetailService.getByInvoiceId(this.invoiceId).subscribe(resp => {
      this.invoiceDetails = resp;
    });
  }

  getProducts(): Observable<ProductModel[]>{
    return this.productService.getAll();
  }

  hola(data: any){
    console.log(data);
    return "";
  }
}
