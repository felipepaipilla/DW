import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { INVOICE_ROUTES } from './components/invoice/invoice-routing';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  {
    path: 'invoice',
    component: InvoiceComponent,
    children: INVOICE_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
