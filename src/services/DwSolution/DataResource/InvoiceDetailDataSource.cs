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
    public class InvoiceDetailDataResource : IInvoiceDetailService
    {
        private readonly DwInvoiceDbContext dwInvoiceDbContext;

        public InvoiceDetailDataResource(DwInvoiceDbContext dwInvoiceDbContext)
        {
            this.dwInvoiceDbContext = dwInvoiceDbContext;
        }

        public async Task<IEnumerable<InvoiceDetail>> GetByInvoiceId(int invoiceId)
        {
            return await dwInvoiceDbContext.InvoiceDetails.Where(x => x.InvoiceId.Equals(invoiceId)).ToListAsync();
        }
    }
}
