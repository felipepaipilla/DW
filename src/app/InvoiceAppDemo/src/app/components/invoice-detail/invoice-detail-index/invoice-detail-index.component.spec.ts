import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailIndexComponent } from './invoice-detail-index.component';

describe('InvoiceDetailIndexComponent', () => {
  let component: InvoiceDetailIndexComponent;
  let fixture: ComponentFixture<InvoiceDetailIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
