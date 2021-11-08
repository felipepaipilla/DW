import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceIndexComponent } from './components/invoice/invoice-index/invoice-index.component';
import { ProductComponent } from './components/product/product.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { InvoiceDetailIndexComponent } from './components/invoice-detail/invoice-detail-index/invoice-detail-index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvoiceComponent,
    InvoiceIndexComponent,
    ProductComponent,
    InvoiceDetailComponent,
    InvoiceDetailIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
