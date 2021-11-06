using DataResource.MSSQL;
using Entities;
using Microsoft.EntityFrameworkCore;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataResource
{
    public class CustomerDataResource : ICustomerService
    {
        private readonly DwInvoiceDbContext dwInvoiceDbContext;

        public CustomerDataResource(DwInvoiceDbContext dwInvoiceDbContext)
        {
            this.dwInvoiceDbContext = dwInvoiceDbContext;
        }

        public async Task<IEnumerable<Customer>> GetAll()
        {
            return await dwInvoiceDbContext.Customers.ToListAsync();
        }

        public async Task<Customer> GetById(int id)
        {
            return await dwInvoiceDbContext.Customers.SingleOrDefaultAsync(x => x.Id.Equals(id));
        }
    }
}
