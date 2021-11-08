using System;
using System.Collections.Generic;

#nullable disable

namespace Entities
{
    public partial class Product
    {
        public Product()
        {
            InvoiceDetails = new HashSet<InvoiceDetail>();
        }

        public int Id { get; set; }
        public string Detail { get; set; }
        public decimal UnitPrice { get; set; }
        public int Stock { get; set; }

        public virtual ICollection<InvoiceDetail> InvoiceDetails { get; set; }
    }
}
