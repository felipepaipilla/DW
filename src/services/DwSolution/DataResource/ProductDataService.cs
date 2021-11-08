using DataResource.MSSQL;
using Entities;
using Microsoft.EntityFrameworkCore;
using Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataResource
{
    public class ProductDataService : IProductService
    {
        private readonly DwInvoiceDbContext dwInvoiceDbContext;

        public ProductDataService(DwInvoiceDbContext dwInvoiceDbContext)
        {
            this.dwInvoiceDbContext = dwInvoiceDbContext;
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            return await dwInvoiceDbContext.Products.ToListAsync();
        }

        public async Task<Product> GetById(int id)
        {
            return await dwInvoiceDbContext.Products.SingleOrDefaultAsync(x => x.Id.Equals(id));
        }
    }
}
