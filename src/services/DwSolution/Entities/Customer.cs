using System;
using System.Collections.Generic;

#nullable disable

namespace Entities
{
    public partial class Customer
    {
        public Customer()
        {
            Invoices = new HashSet<Invoice>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }

        public virtual ICollection<Invoice> Invoices { get; set; }
    }
}
