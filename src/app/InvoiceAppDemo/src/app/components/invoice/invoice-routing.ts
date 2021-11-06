import { Routes } from '@angular/router';
import { InvoiceIndexComponent } from './invoice-index/invoice-index.component';

export const INVOICE_ROUTES: Routes = [
  { path: '', component: InvoiceIndexComponent },
  { path: 'index', component: InvoiceIndexComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];