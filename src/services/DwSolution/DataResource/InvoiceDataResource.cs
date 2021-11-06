using DataResource.MSSQL;
using Entities;
using Microsoft.EntityFrameworkCore;
using Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataResource
{
    public class InvoiceDataResource : IInvoiceService
    {
        private readonly DwInvoiceDbContext dwInvoiceDbContext;

        public InvoiceDataResource(DwInvoiceDbContext dwInvoiceDbContext)
        {
            this.dwInvoiceDbContext = dwInvoiceDbContext;
        }

        public async Task<IEnumerable<Invoice>> GetAll()
        {
            return await dwInvoiceDbContext.Invoices.ToListAsync();
        }

        public async Task<Invoice> GetById(int id)
        {
            return await dwInvoiceDbContext.Invoices.SingleOrDefaultAsync(x => x.Id.Equals(id));
        }

        public async Task<Invoice> Save(Invoice invoice)
        {
            dwInvoiceDbContext.Attach(invoice);
            dwInvoiceDbContext.Entry(invoice).State = EntityState.Modified;
            await dwInvoiceDbContext.SaveChangesAsync();
            return invoice;
        }

        public async Task<Invoice> Save()
        {
            Invoice invoice = new Invoice();
            invoice.Date = DateTime.Now;
            await dwInvoiceDbContext.Invoices.AddAsync(invoice);
            await dwInvoiceDbContext.SaveChangesAsync();
            return invoice;
        }
    }
}
