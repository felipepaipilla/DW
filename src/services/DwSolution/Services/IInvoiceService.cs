using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IInvoiceService: IResourceGetAll<Invoice>, IResourceGetById<Invoice, int>, IResourceDelete<int>
    {
        Task<Invoice> Save(Invoice invoice);
    }
}
