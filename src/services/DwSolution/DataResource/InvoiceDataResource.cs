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

        public async Task<bool> Delete(int id)
        {
            var item = await dwInvoiceDbContext.Invoices.SingleAsync(x => x.Id.Equals(id));
            item.Deleted = true;
            await dwInvoiceDbContext.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Invoice>> GetAll()
        {
            return await dwInvoiceDbContext.Invoices.Where(x => x.Deleted.Equals(false)).ToListAsync();
        }

        public async Task<Invoice> GetById(int id)
        {
            return await dwInvoiceDbContext.Invoices.SingleOrDefaultAsync(x => x.Id.Equals(id));
        }

        public async Task<Invoice> Save(Invoice invoice)
        {
            if (invoice.Id.Equals(0))
            {
                int? maxSequence = await dwInvoiceDbContext.Invoices.MaxAsync(x => x.InvoiceSequence);
                invoice.Prefix = "FAC";
                invoice.InvoiceSequence = maxSequence.HasValue ? maxSequence.Value + 1 : 0;
                invoice.Deleted = false;
                dwInvoiceDbContext.Invoices.Add(invoice);
            }
            else
            {
                dwInvoiceDbContext.Attach(invoice);
                dwInvoiceDbContext.Entry(invoice).State = EntityState.Modified;
            }

            await dwInvoiceDbContext.SaveChangesAsync();
            return invoice;
        }
    }
}
